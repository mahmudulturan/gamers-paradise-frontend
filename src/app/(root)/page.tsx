import React from 'react';
import Banner from './components/Home/Banner/Banner';
import TopGames from './components/Home/TopGames/TopGames';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <TopGames />
            <div className="min-h-screen"></div>
            {/* <div className="min-h-screen"></div>
            <div className="min-h-screen"></div> */}
        </div>
    );
};

export default HomePage;