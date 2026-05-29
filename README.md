# Zhihao Zhu Academic Homepage

Personal academic homepage for Zhihao Zhu / 朱志浩, focused on efficient
generative Vision-Language-Action models for autonomous driving.

The site is built with Astro, TypeScript, and Tailwind CSS. Content is kept in
`src/data/` so publications, projects, news, and profile links can be edited
without touching page components.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```text
src/
  components/
  data/
  pages/
  styles/
public/
  avatar.jpg
  cv.pdf
  papers/
```

`public/avatar.jpg`, `public/cv.pdf`, and teaser images under `public/papers/`
are intentionally optional. The page displays placeholders if paper images are
missing, and TODO profile links render as disabled buttons until real values are
provided.

## Deployment

This repository includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds the Astro site and deploys `dist/` to
GitHub Pages.

For this `username.github.io` repository, no Astro `base` path is needed.
In GitHub repository settings, set Pages deployment source to `GitHub Actions`.
