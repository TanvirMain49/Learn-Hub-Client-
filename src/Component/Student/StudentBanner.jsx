import React from "react";
import useAuth from "../../Hooks/useAuth";
import {
  FaGraduationCap,
  FaBook,
  FaBell,
  FaLaptopCode,
  FaUserGraduate,
} from "react-icons/fa";
import student from "../../assets/student.png";

export default function StudentBanner() {
  const { user } = useAuth();
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
      {/* Left Side Content */}
      <div className="text-center md:text-left">
        <p className="text-sm mb-2">{currentDate}</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Welcome back, {user?.displayName || "Student"}!
        </h2>
        <p className="text-xs sm:text-sm">
          Always stay updated in your student portal
        </p>
      </div>

      {/* Right Side: Icons & Image */}
      <div className="relative flex justify-center items-center w-full md:w-auto">
        {/* Floating Icons */}
        <FaGraduationCap className="absolute text-yellow-300 text-xl sm:text-2xl md:text-3xl top-4 left-4 md:top-6 md:left-0 rotate-[-15deg]" />
        <FaBook className="absolute text-blue-400 text-xl sm:text-2xl md:text-3xl top-2 right-4 md:top-2 md:right-6 rotate-[10deg]" />
        <FaBell className="absolute text-red-400 text-lg sm:text-xl md:text-2xl bottom-4 left-4 md:bottom-6 md:left-6 rotate-[-10deg]" />
        <FaLaptopCode className="absolute text-green-400 text-xl sm:text-2xl md:text-3xl bottom-0 right-0 rotate-[20deg]" />
        <FaUserGraduate className="absolute text-purple-400 text-lg sm:text-xl md:text-2xl top-20 -right-4 md:top-28 md:-right-7 rotate-[-5deg]" />

        {/* Student Image */}
        <img
          src={student}
          alt="Student"
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-gray-200 shadow-lg"
        />
      </div>
    </div>
  );
}
