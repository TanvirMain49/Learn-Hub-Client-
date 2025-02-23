import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const SuccessStory = () => {
  const successStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Data Scientist",
      testimonial:
        "Learnify helped me transition into a data science career. The personalized learning paths and expert instructors were invaluable!",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 2,
      name: "Michael Lee",
      role: "Software Engineer",
      testimonial:
        "I landed my dream job after completing the full-stack development course. Highly recommend Learnify!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Specialist",
      testimonial:
        "The digital marketing course gave me practical skills that I could apply immediately. Thank you, Learnify!",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
  ];

  return (
    <section className="mt-32 w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          Success Stories
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Hear from our students who have transformed their careers through Learnify.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-2xl text-black mb-4" />

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4">{story.testimonial}</p>

              {/* User Info */}
              <div className="flex flex-col items-center">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mb-2 border-4 border-black"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {story.name}
                </h3>
                <p className="text-sm text-gray-600">{story.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;