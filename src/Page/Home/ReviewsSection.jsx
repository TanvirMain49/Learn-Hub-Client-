import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ViewReview from "./ViewReview";
import { motion } from "framer-motion";

// Animation variants for heading
const headingVariants = {
  initial: { opacity: 0, y: -20, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation variants for subtitle
const subtitleVariants = {
  initial: { opacity: 0, y: 20, x: -10 },
  animate: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
};

// Animation variants for Swiper slides
const slideVariants = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" },
  }),
  hover: { scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", transition: { duration: 0.3 } },
};

const ReviewsSection = () => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  return (
    <div className="md:pt-12 py-5">
      {/* Container */}
      <div className="container md:px-8 px-2">
        {/* Heading */}
        <motion.h2
          initial="initial"
          animate="animate"
          variants={headingVariants}
          className="text-4xl font-extrabold text-center text-gray-800 dark:text-white/80 mb-2"
        >
          What Our Students Say
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial="initial"
          animate="animate"
          variants={subtitleVariants}
          className="text-lg text-center text-gray-600 dark:text-white/60 max-w-2xl mx-auto"
        >
          Hear from our students who have transformed their careers through Learnify.
        </motion.p>

        {/* Swiper Carousel */}
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-8">
          {reviews.map((review, index) => (
            <SwiperSlide key={review._id}>
              <motion.div
                custom={index}
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={slideVariants}
              >
                <ViewReview review={review} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSection;
