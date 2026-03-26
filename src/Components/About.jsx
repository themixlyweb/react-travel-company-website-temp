/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**IMAGES IMPORT */
import img1 from '../Images/about-1.webp';
import img2 from '../Images/about-2.webp';
import img3 from '../Images/about-3.webp';

/**ICONS IMPORT */
import icon1 from '../Images/about-icon-1.png';
import icon2 from '../Images/about-icon-2.png';
import icon3 from '../Images/about-icon-3.png';

const About = () => {

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  return (
    <section className="about-section container" id="about">
      
      {/* IMAGE GRID */}
      <motion.div
        className="about-img-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img src={img1} alt="" variants={imgVariants} />
        <motion.div className="about-img-col">
          <motion.img src={img2} alt="" variants={imgVariants} />
          <motion.img src={img3} alt="" variants={imgVariants} />
        </motion.div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">
          Where Every Journey <br /><span>Becomes a Story</span>
        </h2>
        <p className="section-text">
          We curate travel experiences that go far beyond simply visiting destinations. From world-famous landmarks to hidden treasures off the beaten path, our journeys are thoughtfully designed to inspire discovery, spark curiosity, and foster meaningful connections with people, cultures, and places. Every experience is carefully crafted to turn moments into lasting memories that stay with you long after the journey ends.
        </p>
        <p className="section-text">
          With a strong focus on comfort, culture, authenticity, and seamless planning, we personalize each itinerary to reflect your interests, pace, and travel goals. Our experienced team manages every detail with precision, allowing you to travel with confidence and ease. The result is an enriching, immersive, and truly unforgettable journey as you explore the most beautiful places around the globe.
        </p>

        {/* ICONS ROW */}
        <div className="icons-row">
          {[{icon: icon1, text: "12k", desc: "Happy and Satisfied Travelers"},
            {icon: icon2, text: "10 Years", desc: "Proven Travel Industry Experience"},
            {icon: icon3, text: "50 +", desc: "Destinations Covered Worldwide"}].map((item, index) => (
            <motion.div
              key={index}
              className="icon-wrapper"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={iconVariants}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={item.icon} alt="" />
              <p>
                <span>{item.text}</span> <br /> {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>

    </section>
  )
}

export default About;