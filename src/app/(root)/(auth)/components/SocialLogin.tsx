import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-3'>
            <h3 className='uppercase font-bold text-lg md:text-xl mt-4'>Continue With Social Media</h3>
            <div className='flex gap-4 items-center justify-start'>
                <FaFacebook className='text-5xl hover:-translate-y-1 duration-300 cursor-pointer text-textCol bg-blue-600 p-2 rounded-full' />
                <FaGoogle className='text-5xl hover:-translate-y-1 duration-300 cursor-pointer text-textCol bg-red-600 p-2 rounded-full' />
            </div>
        </div>
    );
};

export default SocialLogin;