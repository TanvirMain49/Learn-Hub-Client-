import React from "react";

const SwiperDetails = ({ img, heading, subHeading }) => {
  return (
    <div
      className="h-screen relative flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* black layout */}
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      {/* text section */}
      <div className="relative z-10 flex justify-center items-center flex-col bg-opacity-60 text-white">
        <h1 className="text-6xl font-extrabold mb-4 text-center max-w-4xl ">{heading}</h1>
        <p className="text-lg mb-6 text-center max-w-xl">{subHeading}</p>
        <button className="px-6 py-3 bg-white text-black text-lg font-extrabold rounded-md shadow transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default SwiperDetails;
