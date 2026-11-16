# Shivangi Sati — Portfolio

Personal portfolio built with React 19, Vite, Tailwind CSS v4 and Framer Motion.

**Live:** https://portfolio-drab-seven-26.vercel.app/

## What's in it

- Responsive, mobile-first layout with a working dark mode (class-based, follows the OS on first load)
- Project showcase with live demo and source links
- Contact section that composes a prefilled email — no backend required
- SEO meta tags, Open Graph tags, and Person schema for rich link previews

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # preview the production build
```

## Editing

All personal details live in one file: **`src/config.js`** — name, role, email, GitHub, LinkedIn,
résumé path, availability line.

Two things to do before you deploy:

1. Set `email` in `src/config.js` (it ships as a placeholder and warns in the console).
2. Drop your CV into `public/resume.pdf` so the Résumé buttons work.

## Structure

```
src/
  config.js               # all personal details
  components/
    Navbar.jsx            # responsive nav + dark mode
    Hero.jsx              # headline, availability, CTAs
    About.jsx             # the TCS → frontend story
    Skills.jsx            # grouped skill list
    Projects.jsx          # project data + cards
    Contact.jsx           # mailto-composing form
    Footer.jsx
```

To add a project, append an object to the `projects` array in `src/components/Projects.jsx`:

```js
{
  title: "Project name",
  subtitle: "One-line role",
  description: "What it was and what was hard about it.",
  stack: ["React", "Tailwind CSS"],
  live: "https://...",
  code: "https://github.com/...",
  gradient: "from-purple-500 to-fuchsia-500",
  featured: false,
}
```
