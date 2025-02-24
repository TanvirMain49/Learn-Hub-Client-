import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./boxShadow.css";

const SessionCard = ({ item }) => {

  return (
    <div className="card bg-white dark:bg-neutral-700 border hover:border hover:border-gray-950 dark:border-none transition-all duration-300 ease-out hover:-translate-x-2 box mb-8 ">
      <figure className="rounded-t-xl w-full h-[280px]">
        <img
          src={item.imageUrl}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          {
            new Date() <= new Date(item.registerEnd) ? <h2 className="border border-black px-1 rounded font-semibold text-white dark:text-white/80 bg-green-500 smooch-sans">
            On going
          </h2> : <h2 className="border border-black px-1 rounded font-semibold text-white dark:text-white/80 bg-red-500 smooch-sans">
            Registration End
          </h2> 
          }
          {item.price === "0" ? (
            <h2 className="text-3xl font-bold dark:text-white/80">Free</h2>
          ) : (
            <h2 className="text-4xl font-bold dark:text-white/80">${item.price}</h2>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-white/80">{item.title}</h1>
        </div>
        <div className="flex justify-between items-center my-4 flex-grow">
          <Link
            to={`/cardDetails/${item._id}`}
            className="flex items-center bg-white dark:bg-neutral-700 dark:text-white/80 border border-black btn font-bold text-base hover:bg-black hover:text-white transition-all ease-in-out duration-300"
          >
            Read more
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
