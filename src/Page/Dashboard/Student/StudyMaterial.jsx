import React from "react";
import DasHeading from "../../../Shared/DashBoardHeading";
import useBooked from "../../../Hooks/useBooked";
import StudyMaterialCard from "./StudyMaterialCard";

const StudyMaterial = () => {
  const { bookedSessions } = useBooked();

  return (
    <div>
      <DasHeading
        Heading="Get Study Material"
        subHeading="Discover Study Content"
      ></DasHeading>
      {bookedSessions.length ? (
        <div className="grid grid-cols-3 gap-6 px-10">
          {bookedSessions.map((session) => (
            <StudyMaterialCard
              session={session}
              key={session._id}
            ></StudyMaterialCard>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img src="https://img.freepik.com/free-vector/school-background-illustration-with-icons_1416-276.jpg?t=st=1738007557~exp=1738011157~hmac=f30710de9db9c62b8bb6d3bfc472150c1f64f2440f4225ee9b94b1307a777ffe&w=740" className="h-80"/>
          <h1 className="text-3xl mt-4 font-extrabold">
            Add Your Session to Get Material
          </h1>
        </div>
      )}
    </div>
  );
};

export default StudyMaterial;

