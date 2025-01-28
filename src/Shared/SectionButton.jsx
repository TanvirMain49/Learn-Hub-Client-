import React from "react";

const SectionButton = ({text}) => {
  return (
    <div>
      <button className="btn border-2 text-white-500 border-black hover:bg-black hover:text-white font-bold transition-all ease-in-out duration-300 mt-4">{text}</button>
    </div>
  );
};

export default SectionButton;
