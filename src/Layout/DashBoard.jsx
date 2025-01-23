import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdAlignHorizontalLeft, MdHome, MdNoteAlt } from "react-icons/md";
import { FaBookBookmark, FaNoteSticky } from "react-icons/fa6";
import { IoAddCircle, IoAddCircleOutline, IoBookSharp, IoLogOut } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";

const DashBoard = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const isRole = "tutor";

  const handleLogOut = () => {
    signOutUser().then((res) => {
      navigate("/login");
    });
  };

  return (
    <div className="flex roboto">
      <div className="fixed top-0 left-0 w-64 p-3 h-screen bg-black text-white smooch-sans">
        {/* profile */}
        <div className="flex sticky items-center justify-between border-b-2 border-white/30 pb-4">
          <p className="text-2xl text-white font-bold">LearnHub</p>
          <div className="w-10 border-2 border-white rounded-full">
            {user && (
              <img
                alt={user?.name}
                src={user?.photoURL}
                className="rounded-full"
              />
            )}
          </div>
        </div>
        {/*Navbar*/}
        <div className="">
          <p className="mb-4 mt-2 text-xl font-bold text-right">
            You are {isRole}
          </p>
          {/* navbar */}
          <ul className="flex flex-col menu menu-horizontal text-white font-semibold uppercase space-y-6">
            {/* student navbar */}
            {isRole === "student" && (
              <>
                <NavLink
                  to="bookedSession"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaBookBookmark className="text-lg"></FaBookBookmark> booked
                  session
                </NavLink>
                <NavLink
                  to="Notes"
                  className="flex items-center gap-2 text-2xl"
                >
                  <MdNoteAlt className="text-lg"></MdNoteAlt> Create note
                </NavLink>
                <NavLink className="flex items-center gap-2 text-2xl">
                  <FaNoteSticky className="text-lg"></FaNoteSticky> Manage notes
                </NavLink>
                <NavLink className="flex items-center gap-2 text-2xl">
                  <IoBookSharp className="text-lg"></IoBookSharp>
                  all study materials
                </NavLink>
              </>
            )}

            {/* tutor navbar */}
            {isRole === "tutor" && (
              <>
                <NavLink
                  to="addSession"
                  className="flex items-center gap-2 text-2xl"
                >
                  <IoAddCircle className="text-xl"></IoAddCircle> add session
                </NavLink>
                <NavLink
                  to="personalSession"
                  className="flex items-center gap-2 text-2xl"
                >
                  <MdAlignHorizontalLeft className="text-lg"></MdAlignHorizontalLeft> all sessions
                </NavLink>
                <NavLink
                to="materials"
                className="flex items-center gap-2 text-2xl">
                  <IoAddCircleOutline className="text-xl"></IoAddCircleOutline> Update materials
                </NavLink>
                <NavLink 
                to="allMaterials"
                className="flex items-center gap-2 text-2xl">
                  <IoBookSharp className="text-lg"></IoBookSharp>
                  all materials
                </NavLink>
              </>
            )}

            <div className="border-b-2 border-white/40"></div>

            {/* Main navbar */}

            <NavLink to="/" className="flex items-center gap-2 text-2xl">
              <MdHome className="text-xl"></MdHome> Home
            </NavLink>
            <NavLink className="flex items-center gap-2 text-2xl">
              <FaBookOpen className="text-lg"></FaBookOpen> All Session
            </NavLink>
            <button
              onClick={handleLogOut}
              className="flex items-center gap-2 text-2xl"
            >
              <IoLogOut className="text-xl"></IoLogOut>
              log out
            </button>
          </ul>
        </div>
      </div>
      <div className="flex-1 py-10 pl-72 min-h-screen bg-gray-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
