import React, { useEffect, useState } from "react";
import useSessionCard from "../../Hooks/useSessionCard";
import SessionCard from "../../Shared/SessionCard";
import AllSessionBanner from "./AllSessionBanner";
import Loader from "../../Shared/Loader";
import bannerImg from "../../assets/allSessionBanner.jpg";

const AllSession = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(null);
  const [sortBy, setSortBy] = useState("default"); // State for sorting
  const [dateFilter, setDateFilter] = useState("latest"); // State for date filtering
  const itemPerPage = 8;

  // Fetch sessions based on current page, sort, and date filter
  const { card, refetch } = useSessionCard(
    currentPage,
    itemPerPage,
    sortBy,
    dateFilter
  );

  // Fetch session count for pagination
  useEffect(() => {
    fetch("http://localhost:5000/sessionCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((error) => {
        console.error("Error fetching session count:", error);
        // Optionally set an error state to display a message to the user
      });
  }, []);

  const numberOfPages = count ? Math.ceil(count / itemPerPage) : 0;
  const pages = [...Array(numberOfPages).keys()];

  // Handle sort change and refetch data
  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    setCurrentPage(0); // Reset to page 0 for proper pagination
    refetch(newSortBy, dateFilter, 0, itemPerPage); // Pass parameters explicitly to refetch
  };

  // Handle date filter change and refetch data
  // const handleDateFilterChange = (e) => {
  //   const newDateFilter = e.target.value;
  //   setDateFilter(newDateFilter);
  //   setCurrentPage(0);
  //   refetch(sortBy, newDateFilter, 0, itemPerPage);
  // };

  return (
    <div>
      {/* Banner */}
      <AllSessionBanner
        title="Explore All Available Sessions"
        description="Find the perfect session that matches your learning needs. Browse through a wide range of topics, book your preferred session, and start your learning journey today. Unlock new skills and knowledge with expert-led sessions tailored just for you!"
        img="https://img.freepik.com/free-photo/international-day-education-cartoon-style_23-2151007407.jpg?t=st=1740338263~exp=1740341863~hmac=b4e2fa4bb42bc8866b658aa43137e0655294aee5ba8594a334f9fcf710ed2622&w=1380"
        link1="All Session"
        route1="/allSession"
      />

      {/* Sorting and Date Filtering Dropdowns */}
      <div className="flex justify-center items-center space-x-4 my-4 mb-10">
        {/* Sort Dropdown */}
        <div>
          <label
            htmlFor="sort"
            className="mr-2 text-gray-700 font-bold text-2xl dark:text-white/80"
          >
            Sort By:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="px-3 py-3 border border-black bg-black dark:bg-neutral-700 text-white rounded-md focus:outline-none focus:border-black"
            aria-label="Sort sessions"
          >
            <option value="default">Default</option>
            <option value="price_asc">Price (Low to High)</option>
            <option value="price_desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Session Cards */}
      <div className="md:w-11/12 md:mx-auto mx-2 grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-3">
        {!card ? (
          <Loader /> // Display loading message or spinner while data is fetched
        ) : card.length > 0 ? (
          card.map(
            (item) =>
              item.status === "success" && (
                <SessionCard key={item._id} item={item} />
              )
          )
        ) : (
          <p>No sessions found</p> // Handle the case where no sessions are found
        )}
      </div>

      {/* Pagination */}
      <div className="space-x-4 flex justify-center items-center my-8">
        {pages.map((page) => (
          <button
            onClick={() => {
              setCurrentPage(page);
              refetch(sortBy, dateFilter, page, itemPerPage);
            }}
            className={`${
              currentPage === page && "bg-black dark:bg-neutral-900 text-white"
            } btn px-5 text-xl dark:bg-neutral-400 border border-black`}
            key={page}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllSession;
