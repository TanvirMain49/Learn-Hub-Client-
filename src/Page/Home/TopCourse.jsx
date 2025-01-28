import React from "react";
import SessionCard from "../../Shared/SessionCard";
import SectionHeading from "../../Shared/sectionHeading";
import useSessionCard from "../../Hooks/useSessionCard";
import { Link } from "react-router-dom";

const TopCourse = () => {
  const {card} = useSessionCard();
  return (
    <div className="my-24">
      <SectionHeading
        heading="Top-Rated Resources and Tutors"
        paragraph="Explore the best-rated study materials and connect with highly recommended tutors, handpicked by our community to ensure quality and success in your learning journey."
      ></SectionHeading>
      <div className="md:w-10/12 md:mx-auto mx-2 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-2">
      {
        card.slice(0, 6).map(item => item.status === 'success' && <SessionCard key={item._id} item={item}></SessionCard> )
      }
      </div>
      <div className="flex justify-center items-center">
        <Link to='allSession'><button className="btn border-2 text-white-500 border-black hover:bg-black hover:text-white font-bold transition-all ease-in-out duration-300 mt-4">Explore More</button></Link>
      </div>
    </div>
  );
};

export default TopCourse;
