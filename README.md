# Zhihao Zhu Academic Homepage

Personal academic homepage for Zhihao Zhu / 朱志浩, presenting research on efficient generative Vision-Language-Action models for autonomous driving. The site is a fully static Astro project using TypeScript and Tailwind CSS.

## Local development

```bash
npm ci
npm run dev
```

Astro prints the local preview URL, usually `http://localhost:4321`.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` runs `astro check` before generating the static site in `dist/`.

## Updating content

All public-facing text is separated from the components:

- `src/data/profile.ts` — identity, profile links, SEO, and last-updated date
- `src/data/news.ts` — recent updates
- `src/data/publications.ts` — publication metadata, links, images, and key results
- `src/data/research.ts` — research directions
- `src/data/experience.ts` — education and experience

Publication links are validated during the build to reject placeholders such as `#` or `TODO`.

## Images, BibTeX, and CV

- Keep the portrait at `public/avatar.jpg`.
- Put citation files in `public/bib/`.
- To add a CV, place it at `public/cv.pdf` and set `profileLinks.cv` to `"/cv.pdf"` in `src/data/profile.ts`. Leave the value empty when no CV exists; the site then omits the link.
- The social preview is `public/og-image.png`. Its editable source is `public/og-image.svg`.

The current publication layout is intentionally text-only. If figures are added later, use only official paper, project-page, or repository assets and never placeholder paths.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the static site, and deploys `dist/` to GitHub Pages. In the repository settings, select **GitHub Actions** as the Pages source. This is a `username.github.io` repository, so no Astro `base` path is required.
