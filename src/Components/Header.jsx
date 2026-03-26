/**CORE LIBRARIES IMPORT */
import React, { useState } from "react";
import { motion } from "framer-motion";

/**ICONS IMPORT */
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = ["Home", "About", "Team", "Packages", "Community", "Testimonials"];

  const navLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <header className="header">
      <div className="container nav-wrapper">
        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Travel Buddy
        </motion.div>

        {/* Nav Links (Desktop) */}
        <nav className="nav-links">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
              whileHover={{ scale: 1.1, color: "#013565" }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Contact Button */}
        <motion.button
          className="contact-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="#contact">Contact us</a>
        </motion.button>

        {/* Hamburger Toggle (Mobile) */}
        <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

        {/* Sidebar Menu */}
  <motion.div
  className={`sidebar ${sidebarOpen ? "open" : ""}`}
  initial={{ x: "-100%" }}
  animate={{ x: sidebarOpen ? 0 : "-100%" }}
  transition={{ duration: 0.3 }}
>

  {/* Sidebar Logo */}
  <div className="sidebar-logo">
    Travel Buddy
  </div>

  <nav className="sidebar-links">
    {navLinks.map((link) => (
      <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setSidebarOpen(false)}>
        {link}
      </a>
    ))}

    <a href="#contact" className="sidebar-contact" onClick={() => setSidebarOpen(false)}>
      Contact us
    </a>
  </nav>

</motion.div>
      </div>
    </header>
  );
};

export default Header;