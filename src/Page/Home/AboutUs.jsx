import React from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaUserFriends } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion

// Animation variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start below with no opacity
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 }, // Staggered delay
  }),
};

// Animation variants for the title and subtitle
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutUsSection = () => {
  return (
    <section className="py-12 w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-800 dark:text-white/80 mb-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          About Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-center text-gray-600 dark:text-white/60 max-w-2xl mx-auto mb-10"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          At Learnify, our mission is to empower learners worldwide by providing personalized learning paths, expert instructors, and cutting-edge educational resources.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Personalized Learning */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white dark:bg-neutral-700 rounded-lg shadow-md"
            variants={cardVariants}
            custom={0} // Stagger index for first card
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }} // Slight scale on hover
          >
            <FaGraduationCap className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/80 mb-2">
              Personalized Learning Paths
            </h3>
            <p className="text-gray-600 dark:text-white/60">
              Tailored courses designed to meet individual learning needs and goals.
            </p>
          </motion.div>

          {/* Feature 2: Expert Instructors */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white dark:bg-neutral-700 dark:text-white/80 rounded-lg shadow-md"
            variants={cardVariants}
            custom={1} // Stagger index for second card
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <FaChalkboardTeacher className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/80 mb-2">
              Expert Instructors
            </h3>
            <p className="text-gray-600 dark:text-white/60">
              Learn from industry leaders and certified professionals who are passionate about teaching.
            </p>
          </motion.div>

          {/* Feature 3: Community Support */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white dark:bg-neutral-700 dark:text-white/80 rounded-lg shadow-md"
            variants={cardVariants}
            custom={2} // Stagger index for third card
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserFriends className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/80 mb-2">
              Vibrant Learning Community
            </h3>
            <p className="text-gray-600 dark:text-white/60">
              Join a supportive community of learners and grow together through collaboration.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;