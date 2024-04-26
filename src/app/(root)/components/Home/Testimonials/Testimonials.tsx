"use client"
import React from 'react';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import './testimonials.css';
import { testimonials } from '@/constants/constants';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className='testimonials-bg min-h-[] wrapper py-20'>
            <SectionHeading heading='What Our Gamers Say' subheading='Voices of Our Community' className='my-0' />
            <div className='my-8'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        }
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    className="mySwiper">
                    {
                        testimonials.map((testimonial, indx) => <SwiperSlide key={indx}><TestimonialCard testimonial={testimonial} /></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;