import React from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaUserFriends } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="py-12 w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          About Us
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10">
          At Learnify, our mission is to empower learners worldwide by providing personalized learning paths, expert instructors, and cutting-edge educational resources.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Personalized Learning */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <FaGraduationCap className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Personalized Learning Paths
            </h3>
            <p className="text-gray-600">
              Tailored courses designed to meet individual learning needs and goals.
            </p>
          </div>

          {/* Feature 2: Expert Instructors */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <FaChalkboardTeacher className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Expert Instructors
            </h3>
            <p className="text-gray-600">
              Learn from industry leaders and certified professionals who are passionate about teaching.
            </p>
          </div>

          {/* Feature 3: Community Support */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <FaUserFriends className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Vibrant Learning Community
            </h3>
            <p className="text-gray-600">
              Join a supportive community of learners and grow together through collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;