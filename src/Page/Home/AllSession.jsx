import React, { useEffect, useState } from "react";
import useSessionCard from "../../Hooks/useSessionCard";
import SessionCard from "../../Shared/SessionCard";
import AllSessionBanner from "./AllSessionBanner";

const AllSession = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(null);
  const itemPerPage = 6;
  const { card, refetch } = useSessionCard(currentPage, itemPerPage);

  useEffect(() => {
    fetch("http://localhost:5000/sessionCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((error) => console.error("Error fetching session count:", error));
  }, []);

  const numberOfPages = count ? Math.ceil(count / itemPerPage) : 0;
  const pages = [...Array(numberOfPages).keys()];

  return (
    <div>
      <AllSessionBanner></AllSessionBanner>
      <div className="md:w-10/12 md:mx-auto mx-2 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3">
        {card.map(
          (item) =>
            item.status === "success" && (
              <SessionCard key={item._id} item={item}></SessionCard>
            )
        )}
      </div>
      <div className="space-x-4 flex justify-center items-center mt-8">
        {pages.map((page) => (
          <button
            onClick={() => {
              setCurrentPage(page);
              refetch();
            }}
            className={`${
              currentPage === page && "bg-black text-white"
            }  btn px-5 text-xl border border-black`}
            key={page}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllSession;
