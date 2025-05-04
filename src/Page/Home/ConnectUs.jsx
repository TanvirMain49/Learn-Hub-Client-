import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import connect from '../../assets/Consultation.json';

// Animation variants for text section
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Animation variants for form section
const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } },
};

// Animation variants for Lottie
const lottieVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
};

// Input field animation variants
const inputVariants = {
  initial: { scale: 1, boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
  focus: {
    scale: 1.02,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 },
  },
};

// Button animation variants
const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const ConnectUs = () => {
  // State for form data and submission status
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [lottieError, setLottieError] = useState(null);

  // Ref for scroll-triggered animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    console.log('Form submitted:', formData); // Replace with API call in production
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3s
  };

  // Trigger animations when section is in view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white md:pt-16 mt-12 flex justify-center items-center md:min-h-[580px] relative"
    >
      {/* Lottie Animation (visible on desktop) */}
      <motion.div
        className="hidden md:block absolute top-0 left-[38%]"
        variants={lottieVariants}
        initial="hidden"
        animate={controls}
      >
        {lottieError ? (
          <p className="text-red-500">Error loading animation</p>
        ) : (
          <Lottie
            animationData={connect}
            loop={true}
            className="max-w-52"
            onError={() => setLottieError('Failed to load Lottie animation')}
          />
        )}
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-6xl py-16 flex flex-col justify-between md:flex-row items-center gap-8">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="md:text-5xl text-2xl font-bold mb-6 px-7 md:px-0">
            To Help You Choose the Right Course, You Need to Book a Consultation
          </h2>
          <p className="md:text-lg text-base md:px-0 px-3">
            Get expert guidance to choose the right course for your goals. Book a consultation and start your learning journey with confidence!
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="md:w-[530px] md:boxFixed h-auto border border-black bg-white dark:bg-neutral-800 text-black p-6 rounded-lg md:absolute md:left-[55%] md:top-[10%]"
          variants={formVariants}
          initial="hidden"
          animate={controls}
        >
          <h3 className="text-3xl font-bold mt-4 ml-3 dark:text-white/60">Get a Consultation</h3>
          <form className="md:space-y-5 space-y-3 md:p-4 border-black" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block font-medium dark:text-white/80"
              >
                Name
              </label>
              <motion.input
                id="name"
                name="name"
                type="text"
                placeholder="Input Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-black px-2 md:py-4 py-2 rounded-lg dark:bg-neutral-600 placeholder:dark:text-white/80"
                variants={inputVariants}
                initial="initial"
                whileFocus="focus"
                aria-required="true"
              />
            </div>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block font-medium dark:text-white/80"
              >
                Email
              </label>
              <motion.input
                id="email"
                name="email"
                type="email"
                placeholder="Input Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-black px-2 md:py-4 py-2 rounded-lg dark:bg-neutral-600 placeholder:dark:text-white/80"
                variants={inputVariants}
                initial="initial"
                whileFocus="focus"
                aria-required="true"
              />
            </div>
            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block font-medium dark:text-white/80"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Input Your Question"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full border-black px-2 md:py-4 py-2 border rounded-lg dark:bg-neutral-600 placeholder:dark:text-white/80"
                variants={inputVariants}
                initial="initial"
                whileFocus="focus"
                aria-required="true"
              />
            </div>
            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-black text-white border border-black py-3 hover:bg-black dark:bg-neutral-700 hover:text-white transition-all ease-in-out duration-300 rounded-lg font-semibold"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              animate={submitted ? { scale: 1.1, transition: { duration: 0.2 } } : {}}
            >
              {submitted ? 'Submitted!' : 'Get a Consultation'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectUs;