import React from "react";
import { motion } from "framer-motion";
import { site } from "../config";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 bg-gradient-to-br from-purple-100 via-white to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 text-gray-900 dark:text-white">
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-5 text-xs sm:text-sm font-medium tracking-wide uppercase text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 px-4 py-1.5 rounded-full"
      >
        {site.availability}
      </motion.p>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
      >
        Hi, I'm {site.name}
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-lg sm:text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4 text-center"
      >
        {site.role} — {site.stack}
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="max-w-xl text-center text-gray-700 dark:text-gray-300 mb-9 leading-relaxed"
      >
        {site.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-purple-600 text-white rounded font-medium hover:bg-purple-700 transition"
        >
          View My Work
        </a>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-purple-600 text-purple-700 dark:text-purple-300 dark:border-purple-400 rounded font-medium hover:bg-purple-50 dark:hover:bg-purple-900/40 transition"
        >
          Résumé
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          GitHub
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
