import React from 'react';
import './banner.css';
import { Button } from '@/components/ui/Button/button';
import { FaCircleArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='min-h-[90vh] banner-bg relative'>
            <div className='absolute h-full w-full bg-seconderyCol/70'>
                <div className='wrapper flex items-center justify-between min-h-[90vh] -mt-10'>
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
    );
};

export default Banner;