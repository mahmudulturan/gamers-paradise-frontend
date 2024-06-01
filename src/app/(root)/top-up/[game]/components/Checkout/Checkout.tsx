import { Button } from '@/components/ui/Button/button';
import { Input } from '@/components/ui/Input/input';
import Link from 'next/link';
import React from 'react';

const Checkout = () => {
    return (
        <div className='bg-seconderyCol relative px-6 py-2 rounded-md'>
            <div className='flex items-center justify-start gap-1'>
                <span className='w-12 h-12 flex items-center justify-center text-center -mt-8 text-seconderyCol text-xl font-semibold rounded-full bg-white border-4 border-seconderyCol'>
                    4
                </span>
                <h3 className='font-semibold text-xl'>Procced to Checkout</h3>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 my-6'>
                <div className='w-full'>
                    <Input
                        type='text'
                        value={"mahmudulhasanturan@gmail.com"}
                        readOnly
                        className='bg-textCol text-seconderyCol placeholder:text-seconderyCol rounded-md'
                        placeholder='Enter Your ID Number' />
                </div>
                <div className='w-full space-y-1'>
                    <div className='flex justify-start gap-1'>
                        <input type='checkbox' id='accept_terms' />
                        <label className='cursor-pointer' htmlFor="accept_terms">
                            I accept
                            all <Link href={'/terms-condition'} target='_blank' className='underline text-primaryCol cursor-pointer'>terms and conditions</Link> and <Link href={'/refund-policy'} target='_blank' className='underline text-primaryCol cursor-pointer'>refund policy</Link>.</label>
                    </div>
                    <div className='flex justify-start gap-1'>
                        <input type='checkbox' id='subscribe' />
                        <label className='cursor-pointer' htmlFor="subscribe">Yes, send me messages with exclusive Gamers Paradise news and promotions.</label>
                    </div>
                </div>
                <div className='flex justify-end w-full'>
                    <Button>Buy Now!!</Button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;