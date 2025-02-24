import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react"; // ✅ Correct Import
import { Pagination } from "swiper/modules";
import ViewReview from "./ViewReview";

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
        <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white/80 mb-2">
          What Our Students Say
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-center text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
          Hear from our students who have transformed their careers through Learnify.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <ViewReview review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSection;