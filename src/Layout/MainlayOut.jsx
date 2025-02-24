import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const MainLayOut = () => {
    return (
        <div className='roboto bg-base-200 dark:bg-neutral-900'>
            <div className='md:w-full md:mx-auto sticky top-0 z-50'>
            <Navbar></Navbar>
            </div>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;