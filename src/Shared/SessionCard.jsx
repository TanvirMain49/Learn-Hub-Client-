import React from "react";
import "./boxShadow.css"
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";

const SessionCard = () => {
  return (
    <div className="card w-96 bg-white border hover:border hover:border-gray-950 transition-all duration-300 ease-out hover:-translate-x-2 box mb-8">
      <figure className="rounded-t-xl w-full h-78">
        <img
          src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1737300328~exp=1737303928~hmac=3379a6153fd8537d7d08ff41af5a9556ee69eecdce1d6e96d562f51d6a948805&w=826"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
        <h2 className="border border-black px-1 rounded font-semibold text-white bg-green-500 smooch-sans">On going</h2>
        <h2 className="text-4xl font-bold">$80</h2>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Introduction to User Experience Design</h1>
            <p className="text-base mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. iure.....see more
            </p>
        </div>
        <div className="flex justify-between items-center my-4">
        <button className="flex items-center btn font-bold text-base hover:bg-black hover:text-white transition-all ease-in-out duration-300">Read more<FaArrowRight></FaArrowRight>
        </button>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
