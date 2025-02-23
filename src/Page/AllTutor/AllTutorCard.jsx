import React from "react";

export default function AllTutorCard({ tutor }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={tutor.photoURL}
        alt={tutor.name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          <span className="text-red-600">Sir</span> {tutor.name}
        </h2>
      </div>
    </div>
  );
}
