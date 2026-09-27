# Extreme Landscaping & Gardening Solutions Ltd — React Site

A React (Vite + React Router) rebuild of extremelandscapingandgardeningsolutions.co.uk,
covering all pages from the live site:

- Home
- Block Paving
- Resin
- Patios
- Landscaping
- Fencing
- Pressure Washing
- Gallery
- Customer Reviews (with a client-side testimonial form)
- Contact (with a client-side quote request form)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Building for production

```bash
npm run build
```

This outputs a static production build to `dist/`, which you can deploy to any
static host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Project structure

```
src/
  data/siteData.js       Central place for business info, nav, services, reviews, images
  components/            Header, Footer, Layout, and shared sections reused on every page
  pages/                 One file per route
  index.css              All styling (no external CSS framework required)
```

## Notes on images

To keep the project lightweight, the images reference the same media URLs used by
the live WordPress site (`wp-content/uploads/...`). If you'd like the images to be
self-hosted:

1. Download the images you want to keep from the live site.
2. Put them in `public/images/`.
3. Update the paths in `src/data/siteData.js` (the `IMG_BASE` constant, plus any
   individual image paths in the page files) to point at `/images/...` instead.

## Forms

The Contact and Reviews pages include working front-end forms with basic
validation and a success state, but they don't send data anywhere yet — there's
no backend wired up. To make them functional you can either:

- Point them at a form service (Formspree, Getform, Web3Forms, etc.) by posting
  the form data to that service's endpoint, or
- Build a small backend/serverless function that emails the submission to
  extremelandscaping@mail.com.

## Customizing

- Phone numbers, email, and company details all live in `src/data/siteData.js`
  under the `business` object — change them there and they'll update everywhere.
- Colors and fonts are controlled by CSS variables at the top of `src/index.css`.
