# Carl Amiel Balita — Developer Portfolio

A personal portfolio site showcasing my journey as a self-taught developer — built from scratch with vanilla HTML, CSS, and JavaScript, featuring a fully bilingual (English/French) interface, scroll-triggered animations, and a working contact form.

---

## Features

- **Fully bilingual (EN/FR)** — a custom-built translation system using `data-i18n` attributes, covering every section of the site including dynamically generated JavaScript messages (form feedback, Show More button text)
- **Scroll-triggered animations** — sections and elements fade/slide into view as you scroll, powered by the native Intersection Observer API, with different animation directions per section (fade down, slide left, pop in) for a more intentional feel
- **Animated typing effect** — the hero heading cycles through role titles with a custom-built typewriter animation (no external library)
- **Responsive hamburger navigation** — a glassmorphism-style sticky nav that collapses into a mobile menu below tablet width, with auto-close on link click
- **Working contact form** — submits via [Formspree](https://formspree.io/), with real-time success/error feedback (no page reload), fully translated
- **Project showcase** — 7 featured projects (3 shown by default, 4 more behind a "Show More" toggle), each linking directly to its live demo
- **GitHub integration placeholder** — GitHub links currently show a temporary "unavailable" tooltip due to an account suspension outside of my control; these will be restored to direct repository links once resolved

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — Flexbox, Grid, custom properties, glassmorphism (`backdrop-filter`), scroll-based reveal animations, mobile-first responsive design
- **JavaScript (ES6+)** — `async`/`await`, Fetch API, ES Modules, Intersection Observer API, `localStorage`, event delegation, `FormData`
- **[Formspree](https://formspree.io/)** — contact form backend, no custom server required

No frameworks, no UI libraries (no Bootstrap, no animation libraries) — every layout, component, and animation on this site is hand-built, to demonstrate core frontend fundamentals.

---

## Project Structure

```
portfolio/
├── index.html                 # The entire single-page site
├── images/                       # Profile photo, project screenshots, logo
├── styles/
│   └── style.css                    # All styling
└── scripts/
    ├── script.js                       # Main site logic
    └── translations.js                    # Shared translations object + setLanguage()
```

---

## Running Locally

1. Clone or download this repository
2. Open `index.html` with a local server (e.g. VS Code's Live Server extension — required for ES Modules to work correctly)
3. To test the contact form, you'll need your own [Formspree](https://formspree.io/) endpoint — replace the `action` attribute on the contact form with your own

---

## About This Project

This portfolio brings together four of my previous projects — an Amazon clone, a weather dashboard (WeatherWave), a Netflix landing page clone, and a recipe discovery app (FlavorFind) — alongside smaller practice projects (a calculator, a Rock Paper Scissors game, a to-do list). Each was built to deepen a specific set of skills, from API integration and asynchronous JavaScript to `localStorage` persistence and responsive design.

I'm currently deepening my JavaScript fundamentals and preparing to move into React, Node.js/Express, and PostgreSQL as part of an alternance (French work-study program). This portfolio reflects where I am right now — not where I'll eventually be — and will be updated as my skills grow.

---

## Roadmap

- [ ] Restore GitHub repository links once account access is resolved
- [ ] Add React, Node.js/Express, and PostgreSQL projects as I complete that training
- [ ] Add backend functionality to existing frontend projects (Netflix clone, FlavorFind)
- [ ] Lighthouse performance optimization pass

---

## Author

**Carl Amiel Balita**

Self-taught, France-based developer with a strong foundation built through a 9-month intensive training program, including a 2-month internship. Currently continuing self-directed study in JavaScript, React, and full-stack development while actively pursuing an **alternance** (French work-study program) to earn a professional title/diploma and gain hands-on industry experience.

Motivated, consistent, and always building.

**Open to internships, alternance opportunities, and junior developer roles.**

- LinkedIn: [carl-amiel-balita](https://www.linkedin.com/in/carl-amiel-balita-470b562bb/)
- Email: amiel.balita23@gmail.com