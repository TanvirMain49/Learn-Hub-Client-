import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

// Animation variants for text and button
const contentVariants = {
  hidden: { opacity: 0, y: 50 }, // Start below with no opacity
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Slide up and fade in
};

const SwiperDetails = ({ img, heading, subHeading }) => {
  return (
    <div
      className="md:h-screen h-96 relative flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      {/* Text section with animation */}
      <motion.div
        className="relative z-10 flex justify-center items-center flex-col bg-opacity-60 text-white"
        variants={contentVariants}
        initial="hidden"
        animate="visible" // Animate when the component mounts
      >
        <motion.h1
          className="md:text-6xl text-3xl font-extrabold md:mb-4 text-center md:max-w-4xl px-16 md:px-0"
          variants={contentVariants}
        >
          {heading}
        </motion.h1>
        <motion.p
          className="md:text-lg text-sm md:mb-6 mb-4 text-center md:max-w-xl max-w-xs md:pr-0 pr-8"
          variants={contentVariants}
        >
          {subHeading}
        </motion.p>
        <motion.button
          className="md:px-6 px-3 md:py-3 py-2 bg-white text-black md:text-lg font-extrabold rounded-md shadow transition"
          variants={contentVariants}
          whileHover={{ scale: 1.05 }} // Slight scale on hover
          whileTap={{ scale: 0.95 }} // Slight scale down on click
        >
          Explore More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SwiperDetails;