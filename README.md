# elliotmg.github.io

Personal website for Elliot MG, built with plain HTML, CSS, and JavaScript.

## Edit the website

Each main area has its own simple HTML page:

- `index.html` — About
- `research.html` — Research interests
- `publications.html` — Publications
- `cv.html` — Curriculum vitae
- `teaching.html` — Teaching and supervision
- `style.css` — shared layout and styling
- `script.js` — mobile navigation and the footer year

Open any file on GitHub and select the pencil icon, or clone the repository and edit it locally.

The About page uses `profile-placeholder.svg` as a temporary portrait. To add a real photo, upload an image such as `profile.jpg` to the repository and change the `src` on the `<img>` in `index.html`. Keep the `alt` text descriptive.

To preview changes locally, open `index.html` in a browser. No build step or package installation is required. Replace the placeholder project copy, email address, and social links in `index.html` before publishing.

## Deployment

The workflow in `.github/workflows/pages.yml` deploys the repository to GitHub Pages whenever changes are pushed to `main`. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** once.
