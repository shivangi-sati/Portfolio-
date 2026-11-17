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

Before you deploy:

1. Drop your CV into `public/resume.pdf` so the Résumé buttons work.
2. Optional — make the contact form deliver mail. Copy `.env.example` to `.env` and set
   `VITE_WEB3FORMS_KEY` (free key from [web3forms.com](https://web3forms.com), mailed to you instantly).
   **Without a key the form still works** — it falls back to opening the visitor's mail client.

## Contact form

`src/services/contact.js` posts to Web3Forms when a key is present, with the three real states wired up:
idle, sending, and error. On failure the submission is not silently swallowed — the UI shows a friendly
message and offers the email address as a fallback.

The key is baked into the client bundle at build time, so it is public. That is how Web3Forms works; a
key can only deliver to the address it was registered with. It is not a secret, but it is still kept out
of git via `.gitignore`.

To deploy the working form, add `VITE_WEB3FORMS_KEY` in **Vercel → Project → Settings → Environment
Variables** and redeploy — Vite bakes env vars at build time, so changing it requires a new build.

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
