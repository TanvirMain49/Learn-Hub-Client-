import React from 'react';
import banner from '../../assets/DashDesgin.jpg'
import useAuth from '../../Hooks/useAuth';

const DashBoardBanner = () => {
    const {user} = useAuth();
    return (
        <div>
            {/* <img src={banner} alt="" className='w-96' />  */}
            <h1 className='text-center text-5xl font-bold'>Welcome Back!</h1>
            <h2 className='text-center font-bold'>{user.displayName}</h2>
        </div>
    );
};

export default DashBoardBanner;