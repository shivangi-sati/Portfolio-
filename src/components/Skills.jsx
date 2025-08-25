import React from "react";
import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS", "Git"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="px-4 py-2 bg-white dark:bg-gray-700 shadow rounded font-medium hover:bg-purple-100 dark:hover:bg-purple-800 transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
