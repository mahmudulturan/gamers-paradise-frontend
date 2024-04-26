import { ITestimonial } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }: { testimonial: ITestimonial }) => {
    return (
        <div className='bg-seconderyCol p-7 rounded-md hover:-translate-y-1 transition-all duration-300 select-none'>
            <div className='flex items-center justify-between gap-6'>
                <div className='flex items-center justify-start gap-3'>
                    <Image className='w-16' src={testimonial.image} alt={`image of ${testimonial.name}`} />
                    <div>
                        <h4 className='uppercase font-bold text-lg'>{testimonial.name}</h4>
                        <p className='uppercase font-medium text-base'>{testimonial.gameName}</p>
                    </div>
                </div>
                <Image className='w-16 hidden md:block' src={testimonial.gameLogo} alt={`logo of ${testimonial.gameName}`} />
            </div>
            <hr className='my-6 border-[#FFFFFF1A]' />
            <div>
                <p>{testimonial.reviewText}</p>
                <div className='flex items-center justify-start gap-3 my-3'>
                    <div className='flex items-center justify-start gap-1'>
                        <FaStar className='text-2xl bg-primaryCol p-1 rounded-md' />
                        <FaStar className='text-2xl bg-primaryCol p-1 rounded-md' />
                        <FaStar className='text-2xl bg-primaryCol p-1 rounded-md' />
                        <FaStar className='text-2xl bg-primaryCol p-1 rounded-md' />
                        <FaRegStar className='text-2xl bg-primaryCol p-1 rounded-md' />
                    </div>
                    <p className='font-semibold text-primaryCol text-lg'>{testimonial.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;