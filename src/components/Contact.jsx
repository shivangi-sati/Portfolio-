import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800 max-w-3xl mx-auto rounded shadow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="p-3 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="p-3 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="p-3 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" rows="5" required></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
