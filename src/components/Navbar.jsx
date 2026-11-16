import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "../config";

const navItems = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // start in whatever the OS is set to
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-md z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
        >
          {site.name}
        </Link>

        {/* desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item} className="relative">
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`relative cursor-pointer capitalize px-1 transition-colors ${
                  active === item
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-900 dark:text-white"
                }`}
                onSetActive={() => setActive(item)}
              >
                {item}
                {active === item && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-purple-600 dark:bg-purple-400 rounded"
                  />
                )}
              </Link>
            </li>
          ))}

          <li>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
            >
              Résumé
            </a>
          </li>

          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="px-3 py-1.5 border rounded text-sm text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </li>
        </ul>

        {/* mobile: theme + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="px-2.5 py-1.5 border rounded text-xs text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="px-3 py-1.5 border rounded text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="capitalize text-gray-900 dark:text-white cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 font-medium"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
