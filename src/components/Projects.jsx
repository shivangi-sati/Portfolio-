import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SupportGraph",
    subtitle: "Support investigation platform",
    description:
      "Models tickets, users and issues as a graph, so a support engineer can trace how one defect propagates across accounts instead of reading tickets one at a time. Built the React frontend and the API contract against a FastAPI backend and a graph database.",
    stack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "CognoDB"],
    live: "https://support-graph.vercel.app",
    code: "https://github.com/shivangi-sati/SupportGraph",
    gradient: "from-purple-500 to-fuchsia-500",
    featured: true,
  },
  {
    title: "Cartly",
    subtitle: "React storefront",
    description:
      "Product catalog with debounced search, URL-synced filters and sorting, explicit loading/error/empty states and AbortController-based fetches. Cart, wishlist, SAVE10 coupon, a validated 3-step demo checkout and order history, with 16 Vitest tests on the pure catalog logic.",
    stack: ["React", "JavaScript", "Tailwind CSS", "React Router", "Vitest"],
    live: "https://cartly-six-eosin.vercel.app/",
    code: "https://github.com/shivangi-sati/cartly",
    gradient: "from-blue-500 to-cyan-400",
    featured: true,
  },
  {
    title: "Aloura",
    subtitle: "Connected wellbeing app · my own idea",
    description:
      "Turns separate trackers into one daily rhythm: tasks, mood, self-care, cycle phase and learning feed a Daily Balance score with a suggested next step. One Context store drives editable tasks, notes, attachments, Pomodoro sessions, a heatmap and a live mood chart.",
    stack: ["React", "JavaScript", "Context API", "Tailwind CSS", "Vitest"],
    live: "https://aloura-two.vercel.app/",
    code: "https://github.com/shivangi-sati/Aloura",
    gradient: "from-rose-500 to-orange-400",
  },
  {
    title: "Bounty Creator Wizard",
    subtitle: "Multi-step form flow",
    description:
      "A 3-step wizard with step-level validation and guarded navigation, so a user can't reach step 3 with invalid data from step 1. In-progress state persists across navigation, with a live JSON payload preview before submit.",
    stack: ["React", "Context API", "Tailwind CSS"],
    live: "https://bounty-creator-wizard.vercel.app/rewards",
    code: "https://github.com/shivangi-sati/bounty-creator-wizard",
    gradient: "from-indigo-500 to-sky-400",
  },
  {
    title: "Snipe Dashboard",
    subtitle: "Shipment tracking dashboard",
    description:
      "Dashboard for tracking shipments against a mock JSON API — table state, filtering, and status rendering, built on Vite and Tailwind.",
    stack: ["React", "Vite", "Tailwind CSS"],
    live: "https://snipe-dashboard.vercel.app",
    code: "https://github.com/shivangi-sati/Snipe-dashboard",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "PopX Account UI",
    subtitle: "Pixel-accurate screen flow",
    description:
      "Implemented a multi-screen account signup and login flow from a design specification, matching layout, spacing and states across screens.",
    stack: ["React", "CSS", "Responsive"],
    live: "https://pop-x-account-ui.vercel.app",
    code: "https://github.com/shivangi-sati/PopX_Account_UI",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    title: "Weather Dashboard",
    subtitle: "API-driven data view",
    description:
      "Real-time and historical weather with air quality metrics and interactive charts, built on the Open-Meteo API with loading, empty and error states handled explicitly.",
    stack: ["React", "Open-Meteo API", "Charts"],
    live: "https://weather-dashboard-mu-five.vercel.app/",
    code: "https://github.com/shivangi-sati/weather-dashboard",
    gradient: "from-sky-500 to-cyan-400",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-3 text-center">Projects</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Every one is deployed. Every one has source you can read.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 2) * 0.1, duration: 0.5 }}
            className={`flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.featured && (
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded">
                    Flagship
                  </span>
                )}
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                {project.subtitle}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4 text-sm font-medium">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 dark:text-purple-300 hover:underline"
                >
                  Live demo →
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
