/**
 * Single place to edit your details.
 * Fill in `email` before deploying — it is the only placeholder left.
 */
export const site = {
  name: "Shivangi Sati",
  role: "Frontend Developer",
  stack: "React · JavaScript · Tailwind CSS",
  tagline:
    "I've spent 3.5 years inside production React apps finding what breaks. Now I build them.",
  location: "Ghaziabad, NCR, India",

  email: "shivangisati7@gmail.com",

  github: "https://github.com/shivangi-sati",
  linkedin: "https://www.linkedin.com/in/shivangi-sati-669951199/",

  resume: "/resume.pdf",

  availability: "Open to Frontend roles · Remote / NCR · Immediate joiner",
};

/**
 * Web3Forms access key (free from https://web3forms.com).
 *
 * IMPORTANT: Web3Forms delivers submissions to the email address that was
 * entered when THIS KEY was created. Changing `site.email` above only changes
 * the address shown on the site and used by the mailto: fallback — it does NOT
 * change the form's delivery inbox. To move delivery to a new address, create a
 * new key with that address and paste it here.
 *
 * The key is public by design: it can only send mail to the address it was
 * issued for. Keeping it here (rather than in a Vercel env var) avoids Vercel's
 * warning about the VITE_ public prefix.
 */
export const web3formsKey = 'bc223382-d525-447f-89cc-ebb0ca47fb70';

if (site.email.includes("YOUR_EMAIL_HERE")) {
  console.warn(
    "[portfolio] site.email is still a placeholder — set it in src/config.js before deploying."
  );
}
