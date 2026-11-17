/**
 * Contact form transport.
 *
 * The Web3Forms key is read from VITE_WEB3FORMS_KEY if present, otherwise from
 * `web3formsKey` in src/config.js. Without a key the UI falls back to a mailto:
 * link, so the site never breaks.
 *
 * Either way the key ends up in the client bundle — it is public by design.
 * That is how Web3Forms works: it can only send mail to the address it was
 * registered with.
 */
import { web3formsKey } from "../config";

const ENDPOINT = "https://api.web3forms.com/submit";

const key = (import.meta.env.VITE_WEB3FORMS_KEY || web3formsKey || "").trim();

export const isFormConfigured = key.length > 0;

export async function sendMessage({ name, email, message }) {
  if (!isFormConfigured) {
    throw new Error("Contact form is not configured.");
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      name,
      email,
      subject: `Portfolio enquiry from ${name}`,
      message,
      from_name: "Portfolio contact form",
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || data.success !== true) {
    throw new Error(data.message || "The message could not be sent.");
  }

  return data;
}
