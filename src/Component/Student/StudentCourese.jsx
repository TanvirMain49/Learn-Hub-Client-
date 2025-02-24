import React from "react";
import { FaBook } from "react-icons/fa";

export default function StudentCourse({bookedSessions}) {
  return (
    <div className="card border-black border boxFixed w-56">
      <div className="card-body flex-row gap-6 items-center dark:text-white/80">
        <FaBook className="text-5xl" />
        <div>
          <h2 className="text-xl font-extrabold"> Courses</h2>
          <h1 className="text-3xl font-bold">{bookedSessions}</h1>
        </div>
      </div>
    </div>
  );
}
