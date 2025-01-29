import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import SwiperDetails from "../../Shared/SwiperDetails";

const Banner = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <SwiperDetails
            img={img1}
            heading="Collaborate. Learn. Succeed."
            subHeading="Empower your academic journey with seamless connections to tutors, students, and resources—all in one place."
          ></SwiperDetails>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <SwiperDetails
            img={img2}
            heading="Redefine Learning Together"
            subHeading="Join a platform that connects students, tutors, and resources for smarter collaboration."
          ></SwiperDetails>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <SwiperDetails
            img={img3}
            heading="Study Smarter, Together"
            subHeading="Streamline study sessions, connect with peers and tutors, and access resources—all in one platform."
          ></SwiperDetails>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
