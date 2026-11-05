# Revisión de seguridad del portafolio

Fecha: 5 de noviembre de 2026 (America/Lima).
Código revisado: `c848de8d1ad192cb5396207174fc792eb27c259e`.
URL consultada: https://portafolio-axel-self.vercel.app (enlace incluido en el CV).

## Estado después de las correcciones locales

Se aplicaron las correcciones de dependencias y configuración solicitadas el
5 de noviembre de 2026. El CV, los datos de contacto y los enlaces de descarga se
mantuvieron intactos por indicación del propietario. El resto del documento
conserva los hallazgos y las evidencias de la revisión inicial.

- Next.js y eslint-config-next: **16.4.5**.
- React y React DOM: **19.2.9**.
- sharp: **0.35.5**, compartida con Next.js; ya no se resuelve una copia interna antigua.
- PostCSS: **8.5.23**. También se actualizaron las dependencias transitivas afectadas.
- Sustitución limitada de minimatch por **11.0.4** en el analizador de TypeScript,
  con ESLint validado; las copias 3.x ajenas a ese aviso permanecen en su rama.
- CSP base compatible con páginas estáticas, restricción de enmarcado, `nosniff`,
  política de referencias y política de permisos en todas las rutas.
- Cabecera `X-Powered-By` desactivada.
- Optimizador limitado a las capturas WebP locales sin query string; imágenes
  remotas, SVG y redirecciones no están permitidos. Límite de respuesta de 5 MB.

La CSP permite los scripts inline que necesita Next.js para hidratar páginas
estáticas. Bloquea atributos de eventos inline y no permite `eval` en producción.
Es una protección base; no debe presentarse como una CSP estricta con nonces o
como una solución a cualquier posible XSS futuro.

La restricción del optimizador reduce la exposición a decodificadores de imágenes
no requeridos. No se ejecutaron cargas maliciosas para reproducir el aviso de
bypass de SVG; no se atribuye una prueba de explotación a la comprobación de un
SVG normal.

Validación local: auditoría npm sin vulnerabilidades después de actualizar,
ESLint correcto y compilación de producción correcta. La nueva prueba
`npm run check:security` pasó para las cabeceras de 8 rutas, las 10 capturas,
los rechazos de imágenes no permitidas, los archivos internos y la descarga
intacta del CV. En el navegador se verificaron navegación, apertura y cierre de
galería y apertura/cierre del menú móvil, sin avisos ni errores registrados.

Evidencia posterior a las correcciones: [npm audit: cero vulnerabilidades](C:/Users/axel.cueva/.codex/visualizations/2026/11/05/01a1ac22-8b25-7930-945a-d92e641e72f3/npm-audit-after-fixes.json).

Se corrigió además una declaración de tipo vacía ya existente en `Card.tsx`, sin
cambiar su comportamiento, para que la comprobación ESLint finalizara sin errores.

**Pendiente de despliegue:** las correcciones están en el checkout local. No se
publicó una nueva versión ni se verificaron estas cabeceras en producción después
del cambio. Los resultados de cabeceras públicas que siguen abajo corresponden
a la auditoría inicial.

## Resultado

La prioridad es actualizar las dependencias. El proyecto conserva Next.js 16.2.10 y dos copias de sharp anteriores a las versiones corregidas. npm audit identifica paquetes con avisos críticos y altos. La presencia de versiones afectadas está confirmada; la explotación de esos avisos en producción no está confirmada.

También faltan protecciones HTTP del navegador. Se confirmó la ausencia de CSP y de restricciones de enmarcado tanto en el servidor local de producción como en las respuestas HEAD de la portada y de una página de proyecto publicadas. El impacto actual es limitado porque el sitio presenta contenido público y no tiene acciones sensibles propias.

No se detectaron credenciales mediante los patrones revisados en los archivos de texto del historial local. Esta revisión no determina si hubo una intrusión: no se analizaron registros de acceso ni la cuenta de alojamiento.

## 1. Dependencias con avisos de seguridad pendientes

**Prioridad alta. Existen avisos de severidad crítica, con requisitos de explotación específicos.**

Evidencia:

