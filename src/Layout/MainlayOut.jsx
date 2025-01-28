import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Subscribe from '../Shared/Subscribe';

const MainLayOut = () => {
    return (
        <div className='roboto bg-base-200'>
            <div className='md:w-11/12 md:mx-auto sticky top-0 z-50'>
            <Navbar></Navbar>
            </div>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;