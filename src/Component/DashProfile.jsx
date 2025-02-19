import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

export default function DashProfile() {
  const { user } = useAuth();
  return (
    <div className="dropdown dropdown-end text-black">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-16 rounded-full">
          <img
            alt={user?.displayName}
            src={user?.photoURL}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link to="/dashboard/profile"  className="justify-between">
            Profile
          </Link>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
}