- `package.json:16`: Next.js está fijado en `16.2.10`.
- `package.json:19`: sharp declara `^0.35.3`; el lockfile fija `0.35.3` en la raíz.
- `package-lock.json:5802`: Next.js tiene su propia copia de sharp `0.34.5`. La resolución de módulos desde Next.js confirmó que usa esa copia.
- `package-lock.json:5761`: Next.js incluye PostCSS `8.4.31`.

Resultados del registro npm al momento de la revisión:

| Alcance del comando | Paquetes señalados | Críticos | Altos | Moderados |
| --- | ---: | ---: | ---: | ---: |
| `npm audit --json --ignore-scripts` | 18 | 1 | 8 | 9 |
| `npm audit --omit=dev --json --ignore-scripts` | 6 | 1 | 4 | 1 |

Los seis paquetes señalados al omitir desarrollo son `next`, `sharp`, `postcss`, `nanoid`, `source-map-js` y `baseline-browser-mapping`. Estos recuentos corresponden a paquetes que npm marca como vulnerables, incluyendo dependencias afectadas transitivamente; no representan 18 ataques independientes ni seis vulnerabilidades explotables por un visitante. Algunas herramientas incluidas como dependencias de producción se utilizan principalmente al compilar.

### Avisos relevantes y aplicabilidad

