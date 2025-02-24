import React from "react";

const Subscribe = () => {
  return (
    <div className="md:w-8/12 md:mx-auto md:mt-10 mx-2">
      <div className="bg-white/90 dark:bg-neutral-700 text-black border border-black md:boxFixed py-16 px-8 rounded-xl mt-40 mb-24">
        <div className="md:max-w-2xl md:mx-auto text-center">
          <h2 className="md:text-4xl text-2xl font-extrabold mb-4 dark:text-white/80">
            Subscribe Now Forget 20% Discount Every Session
          </h2>
          <p className="mb-6 text-sm max-w-sm mx-auto dark:text-white/60">
          Subscribe now and enjoy a 20% discount on every session. Don't miss out on exclusive savings!
          </p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-white/50 dark:bg-neutral-500 placeholder:dark:text-white/60 rounded-lg w-64 focus:outline-none border border-black"
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
