import React from "react";
import { FaBookmark, FaClock, FaList, FaStar } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import SecondaryNav from "../../Shared/SecondaryNav";
import { FaCircleDot, FaComputer } from "react-icons/fa6";
import StudentReview from "./StudentReview";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const card = useLoaderData();
  console.log(card);
  return (
    <div className="my-20 w-10/12 mx-auto ">
      {/* Banner section */}
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-32">
          <img
            src={card.imageUrl}
            class="h-[460px] max-w-[572px] object-cover rounded-lg shadow-2xl boxSecondary border-2 border-gray-300"
          />
          <div className="max-w-3xl">
            <SecondaryNav
              link1="Course"
              link2="Course Details"
              route1="allSession"
            ></SecondaryNav>
            <h1 className="text-7xl font-extrabold mt-8">{card.title}</h1>
            {/* Session little information */}
            <div className="flex items-center gap-4 my-8 font-semibold">
              <h1 className="flex items-center gap-1 whitespace-nowrap">
                <FaBookmark></FaBookmark>
                {card.registerStart} - {card.registerEnd}
              </h1>
              <h1 className="flex items-center gap-1 whitespace-nowrap">
                <FaClock></FaClock>
                {card.classStart} - {card.classEnd}
              </h1>
              <h1 className="flex items-center gap-1 whitespace-nowrap">
                <FaStar></FaStar>
                3.5(3k review)
              </h1>
            </div>
            {/* purchase section */}
            <div className="flex items-center gap-4">
              {card.price === "0" ? (
                <h2 className="text-3xl font-bold">$Free</h2>
              ) : (
                <h2 className="text-4xl font-bold">${card.price}</h2>
              )}
              {new Date(card.registerStart) <= new Date() && new Date(card.registerEnd) >= new Date() ? (
                <button className="btn font-bold border-2 border-black text-base hover:bg-black hover:text-white transition-all ease-in-out duration-300">
                  Book Now
                </button>
              ) : (
                <button className="btn font-bold border-2 border-red-500 text-base bg-red-500 hover:text-white text-white transition-all ease-in-out duration-300 ">
                  Not Available Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* what you learn form this course section */}
      <div className="my-24 flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-extrabold mb-4">What You will Learn</h2>
          <p className="max-w-2xl text-lg">
           {card.description}
          </p>
        </div>

        {/* session formate */}
        <div className="flex items-center gap-4">
          <div className="border border-black p-6 hover:bg-black hover:text-white rounded-xl transition-all ease-in-out duration-300 flex items-center justify-center flex-col hover:scale-110">
            <FaComputer className="text-6xl mb-3"></FaComputer>

            <h2 className="text-3xl font-semibold mb-3">Course Format</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> Video Tutorials
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> Skill Test
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> Pulvinar sapien
              </li>
            </ul>
          </div>
          {/* second card 2*/}
          <div className="border border-black p-6 hover:bg-black hover:text-white rounded-xl transition-all ease-in-out duration-300 flex items-center justify-center flex-col hover:scale-110">
            <FaClock className="text-6xl mb-3"></FaClock>

            <h2 className="text-3xl font-semibold mb-3">Duration Course</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> 3 Weeks
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> 3 Tutorials Video
              </li>
              <li className="flex items-center gap-2">
                <FaCircleDot></FaCircleDot> {card.classStart} to {card.classEnd}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Session Instructors */}
      <div className="my-24 flex justify-center gap-10">
        <img
          src={card.tutorImageUrl}
          alt=""
          className="h-[440px] boxSecondary border-2 border-gray-300 object-cover"
        />

        <div className="ml-[7%]">
          <h1 className="text-6xl font-extrabold mb-4">Session Instructors</h1>
          {/* name */}
          <p className="text-4xl font-bold mb-2">{card.tutorName}.</p>
          {/* type */}
          <p className="text-xl mb-2">{card.tutorPro}</p>
          {/* duration */}
          <div className="flex items-center gap-6 mb-4">
            <p className="text-lg flex items-center gap-1">
              <FaClock></FaClock> 120 Hours
            </p>
            <p className="text-lg flex items-center gap-1">
              <FaStar></FaStar> 4.2(22 review)
            </p>
          </div>
          {/* description */}
          <p className="text-lg max-w-xl">
           {card.tutorDescription}
          </p>
        </div>
      </div>

      {/* student Review */}
      <StudentReview></StudentReview>
    </div>
  );
};

export default CardDetails;
