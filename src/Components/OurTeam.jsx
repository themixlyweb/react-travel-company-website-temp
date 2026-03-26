/**CORE LIBRARIES IMPORT */
import React, { useState } from "react";
import { motion } from "framer-motion";

/**IMAGES IMPORT */
import TeamImg1 from '../Images/team-1.webp';
import TeamImg2 from '../Images/team-2.webp';
import TeamImg3 from '../Images/team-3.webp';
import TeamImg4 from '../Images/team-4.webp';
import TeamImg5 from '../Images/team-5.webp';
import TeamImg6 from '../Images/team-6.webp';

const team = [
  { id: 1, name: "Ananya", role: "Travel Consultant", image: TeamImg1, bg: "#fcbbc1" },
  { id: 2, name: "Priya", role: "Customer Experience Executive", image: TeamImg2, bg: "#fad9a3" },
  { id: 3, name: "Kavya", role: "Destination Specialist", image: TeamImg3, bg: "#feeccf" },
  { id: 4, name: "Riya", role: "Operations Manager", image: TeamImg4, bg: "#c0e9ff" },
  { id: 5, name: "Sneha", role: "Marketing & Partnerships Lead", image: TeamImg5, bg: "#bad8d9" },
  { id: 6, name: "Pooja", role: "Tour Planning Coordinator", image: TeamImg6, bg: "#8ed1d4" },
];

const OurTeam = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="team-section container" id="team">
      {/* Heading Animation */}
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Team
      </motion.h2>

      {/* Description Animation */}
      <motion.p
        className="section-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Travel with ease and confidence with one of the best travel companies in India, dedicated to creating unforgettable experiences for every traveler. Whether you dream of exploring vibrant cities, serene beaches, majestic mountains, or cultural heritage sites, we make your journey seamless from start to finish.
      </motion.p>

      {/* Team Cards */}
      <div
        className={`team-wrapper ${open ? "open" : ""}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}

      >
        {team.map((member, index) => (
          <div
            className="team-card"
            key={member.id}
            style={{ backgroundColor: member.bg, "--i": index }}
          >
            <div className="card-content">
              <h3>{member.name}</h3>
              <p className="section-text">{member.role}</p>
            </div>

            <div className="image-wrapper">
              <motion.img
                src={member.image}
                alt={member.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;