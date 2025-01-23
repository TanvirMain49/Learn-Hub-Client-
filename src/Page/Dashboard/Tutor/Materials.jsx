import React from "react";
import usePersonalSession from "../../../Hooks/usePersonalSession";
import MaterialCard from "./MaterialCard";
import DasHeading from "../../../Shared/DashBoardHeading";

const Materials = () => {
    const {items} = usePersonalSession();
  return (
    <>
      <DasHeading Heading="Add Essential Materials" subHeading="The Essentials"></DasHeading>
    
        <div className="grid grid-cols-3 gap-2">
        {
            items.map(item=><MaterialCard key={item._id} item={item}></MaterialCard> )
        }
        </div>

    </>
  );
};

export default Materials;
