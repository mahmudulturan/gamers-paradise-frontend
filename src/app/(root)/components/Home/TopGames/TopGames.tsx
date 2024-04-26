import React from 'react';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import codLogo from '@/assets/images/home/top-games/codm-wl_178x178.jpg'
import fcLogo from '@/assets/images/home/top-games/fc_mobile_tile.jpg'
import ffLogo from '@/assets/images/home/top-games/free_fire_new_tile.png'
import mlbbLogo from '@/assets/images/home/top-games/mlbb_tile_apr2024.png'
import pubgLogo from '@/assets/images/home/top-games/pubgm_rps_tile.jpg'
import GameCard from './GameCard';
import { topGames } from '@/constants/constants';

const TopGames = () => {
    const games = [
        {
            name: "EA SPORTS FC Mobile",
            logo: fcLogo,
            route: "/ea-sports-fc-mobile"
        },
        {
            name: "PUBG Mobile",
            logo: pubgLogo,
            route: "/pubg-mobile"
        },
        {
            name: "Mobile Legends",
            logo: mlbbLogo,
            route: "/mobile-legends"
        },
        {
            name: "Free Fire",
            logo: ffLogo,
            route: "/free-fire"
        },
        {
            name: "Call of Duty",
            logo: codLogo,
            route: "/call-of-duty"
        }
    ];


    return (
        <div className='wrapper'>
            <SectionHeading heading='Top Games Collection' subheading="Today's" />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-10'>
                {
                    topGames.map((game, indx) => <GameCard key={indx} game={game} />)
                }
            </div>
            <hr className='border-[#FFFFFF1A] my-20' />
        </div>
    );
};

export default TopGames;