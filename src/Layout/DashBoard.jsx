import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdAlignHorizontalLeft, MdHome, MdNoteAlt } from "react-icons/md";
import { FaBookBookmark, FaNoteSticky, FaUsers } from "react-icons/fa6";
import {
  IoAddCircle,
  IoAddCircleOutline,
  IoBookSharp,
  IoLogOut,
} from "react-icons/io5";
import { FaBookOpen, FaListUl } from "react-icons/fa";
import useRole from "../Hooks/useRole";
import Loader from "../Shared/Loader";
import DashTopNav from "../Shared/DashTopNav";

const DashBoard = () => {
  const { isRole, isLoading } = useRole();
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOutUser().then((res) => {
      navigate("/login");
    });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="flex roboto">
      <div className="lg:hidden relative z-10 -mr-5">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content pt-2 pl-2 bg-gray-100">
            <label htmlFor="my-drawer" className="drawer-button">
              <FaListUl className="text-base"></FaListUl>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-black text-white min-h-full w-60 p-2">
              <div className="flex sticky items-center justify-between border-b border-white/30 pb-2">
                <p className="text-lg text-white font-bold">LearnHub</p>
                <div className="border border-white rounded-full">
                  {user && (
                    <img
                      alt={user?.name}
                      src={user?.photoURL}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                  )}
                </div>
              </div>
              {/* Navbar */}
              <div>
                <p className="mb-2 mt-1 text-sm font-bold text-right">
                  You are {isRole}
                </p>
                <ul className="flex flex-col menu text-white font-medium uppercase space-y-4">
                  {isRole === "Student" && (
                    <>
                      <NavLink
                        to="bookedSession"
                        className="flex items-center gap-2 text-sm"
                      >
                        <FaBookBookmark className="text-base"></FaBookBookmark>
                        booked session
                      </NavLink>
                      <NavLink
                        to="notes"
                        className="flex items-center gap-2 text-sm"
                      >
                        <MdNoteAlt className="text-base"></MdNoteAlt> Create
                        note
                      </NavLink>
                      <NavLink
                        to="mangeNotes"
                        className="flex items-center gap-2 text-sm"
                      >
                        <FaNoteSticky className="text-base"></FaNoteSticky>
                        Manage notes
                      </NavLink>
                      <NavLink
                        to="studyMaterial"
                        className="flex items-center gap-2 text-sm"
                      >
                        <IoBookSharp className="text-base"></IoBookSharp>
                        all study materials
                      </NavLink>
                    </>
                  )}
                  {isRole === "Admin" && (
                    <>
                      <NavLink
                        to="Admin/Users"
                        className="flex items-center gap-2 text-sm"
                      >
                        <FaUsers className="text-base"></FaUsers> View all users
                      </NavLink>
                      <NavLink
                        to="Admin/AllSession"
                        className="flex items-center gap-2 text-sm"
                      >
                        <MdAlignHorizontalLeft className="text-base"></MdAlignHorizontalLeft>
                        View all study session
                      </NavLink>
                      <NavLink
                        to="Admin/AllMaterials"
                        className="flex items-center gap-2 text-sm"
                      >
                        <IoBookSharp className="text-base"></IoBookSharp> View
                        all materials
                      </NavLink>
                    </>
                  )}
                  {isRole === "Tutor" && (
                    <>
                      <NavLink
                        to="addSession"
                        className="flex items-center gap-2 text-sm"
                      >
                        <IoAddCircle className="text-base"></IoAddCircle> add
                        session
                      </NavLink>
                      <NavLink
                        to="personalSession"
                        className="flex items-center gap-2 text-sm"
                      >
                        <MdAlignHorizontalLeft className="text-base"></MdAlignHorizontalLeft>
                        all sessions
                      </NavLink>
                      <NavLink
                        to="materials"
                        className="flex items-center gap-2 text-sm"
                      >
                        <IoAddCircleOutline className="text-base"></IoAddCircleOutline>
                        Upload materials
                      </NavLink>
                      <NavLink
                        to="allMaterials"
                        className="flex items-center gap-2 text-sm"
                      >
                        <IoBookSharp className="text-base"></IoBookSharp> all
                        materials
                      </NavLink>
                    </>
                  )}
                  <div className="border-b border-white/40"></div>
                  <NavLink to="/" className="flex items-center gap-2 text-sm">
                    <MdHome className="text-base"></MdHome> Home
                  </NavLink>
                  <NavLink
                    to="/allSession"
                    className="flex items-center gap-2 text-sm"
                  >
                    <FaBookOpen className="text-base"></FaBookOpen> All Session
                  </NavLink>
                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-2 text-sm"
                  >
                    <IoLogOut className="text-base"></IoLogOut>
                    log out
                  </button>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar for Larger Devices */}
      <div className="hidden lg:block fixed top-0 left-0 w-72 p-3 h-screen bg-black text-white smooch-sans">
        {/* Profile */}
        <div className="border-b-2 border-white/30">
          <p className="text-4xl text-white text-center font-bold mt-3 mb-5">LearnHub</p>
        </div>

        {/* Navbar */}
        <div>
          <ul className="flex flex-col menu text-white font-semibold uppercase mt-4 space-y-6">
            {isRole === "Student" && (
              <>
                <NavLink
                  to="bookedSession"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaBookBookmark className="text-lg"></FaBookBookmark> booked
                  session
                </NavLink>
                <NavLink
                  to="notes"
                  className="flex items-center gap-2 text-2xl"
                >
                  <MdNoteAlt className="text-lg"></MdNoteAlt> Create note
                </NavLink>
                <NavLink
                  to="mangeNotes"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaNoteSticky className="text-lg"></FaNoteSticky> Manage notes
                </NavLink>
                <NavLink
                  to="studyMaterial"
                  className="flex items-center gap-2 text-2xl"
                >
                  <IoBookSharp className="text-lg"></IoBookSharp>
                  all study materials
                </NavLink>
              </>
            )}
            {isRole === "Admin" && (
              <>
                <NavLink
                  to="/dashboard/Das"
                  className="flex items-center gap-2 text-2xl"
                >
                <FaUsers className="text-xl"></FaUsers> Dashboard
                </NavLink>

                <NavLink
                  to="Admin/Users"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaUsers className="text-xl"></FaUsers> View all users
                </NavLink>
                <NavLink
                  to="Admin/AllSession"
                  className="flex items-center gap-2 text-2xl"
                >
                  <MdAlignHorizontalLeft className="text-lg"></MdAlignHorizontalLeft>{" "}
                  View all study session
                </NavLink>
                <NavLink
                  to="Admin/AllMaterials"
                  className="flex items-center gap-2 text-2xl"
                >
                  <IoBookSharp className="text-lg"></IoBookSharp>
                  View all materials
                </NavLink>
              </>
            )}
            {isRole === "Tutor" && (
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
                  <MdAlignHorizontalLeft className="text-lg"></MdAlignHorizontalLeft>{" "}
                  all sessions
                </NavLink>
                <NavLink
                  to="materials"
                  className="flex items-center gap-2 text-2xl"
                >
                  <IoAddCircleOutline className="text-xl"></IoAddCircleOutline>{" "}
                  Upload materials
                </NavLink>
                <NavLink
                  to="allMaterials"
                  className="flex items-center gap-2 text-2xl"
                >
                  <IoBookSharp className="text-lg"></IoBookSharp>
                  all materials
                </NavLink>
              </>
            )}
            <div className="border-b-2 border-white/40"></div>
            <NavLink to="/" className="flex items-center gap-2 text-2xl">
              <MdHome className="text-xl"></MdHome> Home
            </NavLink>
            <NavLink
              to="/allSession"
              className="flex items-center gap-2 text-2xl"
            >
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

      {/* Main Content */}
      <div className="flex-1 md:pl-72 md:pr-0 pr-2 min-h-screen bg-gray-100">
        <DashTopNav/>
        <div className="px-6">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
