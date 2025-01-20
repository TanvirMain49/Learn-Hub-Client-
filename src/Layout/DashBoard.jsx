import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const DashBoard = () => {
    const {user} = useAuth();
    const isRole = "student"
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-black text-white'>
            <a className="btn btn-ghost text-3xl text-white font-bold">LearnHub</a>
                {/* student */}
                <div>
                <NavLink>View booked session</NavLink>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;