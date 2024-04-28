import { Input } from '@/components/ui/Input/input';
import React from 'react';

const GameIdInfo = () => {
    return (
        <div className='bg-seconderyCol relative px-6 py-2 rounded-md'>
            <div className='flex items-center justify-start gap-1'>
                <span className='w-12 h-12 flex items-center justify-center text-center -mt-8 text-seconderyCol text-xl font-semibold rounded-full bg-white border-4 border-seconderyCol'>
                    3
                </span>
                <h3 className='font-semibold text-xl'>Game ID Number</h3>
            </div>
            <div className='flex items-center justify-center gap-6 my-6'>
                <Input type='text' className='bg-textCol text-seconderyCol placeholder:text-seconderyCol rounded-md' placeholder='Enter Your ID Number' />
            </div>
        </div>
    );
};

export default GameIdInfo;