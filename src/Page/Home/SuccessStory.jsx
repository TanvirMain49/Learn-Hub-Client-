import React, { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";

// Animation variants for heading
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation variants for subtitle
const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
};

// Animation variants for testimonial cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
  }),
  hover: { scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", transition: { duration: 0.3 } },
};

// Animation variants for button
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const SuccessStory = () => {
  const successStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Data Scientist",
      testimonial:
        "Learnify helped me transition into a data science career. The personalized learning paths and expert instructors were invaluable!",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 2,
      name: "Michael Lee",
      role: "Software Engineer",
      testimonial:
        "I landed my dream job after completing the full-stack development course. Highly recommend Learnify!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Specialist",
      testimonial:
        "The digital marketing course gave me practical skills that I could apply immediately. Thank you, Learnify!",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
  ];

  // Scroll trigger setup
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Trigger animations when section is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={sectionRef} className="mt-36 w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate={controls}
          className="text-4xl font-extrabold text-center text-gray-800 dark:text-white/80 mb-2"
        >
          Success Stories
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate={controls}
          className="text-lg text-center text-gray-600 dark:text-white/60 max-w-2xl mx-auto mb-10"
        >
          Hear from our students who have transformed their careers through
          Learnify.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-neutral-700 rounded-lg shadow-md"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-2xl text-black dark:text-white/60 mb-4" />

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 dark:text-white/80">{story.testimonial}</p>

              {/* User Info */}
              <div className="flex flex-col items-center">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mb-2 border-4 border-black"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/80">
                  {story.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/80">{story.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
          className="flex justify-center items-center mt-4"
        >
          <Link to="allSuccess">
            <button className="btn border-2 text-white-500 border-black hover:bg-black hover:text-white dark:bg-neutral-700 dark:text-white/80 font-bold transition-all ease-in-out duration-300 mt-4">
              See More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStory;
