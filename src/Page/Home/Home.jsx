import React from 'react';
import Banner from './Banner';
import SessionCard from '../../Shared/SessionCard';
import TopCourse from './TopCourse';
import ViewReview from './ViewReview';
import ConnectUs from './ConnectUs';
import Subscribe from '../../Shared/Subscribe';
import ReviewsSection from './ReviewsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCourse></TopCourse>
            <ReviewsSection></ReviewsSection>
            <ConnectUs></ConnectUs>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;