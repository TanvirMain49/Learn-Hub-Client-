import React from "react";
import SessionCard from "../../Shared/SessionCard";
import SectionHeading from "../../Shared/sectionHeading";
import SectionButton from "../../Shared/SectionButton";
import useSessionCard from "../../Hooks/useSessionCard";

const TopCourse = () => {
  const {card} = useSessionCard();
  return (
    <div className="my-12">
      <SectionHeading
        heading="Top-Rated Resources and Tutors"
        paragraph="Explore the best-rated study materials and connect with highly recommended tutors, handpicked by our community to ensure quality and success in your learning journey."
      ></SectionHeading>
      <div className="w-10/12 mx-auto grid grid-cols-3">
      {
        card.map(item => <SessionCard key={item._id} item={item}></SessionCard>)
      }
      </div>
      <div className="flex justify-center items-center">
        <SectionButton text={"Explore Session"}></SectionButton>
      </div>
    </div>
  );
};

export default TopCourse;
