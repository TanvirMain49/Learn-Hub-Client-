import React from "react";
import DashToggle from "../Component/DashToggle";
import DashNotification from "../Component/DashNotification";
import DashChart from "../Component/DashChart";
import DashProfile from "../Component/DashProfile";

export default function DashTopNav() {
  return (
    <div className="px-4 py-3 shadow-xl bg-black text-white flex md:flex-row justify-between items-center gap-4 mb-10">
      <label className="input input-bordered w-52 md:w-auto flex items-center gap-2 text-black">
        <input type="text" className="grow px-2 py-1" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className="flex items-center justify-center gap-4">
        <DashToggle />
        <DashNotification />
        <DashChart />
        <DashProfile />
      </div>
    </div>
  );
}
