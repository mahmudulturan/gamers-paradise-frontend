import React from 'react';
import Banner from './components/Home/Banner/Banner';
import TopGames from './components/Home/TopGames/TopGames';
import WhoWeAre from './components/Home/WhoWeAre/WhoWeAre';
import Testimonials from './components/Home/Testimonials/Testimonials';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <TopGames />
            <WhoWeAre />
            <Testimonials />
        </div>
    );
};

export default HomePage;