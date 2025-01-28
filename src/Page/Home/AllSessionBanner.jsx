import React from "react";
import bannerImg from "../../assets/allSessionBanner.jpg";
import SecondaryNav from '../../Shared/SecondaryNav'

const AllSessionBanner = () => {
  return (
    <div className="flex justify-center flex-col py-20 lg:flex-row-reverse gap-0 mb-24 bg-white">
      <img
        src={bannerImg}
        class="h-420px] max-w-[572px] object-cover rounded-lg shadow-2xl boxFixed border-2 border-gray-300"
      />
      <div className="max-w-3xl">
        <SecondaryNav
              link1="All Session"
              route1="allSession"
            ></SecondaryNav>
        <h1 className="text-7xl font-extrabold mt-8">
          Explore All Available Sessions
        </h1>
        <p className="max-w-lg text-lg mt-5">
          Find the perfect session that matches your learning needs. Browse,
          book, and start your journey today!
        </p>
          <input
            type="text"
            name="search"
            placeholder="Search here here"
            className="input border border-black w-full max-w-xs rounded-r-none mt-4"
          />
          <button className="btn bg-black text-white rounded-l-none border border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300">
            Search
          </button>
      </div>
    </div>
  );
};

export default AllSessionBanner;
