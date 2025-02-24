import React from "react";
import { FaBookmark, FaClock, FaList, FaStar } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import SecondaryNav from "../../Shared/SecondaryNav";
import { FaCircleDot, FaComputer } from "react-icons/fa6";
import StudentReview from "./StudentReview";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useCardDetails from "../../Hooks/useCardDetails";
import useRole from "../../Hooks/useRole";

const CardDetails = () => {
  const { id } = useParams();
  const { isRole } = useRole();
  const { items: card } = useCardDetails(id);

  return (
    <div className="mb-20 pt-32 w-11/12 mx-auto">
      {/* Banner section */}
      <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-0">
        {/* Image */}
        <img
          src={card.imageUrl}
          className="w-full lg:w-1/2 h-[460px] object-cover rounded-lg shadow-2xl boxSecondary border-2 border-gray-300"
          alt={card.title}
        />

        {/* Content */}
        <div className="w-full lg:w-1/2 lg:pr-8 md:block hidden">
          <SecondaryNav
            link1="All Session"
            link2="Course Details"
            route1="/allSession"
          />
          <h1 className="text-4xl lg:text-7xl font-extrabold mt-8">
            {card.title}
          </h1>

          {/* Session little information */}
          <div className="flex flex-wrap gap-4 my-8 font-semibold">
            <h1 className="flex items-center gap-1 whitespace-nowrap">
              <FaBookmark /> {card.registerStart} - {card.registerEnd}
            </h1>
            <h1 className="flex items-center gap-1 whitespace-nowrap">
              <FaClock /> {card.classStart} - {card.classEnd}
            </h1>
            <h1 className="flex items-center gap-1 whitespace-nowrap">
              <FaStar /> 3.5(3k review)
            </h1>
          </div>

          {/* Purchase section */}
          <div className="flex items-center gap-4">
            {card.price === "0" ? (
              <h2 className="text-3xl font-bold">$Free</h2>
            ) : (
              <h2 className="text-4xl font-bold">${card.price}</h2>
            )}
            {new Date(card.registerStart) <= new Date() &&
            new Date(card.registerEnd) >= new Date() ? (
              <Link to={`/book/${card._id}`}>
                <button
                disabled={isRole !== "Student"}
                  className="btn font-bold border-2 border-black text-base hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                >
                  Book Now
                </button>
              </Link>
            ) : (
              <button className="btn font-bold border-2 border-red-500 text-base bg-red-500 hover:text-white text-white transition-all ease-in-out duration-300">
                Not Available Now
              </button>
            )}
          </div>
        </div>
      </div>

      {/* What you learn from this course section */}
      <div className="mb-36 mt-28 flex flex-col lg:flex-row justify-center gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            What You Will Learn
          </h2>
          <p className="text-lg">{card.description}</p>
        </div>

        {/* Session format */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
          <div className="border border-black p-6 hover:bg-black hover:text-white rounded-xl transition-all ease-in-out duration-300 flex flex-col items-center justify-center hover:-translate-y-3">
            <FaComputer className="text-6xl mb-3" />
            <h2 className="text-3xl font-semibold mb-3">Course Format</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaCircleDot /> Video Tutorials
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot /> Skill Test
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot /> Pulvinar sapien
              </li>
            </ul>
          </div>

          <div className="border border-black p-6 hover:bg-black hover:text-white rounded-xl transition-all ease-in-out duration-300 flex flex-col items-center justify-center hover:-translate-y-3">
            <FaClock className="text-6xl mb-3" />
            <h2 className="text-3xl font-semibold mb-3">Duration Course</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaCircleDot /> 3 Weeks
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot /> 3 Tutorials Video
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot /> {card.classStart} to {card.classEnd}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Session Instructors */}
      <div className="mb-28 flex flex-col lg:flex-row justify-center gap-6">
        <img
          src={card.tutorImageUrl}
          alt={card.tutorName}
          className="w-full lg:w-1/3 h-[540px] boxFixed border-2 border-gray-300 object-cover"
        />

        <div className="w-full lg:w-2/3 lg:ml-[7%] mt-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
            Session Instructors
          </h1>
          <p className="text-3xl lg:text-4xl font-bold mb-2">
            {card.tutorName}.
          </p>
          <p className="text-xl mb-2">{card.tutorPro}</p>
          <div className="flex flex-wrap gap-6 mb-4">
            <p className="text-lg flex items-center gap-1">
              <FaClock /> 120 Hours
            </p>
            <p className="text-lg flex items-center gap-1">
              <FaStar /> 4.2(22 review)
            </p>
          </div>
          <p className="text-lg max-w-4xl">{card.tutorDescription}</p>
        </div>
      </div>

      {/* Student Review */}
      <StudentReview />
    </div>
  );
};

export default CardDetails;
