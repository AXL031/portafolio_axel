This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Comprobaciones de seguridad

Utiliza Node.js 22 o 24 y las versiones fijadas en `package-lock.json`.

```bash
npm ci
npm audit
npm run lint
npm run build
npm run check:security
```

`check:security` necesita una compilación de producción existente. Inicia y cierra
un servidor temporal en `127.0.0.1` y comprueba las cabeceras de las páginas, las
restricciones del optimizador de imágenes, el bloqueo de archivos internos y la
descarga del CV. No modifica archivos públicos ni realiza peticiones al sitio
desplegado.

La CSP permite los scripts inline que necesita la hidratación de las páginas
estáticas de Next.js. Restringe los demás recursos al propio sitio, bloquea marcos
y objetos y deshabilita `eval` en producción. Vercel Analytics utiliza su ruta del
mismo origen en producción; su dominio de depuración solo se permite durante el
desarrollo. Esta es una CSP base compatible con el renderizado estático, no una
CSP estricta con nonces. Si se añaden formularios o contenido de terceros, revisar
la política y la validación de esas entradas.

El optimizador solo acepta WebP locales bajo `/portfolio-assets/`, sin parámetros
adicionales. No permite imágenes remotas ni redirecciones y limita la respuesta a
5 MB. Si se agregan imágenes de otro formato o procedencia, revisar explícitamente
esta restricción.

El `override` de `minimatch` se limita a `@typescript-eslint/typescript-estree` para
corregir [GHSA-g3hv-75wg-m249](https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249).
La rama 10.x requerida por el analizador seguía afectada al realizar esta revisión;
se utiliza 11.0.4, validada con ESLint y la compilación del proyecto. Revisar si
puede retirarse al actualizar TypeScript ESLint. No reemplazar globalmente las
copias 3.x utilizadas por otras herramientas.

Las cabeceras configuradas en `next.config.ts` se aplican al servidor Next.js y
al despliegue habitual en Vercel. Si se cambia a una exportación estática servida
por otro proveedor, configurar allí las cabeceras. Comprobar HTTPS, HSTS y las
cabeceras de la URL pública después de desplegar.
