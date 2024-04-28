import React from 'react';

import SelectItems from './components/SelectItems/SelectItems';
import GameInfo from './components/GameInfo/GameInfo';
import PaymentInfo from './components/PaymentInfo/PaymentInfo';
import GameIdInfo from './components/GameIdInfo/GameIdInfo';
import Checkout from './components/Checkout/Checkout';

const page = () => {

    return (
        <div className='min-h-[90vh] flex flex-col md:flex-row justify-center wrapper my-12 relative gap-10'>
            <div className='md:max-w-lg w-full'>
                <GameInfo />
            </div>
            <div className='max-w-5xl w-full space-y-8'>
                <SelectItems />
                <PaymentInfo />
                <GameIdInfo />
                <Checkout />
            </div>
        </div>
    );
};

export default page;