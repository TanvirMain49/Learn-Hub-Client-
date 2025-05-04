import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Animation variants for heading
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation variants for paragraph
const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
};

// Animation variants for input/button group
const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3, ease: "easeOut" } },
};

// Animation variants for input
const inputVariants = {
  initial: { scale: 1 },
  focus: { scale: 1.02, transition: { duration: 0.3 } },
};

// Animation variants for button
const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Subscribe = () => {
  // Form state
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  // Handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    console.log("Subscribed:", email); // Replace with API call in production
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3s
  };

  return (
    <div ref={sectionRef} className="md:w-8/12 md:mx-auto md:mt-10 mx-2">
      <div className="bg-white/90 dark:bg-neutral-700 text-black border border-black md:boxFixed py-16 px-8 rounded-xl mt-40 mb-24">
        <div className="md:max-w-2xl md:mx-auto text-center">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={controls}
            className="md:text-4xl text-2xl font-extrabold mb-4 dark:text-white/80"
          >
            Subscribe Now Forget 20% Discount Every Session
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate={controls}
            className="mb-6 text-sm max-w-sm mx-auto dark:text-white/60"
          >
            Subscribe now and enjoy a 20% discount on every session. Don't miss out on exclusive savings!
          </motion.p>
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={controls}
            className="flex justify-center items-center"
          >
            <motion.input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleInputChange}
              className="p-3 bg-white/50 dark:bg-neutral-500 placeholder:dark:text-white/60 rounded-lg w-64 focus:outline-none border border-black"
              variants={inputVariants}
              initial="initial"
              whileFocus="focus"
              aria-required="true"
            />
            <motion.button
              onClick={handleSubmit}
              className="btn ml-2 font-bold border-2 border-black text-base hover:bg-red-500 hover:text-white bg-white transition-all ease-in-out duration-300"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              animate={submitted ? { scale: 1.1, transition: { duration: 0.2 } } : {}}
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
