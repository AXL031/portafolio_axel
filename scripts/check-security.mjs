import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { readFile, readdir } from 'node:fs/promises'
import { createServer } from 'node:net'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const projectRoot = fileURLToPath(new URL('../', import.meta.url))

// Ask the OS for an available port and bind the test server to loopback only.
const portReservation = createServer()
portReservation.listen(0, '127.0.0.1')
await once(portReservation, 'listening')
const { port } = portReservation.address()
await new Promise((resolve, reject) => {
  portReservation.close(error => error ? reject(error) : resolve())
})

const server = spawn(process.execPath, [
  require.resolve('next/dist/bin/next'),
  'start', '--hostname', '127.0.0.1', '--port', String(port),
], {
  cwd: projectRoot,
  env: { ...process.env, NODE_ENV: 'production', NEXT_TELEMETRY_DISABLED: '1' },
  stdio: ['ignore', 'pipe', 'pipe'],
  windowsHide: true,
})

let serverOutput = ''
server.stdout.on('data', data => { serverOutput = (serverOutput + data).slice(-16_000) })
server.stderr.on('data', data => { serverOutput = (serverOutput + data).slice(-16_000) })

const expectedHeaders = {
  'x-frame-options': 'DENY',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
}

async function request(path) {
  return fetch(`http://127.0.0.1:${port}${path}`, {
    redirect: 'manual',
    signal: AbortSignal.timeout(15_000),
  })
}

function checkHeaders(response, path) {
  for (const [header, value] of Object.entries(expectedHeaders)) {
    assert.equal(response.headers.get(header), value, `${header} on ${path}`)
  }
  assert.equal(response.headers.get('x-powered-by'), null, `framework header on ${path}`)
  const csp = response.headers.get('content-security-policy')
  assert.ok(csp, `CSP on ${path}`)
  const directives = new Set(csp.split(';').map(value => value.trim()))
  for (const directive of [
    "default-src 'self'", "connect-src 'self'", "object-src 'none'",
    "frame-src 'none'", "frame-ancestors 'none'", "script-src-attr 'none'",
    "base-uri 'self'", "form-action 'self'", 'upgrade-insecure-requests',
  ]) assert.ok(directives.has(directive), `${directive} on ${path}`)
  assert.ok(!csp.includes("'unsafe-eval'"), `eval disabled in production on ${path}`)
  assert.ok(!csp.includes('va.vercel-scripts.com'), `no development source on ${path}`)
}

try {
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => finish(new Error(`Server startup timed out\n${serverOutput}`)), 45_000)
    const onData = () => { if (serverOutput.includes('Ready')) finish() }
    const onExit = code => finish(new Error(`Server exited (${code})\n${serverOutput}`))
    const onError = error => finish(error)
    function finish(error) {
      clearTimeout(timeout)
      server.stdout.off('data', onData)
      server.off('exit', onExit)
      server.off('error', onError)
      if (error) reject(error)
      else resolve()
    }
    server.stdout.on('data', onData)
    server.once('exit', onExit)
    server.once('error', onError)
  })

  const manifest = JSON.parse(await readFile(new URL('../.next/prerender-manifest.json', import.meta.url), 'utf8'))
  const projectPaths = Object.keys(manifest.routes).filter(path => path.startsWith('/proyectos/'))
  assert.ok(projectPaths.length > 0, 'Build must include project pages; run npm run build first')
  for (const path of ['/', ...projectPaths, '/cv.pdf', '/proyectos/no-existe']) {
    const response = await request(path)
    assert.equal(response.status, path === '/proyectos/no-existe' ? 404 : 200, path)
    checkHeaders(response, path)
    const body = Buffer.from(await response.arrayBuffer())
    if (path === '/cv.pdf') {
      assert.ok(body.equals(await readFile(new URL('../public/cv.pdf', import.meta.url))), 'CV must remain available unchanged')
    }
  }

  for (const path of ['/.env', '/.git/config', '/package.json', '/next.config.ts', '/src/data/portfolio.ts']) {
    const response = await request(path)
    assert.equal(response.status, 404, `internal file ${path}`)
    await response.arrayBuffer()
  }

  const assetsRoot = new URL('../public/portfolio-assets/', import.meta.url)
  const assets = (await readdir(assetsRoot, { recursive: true }))
    .filter(path => path.endsWith('.webp'))
    .map(path => `/portfolio-assets/${path.replaceAll('\\', '/')}`)
  assert.ok(assets.length > 0, 'Portfolio screenshots must be present')
  for (const asset of assets) {
    const response = await request(`/_next/image?url=${encodeURIComponent(asset)}&w=640&q=75`)
    assert.equal(response.status, 200, `optimize ${asset}`)
    assert.match(response.headers.get('content-type') ?? '', /^image\//)
    await response.arrayBuffer()
  }
  for (const image of [
    '/icon.svg', '/next.svg', '/cv.pdf', 'https://example.com/a.png',
    `${assets[0]}?unexpected=1`,
  ]) {
    const response = await request(`/_next/image?url=${encodeURIComponent(image)}&w=640&q=75`)
    assert.equal(response.status, 400, `reject image ${image}`)
    await response.arrayBuffer()
  }
  console.log(`Security checks passed: headers on ${projectPaths.length + 3} routes, ${assets.length} screenshots, image restrictions, internal files and CV download.`)
} finally {
  if (server.exitCode === null) {
    const exited = once(server, 'exit')
    server.kill()
    await exited
  }
}
