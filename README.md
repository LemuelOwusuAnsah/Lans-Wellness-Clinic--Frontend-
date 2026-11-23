# Lans Wellness Clinic

A modern, JavaScript-driven frontend for a wellness clinic. Dynamic content, dark/light mode, PWA support.

## Live

https://lemuelowusuansah.github.io/Lans-Wellness-Clinic--Frontend-/

## Features

- All content rendered dynamically from JavaScript (no hardcoded HTML)
- Dark/light mode with localStorage persistence
- PWA: installable, offline-ready
- Filterable clinical pathways
- Testimonial carousel
- Booking modal with form validation
- Responsive, glass-morphism UI

## Run locally

Open `index.html` in a browser. No install, no server.

Or serve it (needed for the service worker to register):

    python3 -m http.server 8000

Then open http://localhost:8000.

## Files

- `index.html` — shell
- `css/` — styles
- `js/data.js` — clinic content
- `js/render.js` — DOM rendering
- `js/filters.js` — pathway filtering
- `js/booking.js` — booking form logic
- `js/theme.js` — dark/light mode
- `js/pwa.js` — service-worker registration
- `service-worker.js` — offline cache
- `manifest.json` — PWA manifest

## Stack

Plain HTML, CSS, JavaScript. No build step, no dependencies.

## License

MIT — see `LICENSE`.
