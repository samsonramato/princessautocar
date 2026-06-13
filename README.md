# Princess Auto Austin

Marketing website for Princess Auto Austin — auto repair & used car sales in Austin, TX.

Built with **[Astro](https://astro.build)** + **[Tailwind CSS v4](https://tailwindcss.com)**. Static output, deployed on Netlify.

## Develop

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Project structure

```
public/assets/        Images, logo (served at /assets/...)
src/
  data/
    site.js           Business info: address, phones, hours, Google Place ID, map
    cars.js           Inventory listings (set featured: true to show on home)
    translations.js   EN / ES / AM UI strings (client-side language switcher)
  components/          Header, Footer, CarCard, SectionHeading, PageHero
  layouts/Layout.astro Base HTML shell, fonts, SEO meta, language switcher
  pages/              index, services, inventory, about, contact
  styles/global.css   Tailwind import + design tokens + component classes
netlify.toml          Build command + publish dir for Netlify
```

## Common edits

- **Change phone / address / hours / email** → `src/data/site.js`
- **Add or update cars** → `src/data/cars.js`
- **Edit translations** → `src/data/translations.js`
- **Tweak colors / fonts** → the `@theme` block in `src/styles/global.css`

## Contact form

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) — submissions
appear in the Netlify dashboard under **Forms**. No backend or API key required.

## Notes

- The Google Maps embed and "Leave a Review" link are configured via `site.js`.
- The previous version's exposed Google Maps API key has been removed; reviews now link
  out to Google instead of fetching client-side.
