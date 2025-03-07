import React from 'react';
import Banner from './Banner';
import TopCourse from './TopCourse';
import ConnectUs from './ConnectUs';
import Subscribe from '../../Shared/Subscribe';
import ReviewsSection from './ReviewsSection';
import AboutUsSection from './AboutUs';
import SuccessStory from './SuccessStory';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUsSection />
            <TopCourse></TopCourse>
            <ReviewsSection></ReviewsSection>
            <ConnectUs></ConnectUs>
            <SuccessStory />
            <HowItWorks />
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;