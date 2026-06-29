# Omnifood Landing Page

Omnifood is a modern, responsive landing page for a fictional AI-powered meal subscription service. Built with HTML, CSS, and JavaScript, this project showcases a polished marketing website with a compelling hero section, featured brand logos, a step-by-step how-it-works section, meal cards, testimonials, pricing, and a strong call to action. The design highlights clean UI, accessibility, and responsive layout across desktop and mobile devices.

## Project structure

- `index.html` — Main HTML file for the landing page.
- `style.css` — Primary page styles.
- `general.css` — Shared/global styles used across pages and components.
- `queries.css` — Responsive media queries and layout adjustments.
- `script.js` — Client-side JavaScript for interactive behaviors.
- `manifest.webmanifest` — Web app manifest for installability and PWA features.
- `img/` — Image assets grouped into subfolders (`app/`, `customers/`, `gallery/`, `logos/`, `meals/`).

## Features

- Responsive layout using CSS and media queries
- Clean, accessible markup in `index.html`
- Lightweight JavaScript for interactivity in `script.js`
- Structured assets for easy updates and reuse

## How to use

1. Open `index.html` in a browser to view the landing page locally.

2. For a simple local server (recommended), use any static file server. Example using Python 3 (run from the project root):

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use Node.js `http-server`:

```bash
npm install -g http-server
http-server -p 8000
# then open http://localhost:8000
```

## Editing and development

- Update content in `content.md` and `index.html` as needed.
- Edit styles in `style.css`, `general.css`, and `queries.css`.
- Update or add images inside the `img/` folder.

After changes, refresh the browser or use a live-reload tool for faster feedback.

## Deployment

---

## License

All rights reserved.
