import React from "react";

const SwiperDetails = ({ img, heading, subHeading }) => {
  return (
    <div
      className="md:h-screen h-96 relative flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* black layout */}
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      {/* text section */}
      <div className="relative z-10 flex justify-center items-center flex-col bg-opacity-60 text-white">
        <h1 className="md:text-6xl text-3xl font-extrabold md:mb-4 text-center md:max-w-4xl px-16 md:px-0">{heading}</h1>
        <p className="md:text-lg text-sm md:mb-6 mb-4 text-center md:max-w-xl max-w-xs md:pr-0 pr-8">{subHeading}</p>
        <button className="md:px-6 px-3 md:py-3 py-2 bg-white text-black md:text-lg font-extrabold rounded-md shadow transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default SwiperDetails;
