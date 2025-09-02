# Hosting this Next.js Website on GitHub Pages

This project is a Next.js app configured for static export and deployment to GitHub Pages.

## How to Deploy

1. The project is configured with `next.config.mjs` to output a static export (`next export`).

2. A GitHub Actions workflow is set up in `.github/workflows/deploy.yml` to automatically build and deploy the site to GitHub Pages on pushes to the `main` branch.

3. The static site is generated in the `out` directory and deployed to the `gh-pages` branch by the workflow.

## Manual Deployment Steps (Optional)

If you want to deploy manually:

```bash
pnpm install
pnpm run build
pnpm run export
git add out
git commit -m "Deploy static site"
git push origin main
```

Then push the contents of the `out` folder to the `gh-pages` branch or use GitHub Pages settings to serve from the `out` folder.

## Notes

- Make sure your repository's GitHub Pages settings are configured to serve from the `gh-pages` branch.

- The workflow requires the default `GITHUB_TOKEN` secret to deploy.

- The site is built using Node.js 18 and pnpm package manager.
# Tidy-Team-Services
