import React from 'react';
import Banner from './components/Home/Banner/Banner';
import TopGames from './components/Home/TopGames/TopGames';
import WhoWeAre from './components/Home/WhoWeAre/WhoWeAre';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <TopGames />
            <WhoWeAre />
            {/* <div className="min-h-screen"></div> */}
            {/* <div className="min-h-screen"></div>
            <div className="min-h-screen"></div> */}
        </div>
    );
};

export default HomePage;