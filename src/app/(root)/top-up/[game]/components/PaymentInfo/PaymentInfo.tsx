import React from 'react';
import stripeLogo from '@/assets/images/game/stripe-logo.png'
import sslCommerzLogo from '@/assets/images/game/sslcommerz-logo.png'
import Image from 'next/image';
const PaymentInfo = () => {
    return (
        <div className='bg-seconderyCol relative px-6 py-2 rounded-md'>
            <div className='flex items-center justify-start gap-1'>
                <span className='w-12 h-12 flex items-center justify-center text-center -mt-8 text-seconderyCol text-xl font-semibold rounded-full bg-white border-4 border-seconderyCol'>
                    2
                </span>
                <h3 className='font-semibold text-xl'>Select Payment Method</h3>
            </div>
            <div className='flex items-center justify-center gap-6 my-6'>
                <div className='px-2 py-4 bg-textCol hover:bg-primaryCol duration-300 flex items-center justify-center rounded-md h-20 cursor-pointer flex-1'>
                    <Image className='w-1/2' src={stripeLogo} alt='logo of stripe payment method' />
                </div>
                <div className='px-2 py-4 bg-textCol hover:bg-primaryCol duration-300 flex items-center justify-center rounded-md h-20 cursor-pointer flex-1'>
                    <Image className='' src={sslCommerzLogo} alt='logo of sll commerze payment method' />
                </div>
            </div>
        </div>
    );
};

export default PaymentInfo;