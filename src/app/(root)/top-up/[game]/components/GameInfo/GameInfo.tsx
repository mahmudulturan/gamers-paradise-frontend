import React from 'react';
import pubgBanner from '@/assets/images/game/pubg-banner.jpg';
import Image from 'next/image';
import { SiFastapi } from "react-icons/si";
import { RiSecurePaymentLine } from "react-icons/ri";
const GameInfo = () => {
    return (
        <div className='md:max-w-lg px-4 flex flex-col'>
            <Image src={pubgBanner} alt='Image of pubg banner' />
            <h4 className='text-2xl font-bold my-3'>PUBG Mobile UC</h4>
            <div className='flex items-center gap-3 mb-3'>
                <div className='flex items-center gap-2 px-3 py-1 bg-textCol text-primaryCol rounded-full select-none font-semibold text-sm'>
                    <SiFastapi /> Instant Delivery
                </div>
                <div className='flex items-center gap-2 px-3 py-1 bg-textCol text-primaryCol rounded-full select-none font-semibold text-sm'>
                    <RiSecurePaymentLine /> Official Distributor
                </div>
            </div>
            <p>
                Gamers Paradise is pleased to offer official PUBG MOBILE UC vouchers!
                It's secure and easy. Just select the value of PUBG MOBILE UC you wish to purchase, complete the payment, and your UC voucher will be ready for redemption.

                Click here to redeem your PUBG Mobile UC voucher code or click here for more information
            </p>
        </div>
    );
};

export default GameInfo;