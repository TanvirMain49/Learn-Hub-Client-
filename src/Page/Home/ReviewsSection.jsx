import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ViewReview from "./ViewReview";
import { motion } from "framer-motion"; // ✅ Import motion

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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-800 dark:text-white/80 mb-2"
        >
          What Our Students Say
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-center text-gray-600 dark:text-white/60 max-w-2xl mx-auto"
        >
          Hear from our students who have transformed their careers through Learnify.
        </motion.p>

        {/* Swiper Carousel */}
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-8">
          {reviews.map((review, index) => (
            <SwiperSlide key={review._id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
