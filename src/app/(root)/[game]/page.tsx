import React from 'react';

import SelectItems from './components/SelectItems/SelectItems';
import GameInfo from './components/GameInfo/GameInfo';
import PaymentInfo from './components/PaymentInfo/PaymentInfo';

const page = () => {

    return (
        <div className='min-h-[90vh] flex justify-center wrapper my-12 relative'>
            <div className='max-w-lg w-full'>
                <GameInfo />
            </div>
            <div className='max-w-5xl w-full space-y-8'>
                <SelectItems />
                <PaymentInfo />
            </div>
        </div>
    );
};

export default page;