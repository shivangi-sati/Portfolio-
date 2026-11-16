import React from "react";
import { motion } from "framer-motion";
import { site } from "../config";

const highlights = [
  {
    title: "3.5 years inside production React apps",
    body: "At TCS I debugged the React UIs real enterprise users were complaining about — not tutorial code.",
  },
  {
    title: "I find the cause, not the symptom",
    body: "State bugs, API integration failures, async and rendering issues — traced to a reproducible case.",
  },
  {
    title: "Ship end to end",
    body: "Architecture, global state, API integration, responsive layout, deployment. Frontend to live URL.",
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-5">
        I build frontends with React, JavaScript and TypeScript — and I debug them like someone who
        has had to answer for them in production. For 3.5 years at TCS I supported live enterprise
        React applications: reproducing UI state bugs from vague user reports, tracing API
        integration failures, and verifying fixes across browsers before release.
      </p>

      <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-10">
        That background is why I care about loading states, error states and edge cases that never
        show up in a demo. Since then I've moved fully into building — {site.location} based,
        shipping deployed React projects end to end.
      </p>

      <div className="grid sm:grid-cols-3 gap-4">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
