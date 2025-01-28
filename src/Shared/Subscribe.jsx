import React from "react";

const Subscribe = () => {
  return (
    <div className="w-8/12 mx-auto mt-52">
      <div className="bg-white/90 text-black border border-black boxFixed py-16 px-8 rounded-xl mt-40 mb-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Subscribe Now Forget 20% Discount Every Session
          </h2>
          <p className="mb-6 text-sm max-w-sm mx-auto">
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
            Sed magna purus, fermentum eu.
          </p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-white/50 rounded-lg w-64 focus:outline-none border border-black"
            />
            <button className="btn ml-2 font-bold border-2 border-black text-base hover:bg-red-500 hover:text-white bg-white transition-all ease-in-out duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
