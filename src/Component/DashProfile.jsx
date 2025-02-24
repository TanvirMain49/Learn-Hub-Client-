import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link, Navigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { FaPersonRifle } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function DashProfile() {
  const { user, signOutUser } = useAuth();
  const handleLogOut = () => {
    signOutUser().then((res) => {
      Navigate("/login");
    });
  };
  return (
    <div className="dropdown dropdown-end text-black">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-16 rounded-full">
          <img alt={user?.displayName} src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link to="/dashboard/profile" className="flex items-center gap-2">
            <FaUser />
            Profile
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogOut}
            className="flex items-center gap-2 text-sm"
          >
            <IoLogOut className="text-base"></IoLogOut>
            log out
          </button>
        </li>
      </ul>
    </div>
  );
}
