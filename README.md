# Zagros Project

A multilingual website built with Astro and Sanity CMS.

## Project Structure

The project is split into two main parts:

```text
/
├── zagros-astro/     # Astro frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── ...          # Configuration files
│
└── zagros-sanity/    # Sanity Studio CMS
    ├── schemaTypes/  # Content schemas
    └── ...          # Sanity configuration
```

## Development

### Frontend (Astro)

```bash
cd zagros-astro
npm install
npm run dev
```

### CMS (Sanity Studio)

```bash
cd zagros-sanity
npm install
npm run dev
```

## Deployment

### Frontend

The Astro frontend is deployed to Vercel:
1. Push to GitHub
2. Import in Vercel
3. Vercel will automatically detect Astro settings

### Sanity Studio

The Sanity Studio is deployed to Sanity's hosting:
1. Login to Sanity: `npx sanity login`
2. Deploy: `npx sanity deploy`
