import React from "react";
import { MdCompassCalibration, MdIncompleteCircle } from "react-icons/md";

export default function CompleteCourse() {
  return (
    <div className="card border-black border boxFixed w-56">
      <div className="card-body flex-row gap-6 items-center">
        <MdIncompleteCircle className="text-6xl" />
        <div>
          <h2 className="text-xl font-extrabold"> Courses Complied</h2>
          <h1 className="text-3xl font-bold">1</h1>
        </div>
      </div>
    </div>
  );
}
