import React from 'react';

import SelectItems from './components/SelectItems/SelectItems';
import GameInfo from './components/GameInfo/GameInfo';

const page = () => {

    return (
        <div className='min-h-[90vh] flex justify-center wrapper my-12'>
            <GameInfo />
            <div className='max-w-5xl w-full'>
                <SelectItems />
            </div>
        </div>
    );
};

export default page;