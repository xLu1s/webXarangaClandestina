# La Clandestina

Landing bilingüe de la charanga La Clandestina, construida con Astro y Tailwind CSS. El objetivo principal es recibir solicitudes de presupuesto en WhatsApp.

## Comandos

| Comando | Acción |
| --- | --- |
| `npm run dev` | Desarrollo en `http://localhost:4321` |
| `npm run check` | Comprueba Astro y TypeScript |
| `npm run build` | Genera la web estática y el sitemap en `dist/` |
| `npm run preview` | Previsualiza la build |

## Contenido editable

- `src/data/content.ts`: todos los textos en castellano y valenciano.
- `src/data/site.ts`: dominio, teléfono, zona de actuación y redes sociales.
- `src/data/media.ts`: rutas y textos alternativos de todas las fotos y vídeos.
- `/`: versión en castellano.
- `/va/`: versión en valenciano.

Los perfiles sociales están vacíos a propósito. Solo se muestran después de añadir una URL real en `src/data/site.ts`.

## Sustituir fotos y vídeos

Puedes reemplazar los archivos conservando estos nombres, sin modificar componentes:

| Archivo | Recomendación |
| --- | --- |
| `src/images/FotoHero.webp` | Foto principal del hero, preferiblemente vertical |
| `src/images/MorosYCristianos.webp` | Foto destacada de Moros y Cristianos, mínimo 1200 px de ancho |
| `src/videos/EntradaCocentaina.mp4` | Vídeo vertical de la entrada en Cocentaina |
| `src/videos/Pasacarrer.mp4` | Vídeo vertical del pasacalle |
| `src/videos/Percu.mp4` | Vídeo vertical de percusión |
| `src/videos/EntradaMora.mp4` | Vídeo vertical de la entrada mora |
| `src/videos/Dinar.mp4` | Vídeo vertical de comida festera |
| `src/videos/Despedida.mp4` | Vídeo vertical de despedida |
| `src/images/*Poster.webp` | Portadas ligeras generadas para esos vídeos |

Si cambias nombres o añades piezas, actualiza únicamente `src/data/media.ts`. Conviene exportar vídeo MP4 H.264 con `faststart` e imágenes WebP con calidad 75-85.

## WhatsApp

El teléfono está centralizado como `34663401455` en `src/data/site.ts`. El formulario no almacena datos: valida los campos, compone un mensaje y abre WhatsApp.

## SEO

- `public/robots.txt` permite rastreo y apunta al sitemap.
- `@astrojs/sitemap` incluye automáticamente `/` y `/va/` al compilar.
- Cada idioma tiene título, descripción, canonical, `hreflang` y locale Open Graph propios.
- `src/layouts/Layout.astro` genera datos estructurados `MusicGroup` sin testimonios ni cifras ficticias.
- `public/og-default.webp` es la tarjeta social de 1200 × 630 px.

Antes de publicar, confirma el dominio en `astro.config.mjs` y `src/data/site.ts`. Ambos deben coincidir.

## Datos pendientes

El logo actual es tipográfico y el contenido multimedia sigue siendo provisional. Añade el logo y los datos reales cuando estén disponibles; no publiques cifras, testimonios, correos o perfiles sociales sin verificar.
