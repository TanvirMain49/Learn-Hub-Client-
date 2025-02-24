import React from "react";
import { FaUsers } from "react-icons/fa6";

export default function TotalStudent({totalStudent}) {
  return (
    <div className="card border-black border boxFixed w-64">
      <div className="card-body flex-row gap-6 items-center">
        <FaUsers className="text-5xl dark:text-white/80" />
        <div>
          <h2 className="text-lg font-extrabold dark:text-white/80">Total Student</h2>
          <h1 className="text-3xl font-bold dark:text-white/80">{totalStudent}</h1>
        </div>
      </div>
    </div>
  );
}
