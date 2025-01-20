import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdHome, MdNoteAlt } from "react-icons/md";
import { FaBookBookmark, FaNoteSticky } from "react-icons/fa6";
import { IoBookSharp, IoLogOut } from "react-icons/io5";
import { FaBookOpen, FaCaretDown } from "react-icons/fa";

const DashBoard = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const isRole = "student";

  const handleLogOut = ()=>{
    signOutUser()
    .then(res =>{
        navigate('/login')
    })
  }

  return (
    <div className="flex smooch-sans">
      <div className="w-80 p-3 min-h-screen bg-black text-white ">
        {/* profile */}
        <div className="flex items-center justify-between border-b-2 border-white/30 pb-4">
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
        <div>
          <p className="mb-4 mt-2 text-xl font-bold text-right">You are Student</p>
          {/* student navbar */}
          <ul className="flex flex-col menu menu-horizontal text-white font-semibold uppercase space-y-6">
            <NavLink className="flex items-center gap-2 text-2xl">
              <FaBookBookmark className="text-lg"></FaBookBookmark>View booked session
            </NavLink>
            <NavLink className="flex items-center gap-2 text-2xl">
              <MdNoteAlt className="text-lg"></MdNoteAlt> Create note
            </NavLink>
            <NavLink className="flex items-center gap-2 text-2xl">
              <FaNoteSticky className="text-lg"></FaNoteSticky> Manage personal notes
            </NavLink>
            <NavLink className="flex items-center gap-2 text-2xl">
                <IoBookSharp className="text-lg"></IoBookSharp>
              View all study materials
            </NavLink>

            <div className="border-b-2 border-white/40"></div>

            {/* Main navbar */}

            <NavLink to='/'  className="flex items-center gap-2 text-2xl">
              <MdHome className="text-xl"></MdHome> Home
            </NavLink>
            <NavLink className="flex items-center gap-2 text-2xl">
              <FaBookOpen className="text-lg"></FaBookOpen> All Session
            </NavLink>
            <button onClick={handleLogOut} className="flex items-center gap-2 text-2xl">
                <IoLogOut className="text-xl"></IoLogOut>
              log out
            </button>

          </ul>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default DashBoard;
