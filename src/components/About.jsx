import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded shadow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
        I'm a passionate Frontend Developer with experience in React, JavaScript, 
        and modern web technologies. I love creating clean, responsive, and 
        user-friendly web applications. I enjoy turning complex problems into 
        simple, beautiful solutions.
      </p>
    </motion.section>
  );
};

export default About;
