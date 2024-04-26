import React from 'react';
import './banner.css';
import { Button } from '@/components/ui/Button/button';
import { FaCircleArrowRight } from "react-icons/fa6";
import HighlightedFeature from './HighlightedFeature';

const Banner = () => {
    return (
        <div className='relative mb-[450px] md:mb-[120px]'>
            <div className='min-h-[75vh] banner-bg relative z-10'>
                <div className='absolute h-full w-full bg-seconderyCol/70'>
                    <div className='wrapper flex items-center justify-between min-h-[75vh] -mt-10 px-2 lg:px-0'>
                        <div className=''>
                            <h2 className='text-4xl md:text-6xl lg:text-8xl font-black uppercase md:my-3 max-w-xs drop-shadow-2xl'>Gamers <span className='text-primaryCol drop-shadow-2xl'>Paradise</span></h2>
                            <h4 className='text-2xl md:text-4xl lg:text-6xl uppercase font-bold max-w-3xl'>
                                Top-Up. Gear Up. Game On!
                            </h4>
                            <Button className='text-xl font-black py-6 px-3 md:py-7 md:px-7 my-3 md:my-6 gap-2' variant={"secondary"}>Explore The Paradise<FaCircleArrowRight className='text-xl' /></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='z-20 absolute w-full'>
                <HighlightedFeature />
            </div>
        </div>

    );
};

export default Banner;