import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./boxShadow.css";

const SessionCard = ({item}) => {
  return (
    <div className="card w-96 bg-white border hover:border hover:border-gray-950 transition-all duration-300 ease-out hover:-translate-x-2 box mb-8">
      <figure className="rounded-t-xl w-full h-78">
        <img
          src={item.imageUrl}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
        <h2 className="border border-black px-1 rounded font-semibold text-white bg-green-500 smooch-sans">On going</h2>
        {
          item.price==="0"? <h2 className="text-3xl font-bold">Free</h2> : <h2 className="text-4xl font-bold">${item.price}</h2>
        }
        </div>
        <div>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-base mt-2">
                {item.description.substring(0, 80)}...see more
            </p>
        </div>
        <div className="flex justify-between items-center my-4">
        <Link to={`/cardDetails/${item._id}`} 
         className="flex items-center btn font-bold text-base hover:bg-black hover:text-white transition-all ease-in-out duration-300">Read more<FaArrowRight></FaArrowRight>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
