import React from "react";
import { FaChalkboardTeacher, FaBookOpen, FaCalendarAlt, FaUserTie } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import tutorImage from "../../assets/student.png";


export default function TutorBanner() {
  const { user } = useAuth();
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center px-8 md:px-20">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <p className="text-sm mb-4">{currentDate}</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Welcome back, {user?.displayName || "Tutor"}!
        </h2>
        <p className="text-sm">Manage your sessions and guide your students effectively.</p>
      </div>
      <div className="relative flex justify-center items-center w-full md:w-auto">
        {/* Floating Icons */}
        <FaChalkboardTeacher className="absolute text-yellow-300 text-3xl md:text-4xl top-6 left-0 rotate-[-15deg]" />
        <FaBookOpen className="absolute text-blue-400 text-3xl md:text-4xl top-2 right-6 rotate-[10deg]" />
        <FaCalendarAlt className="absolute text-red-400 text-2xl md:text-3xl bottom-6 left-6 rotate-[-10deg]" />
        <FaUserTie className="absolute text-green-400 text-3xl md:text-4xl bottom-0 right-0 rotate-[20deg]" />

        {/* Tutor Image */}
        <img
          src={tutorImage}
          alt="Tutor"
          className="w-44 h-44 md:w-72 md:h-72 object-cover rounded-full border-4 border-gray-200 shadow-lg"
        />
      </div>
    </div>
  );
}
