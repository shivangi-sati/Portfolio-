import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Aloura", description: "Lifestyle and productivity app for women to track tasks, wellness, moods, and personal growth.", link: "https://aloura-two.vercel.app/" },
  { title: "Forever", description: "Created a minimal e-commerce platform with product listings, cart functionality, and payment simulation. Utilized Context API to manage the shopping cart state. Implemented responsive design using Tailwind CSS.", link: "https://forever-alpha-seven.vercel.app/" },
  { title: "Recipie-Book", description: "Built an application that fetches recipe data from an API and displays it in a user-friendly format. Integrated React Router for navigation between different sections. Added search functionality using state management.", link: "https://recipe-book-three-green.vercel.app/" },
  { title: "Portfolio", description: "A personal portfolio built with React and Tailwind CSS.", link:"#"}
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-700 shadow rounded cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
            <a href={project.link} className="text-purple-600 dark:text-purple-400 hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
