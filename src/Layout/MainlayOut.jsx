import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const MainLayOut = () => {
    return (
        <div className='roboto bg-base-200'>
            <div className='md:w-11/12 mx-auto sticky top-0 z-50'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;