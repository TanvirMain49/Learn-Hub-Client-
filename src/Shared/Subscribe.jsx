import React from "react";

const Subscribe = () => {
  return (
    <div className="w-8/12 mx-auto">
      <div className="bg-blue-600 text-white py-16 px-8 boxFixed mt-40 mb-24">
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
              className="p-3 rounded-lg border-none w-64 focus:outline-none"
            />
            <button className="btn ml-6 font-bold border-2 border-black text-base hover:bg-black hover:text-white transition-all ease-in-out duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
