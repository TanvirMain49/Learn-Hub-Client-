import React from "react";
import useSessionCard from "../../Hooks/useSessionCard";
import SessionCard from "../../Shared/SessionCard";
import AllSessionBanner from "./AllSessionBanner";

const AllSession = () => {
  const { card } = useSessionCard();
  // console.log(card);
  return (
    <div>
      <AllSessionBanner></AllSessionBanner>
      <div className="w-11/12 mx-auto grid grid-cols-3 gap-6">
        {card.map((item) => (
          <SessionCard key={item._id} item={item}></SessionCard>
        ))}
      </div>
    </div>
  );
};

export default AllSession;
