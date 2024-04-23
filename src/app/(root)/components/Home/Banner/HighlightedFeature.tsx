import React from 'react';
import { FaUsersGear } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const HighlightedFeature = () => {

    const features = [
        {
            icon: <FaUsersGear className='text-4xl mt-2' />,
            name: "Instant Top-Ups",
            description: "Refuel your gaming account instantly."
        },
        {
            icon: <RiSecurePaymentFill className='text-4xl mt-2' />,
            name: "Secure Transactions",
            description: "Shop securely with encrypted transactions."
        },
        {
            icon: <BiSupport className='text-4xl mt-2' />,
            name: "24/7 Support",
            description: "Get help anytime, anywhere."
        }
    ];


    return (
        <div className='min-h-[20vh] -mt-24 z-10  grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 lg:px-0'>
            {
                features.map((feature, indx) => <div key={indx}
                    className='bg-seconderyCol hover:bg-primaryCol hover:text-textCol duration-300 
                    min-h-[20vh] flex-1 w-full rounded-md flex items-center justify-center flex-col gap-2 px-6 py-4 hover:drop-shadow-2xl select-none'>
                    {feature.icon}
                    <h3 className='text-2xl'>{feature.name}</h3>
                    <p className='text-center flex-1'>{feature.description}</p>
                </div>)
            }
        </div>
    );
};

export default HighlightedFeature;