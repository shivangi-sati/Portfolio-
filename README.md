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
2. Optional — make the contact form deliver mail. Get a free key from
   [web3forms.com](https://web3forms.com), then paste it into `web3formsKey` in
   **`src/config.js`** (recommended), or set `VITE_WEB3FORMS_KEY` in a local `.env`.
   **Without a key the form still works** — it falls back to opening the visitor's mail client.

## Contact form

`src/services/contact.js` posts to Web3Forms when a key is present, with the three real states wired up:
idle, sending, and error. On failure the submission is not silently swallowed — the UI shows a friendly
message and offers the email address as a fallback.

The key is baked into the client bundle, so it is public. That is how Web3Forms works; a key can only
deliver to the address it was registered with. It is not a secret, which is why it lives in `src/config.js`
next to the email address it belongs to.

Keeping it there instead of in a Vercel environment variable is deliberate: Vercel warns (and can refuse
to save) when a variable uses a framework's public prefix such as `VITE_`, and that prefix is exactly what
Vite requires to expose a value to the browser. Putting a public value in source sidesteps the mismatch.

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
