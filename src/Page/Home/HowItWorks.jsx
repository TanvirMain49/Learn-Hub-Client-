import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Step 1: Sign Up",
    description: "Create an account by providing your details or logging in via Google.",
    icon: "🔑",
  },
  {
    id: 2,
    title: "Step 2: Browse Options",
    description: "Explore our wide range of products, services, or resources tailored to your needs.",
    icon: "🔍",
  },
  {
    id: 3,
    title: "Step 3: Choose and Customize",
    description: "Select what you need and personalize it according to your preferences.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Step 4: Enjoy Your Benefits",
    description: "Start using your selected items and enjoy exclusive benefits designed for you.",
    icon: "🎉",
  },
];

// Animation variants for heading
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation variants for step cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
  }),
  hover: { scale: 1.03, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
};

const HowItWorks = () => {
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
    <div ref={sectionRef} className="w-11/12 mx-auto mt-16">
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate={controls}
        className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white/80"
      >
        How It Works
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            className="bg-white dark:bg-neutral-700 shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transform transition-all duration-300 ease-in-out"
          >
            <div className="text-6xl text-blue-500 mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white/80">{step.title}</h3>
            <p className="text-gray-600 dark:text-white/60">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;