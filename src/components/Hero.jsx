import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4 text-center"
      >
        Hi, I'm Shivangi
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-700 dark:text-gray-200 mb-6 text-center"
      >
        Frontend Developer | React JS | UI/UX Enthusiast
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
