import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function AllTutorCard({ tutor }) {
  return (
    <div className="flex items-center bg-white dark:bg-neutral-800 shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
      <img
        src={tutor.photoURL}
        alt={tutor.name}
        className="w-24 h-24 rounded-full object-cover mr-4"
      />
      <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white/80 flex items-center">
          <FaUserCircle className="text-black mr-2" /> 
          {tutor.name}
        </h2>
      </div>
    </div>
  );
}
