import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-white dark:bg-gray-900 text-center shadow-inner mt-10">
      <p className="text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Shivangi Sati. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
