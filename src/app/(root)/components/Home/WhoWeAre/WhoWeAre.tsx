import Image from 'next/image';
import React from 'react';
import wwaImage from '@/assets/images/home/who-we-are/02.png'
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import { FaUsersGear } from 'react-icons/fa6';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';


const WhoWeAre = () => {

    // features array
    const features = [
        {
            icon: <FaUsersGear className='text-5xl md:text-7xl md:p-4 p-2 bg-primaryCol rounded-full' />,
            name: "Instant Top-Ups",
            description: "Refuel your gaming account instantly with our seamless top-up system. Say goodbye to delays and keep the fun going!"
        },
        {
            icon: <RiSecurePaymentFill className='text-5xl md:text-7xl md:p-4 p-2 bg-primaryCol rounded-full' />,
            name: "Secure Transactions",
            description: "Shop securely with encrypted transactions, ensuring the safety of your personal and financial information at all times."
        },
        {
            icon: <BiSupport className='text-5xl md:text-7xl md:p-4 p-2 bg-primaryCol rounded-full' />,
            name: "24/7 Support",
            description: "Get expert help and support anytime, anywhere. Our dedicated team is here to assist you with any queries or concerns."
        }
    ];


    return (
        <div className='wrapper flex flex-col md:flex-row items-center justify-center gap-10 mt-20'>
            {/* who we are image part */}
            <div className='flex-1'>
                <Image src={wwaImage} className='' alt='Image of who we are section' />
            </div>
            {/* who we are details part start */}
            <div className='flex-1'>
                <SectionHeading className='md:text-left md:items-start py-0 mb-6' heading='We Are Trusted Game Shop' subheading='WHO WE ARE'></SectionHeading>
                <p>A trusted game shop, fueled by our success, passionately dedicated to delivering exceptional gaming experiences through our mission-driven approach.</p>
                <div className='flex flex-col justify-center items-start gap-3 my-3 md:my-6'>
                    {
                        features.map((feature, indx) => <div key={indx} className="flex duration-300 flex-1 w-full rounded-md items-center justify-start gap-4 py-2 md:py-4 hover:drop-shadow-2xl select-none group">
                            <div className='rounded-full relative'>
                                <span className="group-hover:animate-ping absolute h-full w-full -z-10 duration-150 transition-all rounded-full bg-seconderyCol opacity-0 group-hover:opacity-75"></span>
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className='md:text-2xl text-lg uppercase font-bold'>{feature.name}</h3>
                                <p className='flex-1 max-w-sm'>{feature.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            {/* who we are details part end */}
        </div>
    );
};

export default WhoWeAre;