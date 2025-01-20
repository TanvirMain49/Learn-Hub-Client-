import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const {user, signOutUser} = useAuth();
  
  const navHome = location?.pathname === '/'; // Check if the path is the home page

  return (
    <div className="smooch-sans">
      <div className={`navbar z-10 ${
        navHome
          ? "absolute top-0 left-0 bg-transparent bg-opacity-45 shadow-lg text-gray-300"
          : " bg-white/20 backdrop-blur-lg bg-opacity-45 shadow-lg text-black"
      }absolute shadow-sm py-1 rounded-lg`}>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl text-black font-bold">LearnHub</a>
        </div>
        {/* Larger screen */}
        <div className={`navbar-end hidden lg:flex`}>
          <ul className="menu menu-horizontal px-1 space-x-3 mr-3 text-black font-bold">
              <NavLink className='text-3xl p-3'>Home</NavLink>
              <NavLink to='/dashboard/bookedSession' className='text-3xl p-3'>Dashboard</NavLink>
          </ul>
        </div>
        <div className="">
          {
            user ?  <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-20 rounded-full">
                {
                  user && <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL} 
                  />
                }
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <button onClick={signOutUser}>
              <li className="text-xl">Logout</li>
              </button>
            </ul>
          </div> : <div className="flex gap-2 items-center">
            <Link to='/login' className="hover:bg-neutral-900 text-3xl text-black btn hover:text-white border font-bold border-black rounded-xl transition-all ease-in-out duration-300 bg-transparent">Log in</Link>
            <Link to='/signup' className="hover:bg-neutral-900 btn border border-black  hover:text-white text-3xl rounded-xl font-bold text-black transition-all ease-in-out duration-300 bg-transparent"  >sign in</Link>
            
            </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