| Aviso | Impacto descrito por el mantenedor | Relación con este proyecto |
| --- | --- | --- |
| [GHSA-p293-qw3h-jr36](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36) | Ejecución remota de código en servidores Next.js alojados sobre un sistema de archivos Windows; corregido en 16.3.3. | La versión instalada está afectada y esta estación usa Windows. Importa si se expone el servidor a una red no confiable. No se verificó explotación. La respuesta pública identifica Vercel, por lo que no se atribuye a ese despliegue el requisito Windows. |
| [GHSA-2464-fhr4-w9xw](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw) | Posible ejecución remota al optimizar SVG mediante una biblioteca nativa en Linux con glibc; el aviso recomienda sharp >=0.35.5 o Next.js >=16.4.1. | Next.js 16.2.10 y ambas copias instaladas de sharp preceden la corrección. Se usa `next/image`. No se identificó un mecanismo propio para subir contenido de atacantes ni dominios remotos permitidos. No se confirmó el entorno nativo del optimizador de producción ni una vía explotable. |
| [GHSA-2xp9-vwfh-vxw4](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4) | Posible ejecución remota al procesar AVIF con libheif/sharp; Next.js corrigió su exposición en 16.3.3. | Dependencias dentro del rango afectado. Los proyectos utilizan imágenes locales WebP; no se encontró una entrada de imágenes controlada por visitantes. |
| [GHSA-7qx7-33qx-rqx2](https://github.com/vercel/next.js/security/advisories/GHSA-7qx7-33qx-rqx2) | Un SVG suministrado por un atacante puede alcanzar el optimizador en despliegues propios pese a `dangerouslyAllowSVG: false`. El aviso no enumeraba versión corregida. | Aviso adicional consultado directamente al mantenedor, ausente del resultado de npm audit guardado. No se reprodujo el bypass ni se probó un SVG malicioso. Actualizar sharp sigue siendo importante; bloquear SVG por configuración no debe considerarse protección completa frente a este aviso. |

Otros avisos detectados por npm requieren funciones ausentes del código revisado:

- Server Actions: no hay directivas `use server` y el manifiesto de producción contiene cero acciones en Node y Edge.
- Ejecución remota en funciones `use cache` con typed arrays: no se usa `use cache` ni `cacheComponents`.
- `next/og ImageResponse`: no hay generación de imágenes mediante esa API; el icono es un SVG estático.
- Bypass de Middleware/Proxy: no existe una capa de autorización basada en middleware o proxy.
- SSRF del optimizador por dominios remotos: `images.remotePatterns` está vacío. El [aviso del mantenedor](https://github.com/vercel/next.js/security/advisories/GHSA-cjq9-62q9-8jv4) indica que esa configuración no está afectada por ese aviso concreto.
- Confusión de caché de Pages Router SSG/ISR: este proyecto usa App Router; el [aviso correspondiente](https://github.com/vercel/next.js/security/advisories/GHSA-4jqv-mc3x-m676) también excluye despliegues en Vercel.
- Confusión de caché con una ruta catch-all en la raíz: no existe esa estructura de rutas.

**Corrección recomendada:** actualizar Next.js y eslint-config-next de forma coordinada. `npm audit` propuso Next.js `16.4.5`; se verificó su existencia en npm, su dependencia opcional `sharp: ^0.35.5` y su PostCSS `8.5.23`. Actualizar también la dependencia directa sharp a una versión corregida compatible, como mínimo `0.35.5`, regenerar el lockfile y comprobar todas las copias con `npm ls next sharp postcss`.

Revisar la documentación de migración de la versión elegida, ejecutar la compilación y repetir la auditoría después del cambio. Las herramientas transitivas señaladas, incluyendo las de desarrollo, deben revisarse en esa actualización. npm sugirió bajar eslint-config-next a 15.x para ciertos avisos transitivos: no aplicar esa propuesta automáticamente a este proyecto Next.js 16. Evitar `npm audit fix --force` sin revisar las modificaciones.

Para un sitio con contenido estático, también puede evaluarse una exportación estática y optimización de imágenes durante la compilación. Requiere adaptar `next/image` y la configuración de alojamiento; no basta con asumir que el prerenderizado actual elimina el servidor y su optimizador.

## 2. Faltan restricciones de enmarcado y otras cabeceras de protección

**Gravedad baja para el comportamiento actual; confirmado.**

Ubicación de corrección: `next.config.ts:3`, actualmente sin configuración de cabeceras.

La portada y `/proyectos/aura` publicadas respondieron 200 sin `Content-Security-Policy` ni `X-Frame-Options`. Tampoco se observaron `X-Content-Type-Options`, `Referrer-Policy` o `Permissions-Policy` en esas respuestas. Se reprodujo la ausencia de esas cabeceras en el servidor local de producción.

Sin `frame-ancestors` o `X-Frame-Options`, las respuestas no establecen una restricción para que otro sitio las incluya en un iframe. Esto puede facilitar interfaces engañosas que superpongan elementos sobre el portafolio. No se encontraron transacciones ni controles de cuenta que eleven actualmente el impacto.

La ausencia de CSP reduce una capa de protección ante futuras inyecciones. No constituye, por sí misma, evidencia de XSS: no se encontró una entrada controlada por visitantes que se inserte como HTML o JavaScript.

**Corrección recomendada:**

1. Añadir una CSP con `frame-ancestors 'none'` y, como compatibilidad, `X-Frame-Options: DENY` si no se necesita incrustar el sitio.
2. Definir `X-Content-Type-Options: nosniff` y una política explícita de referencias, por ejemplo `strict-origin-when-cross-origin`.
3. Añadir una política de permisos que deshabilite cámara, micrófono y geolocalización si no se necesitan.
4. Diseñar y probar el resto de la CSP considerando los scripts de Next.js y Vercel Analytics. La portada generada contiene 13 scripts inline: una política que simplemente los bloquee rompería el comportamiento del sitio. Un nonce por respuesta también cambia los requisitos de renderizado y caché. Consultar la guía local de CSP antes de elegir la implementación.
5. Verificar las cabeceras reales después de desplegar, en HTML, páginas de error y archivos públicos relevantes.

Referencias oficiales: [cabeceras de Next.js](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers) y [CSP en Next.js](https://nextjs.org/docs/app/guides/content-security-policy). También se consultaron las guías incluidas en `node_modules/next/dist/docs/`.

HTTPS está activo: la petición HTTP a la portada recibió 308 hacia HTTPS y las respuestas HTTPS incluyen `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`. No se reporta ausencia de HSTS en producción. El servidor local HTTP carece de HSTS, lo cual no es un hallazgo de seguridad.

## 3. Exposición deliberada de datos de contacto

**Informativo; no se clasifica como fuga de credenciales ni fallo de control de acceso.**

`src/data/portfolio.ts:1` publica correo y teléfono mediante el enlace a WhatsApp. `public/cv.pdf` agrega nombre completo y distrito. El CV se sirve sin autenticación en `/cv.pdf`, como corresponde a los enlaces de descarga del sitio.

Estos datos pueden recopilarse automáticamente y usarse para spam o mensajes de suplantación dirigidos. Conservar solo los datos que se deseen publicar; considerar un número y correo profesionales y una ubicación menos precisa. No se encontró DNI ni dirección domiciliaria exacta en las dos páginas del CV revisado.

Se inspeccionaron ambas páginas, metadatos, enlaces, adjuntos y acciones del PDF. No se identificaron JavaScript ni archivos adjuntos; su `OpenAction` es una navegación interna de tipo `GoTo`, no ejecución de código. Las capturas de CRM inspeccionadas muestran contactos de ejemplo y no evidenciaron credenciales.

## Controles que se comprobaron

- El portafolio no implementa autenticación, base de datos, API propia, carga de archivos ni formulario que reciba mensajes. Las funciones descritas en los proyectos son contenido del portafolio, no servicios implementados en este repositorio.
- Los slugs se comparan con la lista de proyectos; los desconocidos terminan en 404.
- No se encontraron usos de `dangerouslySetInnerHTML`, `innerHTML`, `eval` ni construcción de comandos con entradas de visitantes en el código de la aplicación.
- Los enlaces externos que abren pestaña utilizan `rel="noopener noreferrer"`.
- `.gitignore` excluye `.env*`, `.vercel` y claves PEM. No hay archivos `.env` en la raíz revisada.
- Se buscaron patrones de claves privadas, tokens comunes, asignaciones de credenciales y URLs con credenciales en 70 versiones únicas de archivos de texto de los 7 commits locales disponibles: cero coincidencias. No es un escaneo exhaustivo de todos los formatos de secretos ni de ramas remotas no disponibles.
- La compilación de producción con `npm run build` finalizó correctamente, incluida la comprobación TypeScript. El primer intento dentro del sandbox falló por el inicio de un subproceso de Turbopack; la ejecución fuera del sandbox pasó.
- No se generaron archivos `.map` de navegador en `.next/static/chunks` y `productionBrowserSourceMaps` está desactivado.

## Comprobaciones HTTP locales

Se usó una compilación de producción y un servidor temporal ligado a `127.0.0.1`; el servidor se cerró al terminar. No se ejecutaron cargas de explotación ni pruebas de saturación.

| Petición | Resultado |
| --- | --- |
| `/` y `/proyectos/aura` | 200 |
| `/proyectos/no-existe` y `/proyectos/__proto__` | 404 |
| `/.env`, `/.git/config`, `/package.json`, `/next.config.ts`, `/src/data/portfolio.ts` | 404 |
| `/api/contact` | 404; no existe ese endpoint |
| `/cv.pdf` | 200, `application/pdf` |
| Optimización de un WebP local existente | 200 |
| Optimización de `https://example.com/a.png` | 400, URL no permitida |
| Optimización normal de `/icon.svg` | 400, tipo de imagen no permitido |

El rechazo de un SVG normal solo confirma el comportamiento nominal. No demuestra resistencia al aviso de bypass de SVG citado anteriormente.

## Límites y evidencias

En producción solo se consultaron cabeceras mediante HEAD de la portada, una página de proyecto y el CV, además de la redirección HTTP. No se verificó que la versión desplegada corresponda exactamente a este commit o lockfile, ni se inspeccionaron la configuración privada de Vercel, registros, variables remotas, controles de la cuenta, WAF o límites del optimizador administrado.

No se revisaron en profundidad los sitios de terceros enlazados ni el backend de los proyectos mostrados. La ausencia de hallazgos de inyección y credenciales se limita al código, historial local y comprobaciones descritos.

Evidencias guardadas fuera del código de la aplicación:

- [Auditoría completa de npm](C:/Users/axel.cueva/.codex/visualizations/2026/11/05/01a1ac22-8b25-7930-945a-d92e641e72f3/npm-audit.json).
- [Auditoría de npm sin desarrollo](C:/Users/axel.cueva/.codex/visualizations/2026/11/05/01a1ac22-8b25-7930-945a-d92e641e72f3/npm-audit-production.json).
- [Comprobaciones HTTP locales](C:/Users/axel.cueva/.codex/visualizations/2026/11/05/01a1ac22-8b25-7930-945a-d92e641e72f3/http-local.json).
- [Cabeceras de la portada publicada](C:/Users/axel.cueva/.codex/visualizations/2026/11/05/01a1ac22-8b25-7930-945a-d92e641e72f3/http-production-home.txt).

La revisión inicial agregó únicamente este informe. Las correcciones posteriores
y su validación están descritas en la sección de estado al principio del documento.
No se realizó ningún despliegue.
