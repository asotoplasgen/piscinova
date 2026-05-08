# Piscinova Landing

Landing de captacion para Piscinova creada con `React + Vite`, lista para publicar en Vercel.

## Antes de publicar

1. Cambia el numero de WhatsApp.
   Crea un archivo `.env` a partir de `.env.example` y pon tu numero real:

   ```env
   VITE_WHATSAPP_NUMBER=34600111222
   ```

2. Copia las fotos reales en `public/assets/` con estos nombres:

   - `piscina-limpia-hero.jpg`
   - `piscina-limpia-principal.jpg`
   - `piscina-sucia-1.jpg`
   - `piscina-sucia-2.jpg`
   - `antes-despues.jpg`

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, importa el repositorio.
3. Framework preset: `Vite`.
4. Define la variable de entorno `VITE_WHATSAPP_NUMBER`.
5. Deploy.

El proyecto incluye `vercel.json` para servir correctamente la SPA.
