import { IGame } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GameCard = ({ game }: { game: IGame }) => {
    return (
        <Link href={game.route} className='rounded bg-seconderyCol hover:bg-primaryCol duration-300 flex items-center justify-center flex-col gap-2 pt-5 pb-4 group'>
            <div className='overflow-hidden sm:w-40'>
                <Image className='w-full group-hover:scale-105 group-hover:rotate-1 group-hover:saturate-150 transition-all duration-300 ' alt={`logo of ${game.name}`} src={game.logo} />
            </div>
            <h3 className='uppercase font-bold md:text-xl text-center'>{game.name}</h3>
        </Link>
    );
};

export default GameCard;