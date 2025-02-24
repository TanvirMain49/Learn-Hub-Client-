import React from "react";

const DasHeading = ({ Heading, subHeading, user }) => {
  return (
    <div className="text-center md:w-5/12 md:mx-auto font-extrabold mb-12 smooch-sans">
      <h3 className="text-black dark:text-white/80 italic md:text-xl text-lg pb-3">----{subHeading}----</h3>
      <div className="border-y border-gray-400">
        {user ? (
          <p className="md:text-5xl text-xl dark:text-white/80 uppercase font-bold py-3">
            {Heading}({user}){" "}
          </p>
        ) : (
          <p className="md:text-5xl text-xl uppercase font-bold py-3 dark:text-white/80">{Heading}</p>
        )}
      </div>
    </div>
  );
};

export default DasHeading;
