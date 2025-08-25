import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const navItems = ["about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 flex justify-between items-center px-6 py-4 transition-colors duration-300">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">Shivangi Sati</div>

      <ul className="flex gap-6 relative">
        {navItems.map((item) => (
          <motion.li
            key={item}
            className="relative"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
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
              {/* Active underline indicator */}
              {active === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-purple-600 dark:bg-purple-400 rounded"
                />
              )}
            </Link>
          </motion.li>
        ))}

        {/* Dark Mode Toggle */}
        <motion.li
          whileHover={{ rotate: 20, scale: 1.1 }}
          whileTap={{ rotate: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded text-gray-900 dark:text-white border-gray-900 dark:border-white hover:bg-purple-600 hover:text-white transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
