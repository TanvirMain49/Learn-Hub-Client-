import React from "react";
import usePersonalSession from "../../../Hooks/usePersonalSession";
import MaterialCard from "./MaterialCard";

const Materials = () => {
    const {items} = usePersonalSession();
  return (
    <>
      <h1 className="text-5xl font-bold text-center">Add Essential Materials</h1>
      <p className="text-base text-center font-normal mt-3 mb-8 max-w-4xl mx-auto">
      Effortlessly upload and add new resources to your sessions. Whether it’s documents, images, or links, you can enrich your students’ learning experience by providing valuable materials that support your lessons and help them succeed.
      </p>
    
        <div className="grid grid-cols-3 gap-2">
        {
            items.map(item=><MaterialCard key={item._id} item={item}></MaterialCard> )
        }
        </div>

    </>
  );
};

export default Materials;
