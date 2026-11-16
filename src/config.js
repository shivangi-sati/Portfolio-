/**
 * Single place to edit your details.
 * Fill in `email` before deploying — it is the only placeholder left.
 */
export const site = {
  name: "Shivangi Sati",
  role: "Frontend Developer",
  stack: "React · TypeScript · Tailwind CSS",
  tagline:
    "I've spent 3.5 years inside production React apps finding what breaks. Now I build them.",
  location: "Uttar Pradesh, India",

  email: "shivangisati1998@gmail.com",

  github: "https://github.com/shivangi-sati",
  linkedin: "https://www.linkedin.com/in/shivangi-sati-669951199/",

  // Drop your PDF into /public as resume.pdf and this link works.
  resume: "/resume.pdf",

  availability: "Open to Frontend roles · Immediate joiner · Open to relocation",
};

if (site.email.includes("YOUR_EMAIL_HERE")) {
  console.warn(
    "[portfolio] site.email is still a placeholder — set it in src/config.js before deploying."
  );
}
