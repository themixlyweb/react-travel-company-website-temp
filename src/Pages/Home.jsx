/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**IMAGES IMPORT */
import img1 from "../Images/hero-1.webp";
import img2 from "../Images/hero-2.webp";
import img3 from "../Images/hero-3.webp";
import img4 from"../Images/hero-4.webp";
import img5 from "../Images/hero-5.webp";
import img6 from "../Images/hero-6.webp";

import vector1 from '../Images/home-vector.png'
import vector2 from '../Images/plane.png'
import vector3 from '../Images/plane.png'


/**COMPONENTS IMPORT */
import About from "../Components/About";
import OurTeam from "../Components/OurTeam";

const Home=()=>{
    return(
        <>
       
        {/**HERO SECTION */}
       <section className="hero" id="home">
  <div className="container hero-wrapper">

    {/* LEFT CONTENT */}
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>
        Visit The Most <br />
        <span>Beautiful Places</span> in <br />
        Across The World
      </h1>

      <p className="section-text">
        Discover the most breathtaking destinations across India,
        where every corner tells a story of beauty and wonder.
        From the beaches of Goa to the Himalayas, the palaces of
        Rajasthan to the backwaters of Kerala – India offers endless
        experiences for every traveler.
      </p>
    </motion.div>

    {/* RIGHT IMAGE GRID */}
    <motion.div
      className="hero-images"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="img-grid">
        {[img1, img2, img3, img4, img5, img6].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </motion.div>

  </div>
   <motion.img src={vector1} alt="vector1" className="hero-vector vector1" initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}/>
  <img src={vector2} alt="vector2" className="hero-vector vector2" />
  <img src={vector3} alt="vector3" className="hero-vector vector3" />
</section>

      {/**EVERY JOURNEY BEOCOMES A STORY SECTION */}
     <About />

     {/**OUR TEAM SECTION */}
     <OurTeam />
        </>
    )
}

export default Home;