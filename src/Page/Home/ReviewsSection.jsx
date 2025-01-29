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
  console.log(reviews);

  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}> 
            <ViewReview review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSection;
