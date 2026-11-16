import React from "react";
import { motion } from "framer-motion";

const groups = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    items: ["React.js", "React Router", "Tailwind CSS", "Responsive Design", "Vite"],
  },
  {
    label: "State & Data",
    items: ["Context API", "React Hooks", "REST APIs", "Async Handling", "Error & Loading States"],
  },
  {
    label: "Debugging",
    items: ["Chrome DevTools", "Network Inspection", "Cross-browser Debugging", "Incident Triage"],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub", "npm", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Skills
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08, duration: 0.5 }}
            className={gi === groups.length - 1 ? "sm:col-span-2" : ""}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300 mb-3">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 shadow-sm rounded text-sm font-medium text-gray-800 dark:text-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
