import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOutUser } = useAuth();
  const navHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="roboto">
      <div
        className={`navbar z-10 w-full transition-all ease-in-out duration-300 ${
          navHome && !isScrolled
            ? "absolute bg-transparent text-white"
            : "fixed bg-black shadow-lg text-white"
        } py-1 rounded-b-lg`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-black shadow"
            >
              <NavLink to="/" className="text-lg p-3">
                Home
              </NavLink>
              <NavLink to="allSession" className="text-lg">
                All Session
              </NavLink>
              <NavLink to="allTutor" className="text-lg">
                All Tutor
              </NavLink>
              <NavLink to="allSuccess" className="text-lg">
                All Success
              </NavLink>
              <NavLink to="/dashboard/Das" className="text-lg">
                Dashboard
              </NavLink>
            </ul>
          </div>
          <Link
            to="/"
            className="md:btn md:btn-ghost md:text-2xl text-xl text-white font-bold mr-0"
          >
            LearnHub
          </Link>
        </div>
        {/* Larger screen */}
        <div className={`navbar-end hidden lg:flex`}>
          <ul className="my-6 px-1 space-x-3 mr-3 font-bold">
            <NavLink to="/" className="text-lg p-3">
              Home
            </NavLink>
            <NavLink to="allSession" className="text-lg">
              Sessions
            </NavLink>
            {user && (
              <NavLink to="allTutor" className="text-lg">
                Tutors
              </NavLink>
            )}
            <NavLink to="allSuccess" className="text-lg">
              Success Story
            </NavLink>
            {user && (
              <NavLink to="/dashboard/Das" className="text-lg">
                Dashboard
              </NavLink>
            )}
          </ul>
        </div>
        <div className="md:ml-0 ml-16">
          {user ? (
            <div className="dropdown md:dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn ml-20 md:ml-0 btn-ghost btn-circle avatar"
              >
                <div className="md:w-20 w-16 rounded-full">
                  {user && <img alt="user" src={user.photoURL} />}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <button onClick={signOutUser}>
                  <li className="text-lg">Logout</li>
                </button>
              </ul>
            </div>
          ) : (
            <div className="md:flex md:gap-2 md:items-center">
              <Link
                to="/login"
                className="hover:bg-neutral-900 text-xl text-black btn hover:text-white border font-bold border-black rounded-xl transition-all ease-in-out duration-300 bg-transparent md:flex hidden"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="hover:bg-neutral-900 btn border border-black  hover:text-white md:text-xl ml-10 md:ml-0 rounded-xl font-bold text-black transition-all ease-in-out duration-300 bg-transparent"
              >
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
