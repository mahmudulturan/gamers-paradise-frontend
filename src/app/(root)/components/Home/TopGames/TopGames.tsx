import React from 'react';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import GameCard from './GameCard';
import { topGames } from '@/constants/constants';
import { Button } from '@/components/ui/Button/button';
import { FaCircleArrowRight } from "react-icons/fa6";

const TopGames = () => {
    return (
        <div className='wrapper'>
            <SectionHeading heading='Top Games Collection' subheading="Today's" className='py-12 my-0' />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-10'>
                {
                    topGames.map((game, indx) => <GameCard key={indx} game={game} />)
                }
            </div>
            <div className='flex items-center justify-center my-12'>
                <Button className='py-7 gap-2' variant={"secondary"}>Browse All Games <FaCircleArrowRight className='text-xl' /></Button>
            </div>
            <hr className='border-[#FFFFFF1A] my-20' />
        </div>
    );
};

export default TopGames;