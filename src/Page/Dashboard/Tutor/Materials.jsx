import React from "react";
import usePersonalSession from "../../../Hooks/usePersonalSession";
import MaterialCard from "./MaterialCard";
import DasHeading from "../../../Shared/DashBoardHeading";

const Materials = () => {
    const {items} = usePersonalSession();
  return (
    <>
      <DasHeading Heading="Add Essential Materials" subHeading="The Essentials"></DasHeading>
    
        <div className="md:w-11/12 md:mx-auto grid md:grid-cols-3 grid-cols-1 gap-6">
        {
          items.status !== 'rejected' && items.map(item=><MaterialCard key={item._id} item={item}></MaterialCard> )
        }
        </div>

    </>
  );
};

export default Materials;
