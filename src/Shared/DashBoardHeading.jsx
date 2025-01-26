import React from "react";

const DasHeading = ({Heading, subHeading}) => {
  return (
    <div className="text-center w-5/12 mx-auto font-extrabold mb-12 smooch-sans">
      <h3 className="text-black italic text-lg pb-3">----{subHeading}----</h3>
      <div className="border-y border-gray-400">
        <p className="text-5xl uppercase font-bold py-3">{Heading}</p>
      </div>
    </div>
  );
};

export default DasHeading;
