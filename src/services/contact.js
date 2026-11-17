/**
 * Contact form transport.
 *
 * Web3Forms is used when VITE_WEB3FORMS_KEY is set (see .env.example).
 * Without a key the UI falls back to a mailto: link, so the site never breaks.
 *
 * Note: Vite inlines env vars into the client bundle, so this key is public by
 * design. That is how Web3Forms works — it is not a secret, and it can only
 * send mail to the address it was registered with.
 */
const ENDPOINT = "https://api.web3forms.com/submit";

const key = (import.meta.env.VITE_WEB3FORMS_KEY ?? "").trim();

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
