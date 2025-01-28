import React from 'react';
import Banner from './Banner';
import SessionCard from '../../Shared/SessionCard';
import TopCourse from './TopCourse';
import ViewReview from './ViewReview';
import ConnectUs from './ConnectUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCourse></TopCourse>
            <ViewReview></ViewReview>
            <ConnectUs></ConnectUs>
        </div>
    );
};

export default Home;