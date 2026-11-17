import React, { useState } from "react";
import { motion } from "framer-motion";
import { site } from "../config";
import { sendMessage, isFormConfigured } from "../services/contact";

const EMPTY = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | fallback | error
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormConfigured) {
      // No API key: hand off to the visitor's mail client and be honest about it.
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("fallback");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      await sendMessage(form);
      setStatus("sent");
      setForm(EMPTY);
    } catch (err) {
      // Keep the reason in the console for you; show the visitor something human.
      console.error("[contact] send failed:", err);
      setError("The message couldn't be sent just now.");
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const sending = status === "sending";

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-3 text-center">Contact</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Hiring for a frontend role, or need something built? I reply fast.
      </p>

      {/* The address is always on screen, so nobody has to rely on a mail client opening. */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
          >
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="text-xs px-2 py-1 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
            aria-label="Copy email address"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="flex gap-3 text-sm">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            GitHub
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Résumé
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          disabled={sending}
          className="p-3 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-60"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          disabled={sending}
          className="p-3 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-60"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
          disabled={sending}
          className="p-3 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-60"
        />
        <motion.button
          type="submit"
          disabled={sending}
          whileHover={{ scale: sending ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 bg-purple-600 text-white rounded font-medium hover:bg-purple-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? "Sending…" : "Send message"}
        </motion.button>

        {status === "sent" && (
          <p
            role="status"
            className="text-sm text-center rounded border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/30 p-4 text-green-800 dark:text-green-300"
          >
            Message sent. I'll reply to the address you left.
          </p>
        )}

        {status === "fallback" && (
          <div className="text-sm text-center rounded border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 p-4">
            <p className="text-gray-800 dark:text-gray-200 mb-2">
              Your message is ready in your mail app. If it didn't open, email me directly:
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-purple-700 dark:text-purple-300 hover:underline break-all"
            >
              {site.email}
            </a>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="text-sm text-center rounded border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 p-4"
          >
            <p className="text-gray-800 dark:text-gray-200 mb-2">
              {error} You can email me directly instead:
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-purple-700 dark:text-purple-300 hover:underline break-all"
            >
              {site.email}
            </a>
          </div>
        )}
      </form>
    </motion.section>
  );
};

export default Contact;
