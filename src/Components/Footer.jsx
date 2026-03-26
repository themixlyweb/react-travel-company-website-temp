/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**IMAGES IMPORT */
import HeartImg from '../Images/heart-icon.png';
import ThemixlyLogo from '../Images/logo.png'; 

/**SOCIAL MEDIA ICONS IMPORT */
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  const socialHover = { scale: 1.2, color: "#013565" };

  return (
    <footer className="footer">

      {/* Top Footer */}
      <motion.div
        className="container footer-top"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="footer-logo">Travel Buddy</div>

        <ul className="footer-nav">
          {["Home", "About", "Team", "Packages", "Community", "Testimonials", "Contact us"].map((item, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              <a href={`#${item.toLowerCase().replace(/\s/g, '')}`}>{item}</a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="footer-bottom container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>Copyright © 2026 Travel Buddy. All rights reserved.</p>

        <p className="made-by">
          Made with <img src={HeartImg} alt="heart" className="heart-icon" /> 
          by <img src={ThemixlyLogo} alt="THEMIXLY" className="themixly-logo" />
        </p>

        <div className="socials">
          <motion.a href="/" aria-label="LinkedIn" whileHover={socialHover}>
            <FaLinkedin size={24} /> 
          </motion.a>
          <motion.a href="/" aria-label="Facebook" whileHover={socialHover}>
            <FaFacebook size={24} />
          </motion.a>
          <motion.a href="/" aria-label="Instagram" whileHover={socialHover}>
            <FaInstagram size={24} />
          </motion.a>
          <motion.a href="/" aria-label="X" whileHover={socialHover}>
            <FaTwitter size={24} />
          </motion.a>
        </div>
      </motion.div>

    </footer>
  );
}

export default Footer;