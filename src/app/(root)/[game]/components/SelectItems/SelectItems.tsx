import React from 'react';

const SelectItems = () => {
    const membership = [
        {
            uc: "Weekly\n1x",
            originalPrice: 10,
            discountedPrice: 8,
            discountPercentage: 20
        },
        {
            uc: "Weekly\n2x",
            originalPrice: 25,
            discountedPrice: 20,
            discountPercentage: 20
        },
        {
            uc: "Weekly\n3x",
            originalPrice: 50,
            discountedPrice: 40,
            discountPercentage: 20
        },
        {
            uc: "Monthly\n1x",
            originalPrice: 100,
            discountedPrice: 80,
            discountPercentage: 20
        },
        {
            uc: "Monthly\n2x",
            originalPrice: 150,
            discountedPrice: 190,
            discountPercentage: 20
        }
    ];

    const topUpItems = [
        {
            uc: 100,
            originalPrice: 10,
            discountedPrice: 8,
            discountPercentage: 20
        },
        {
            uc: 300,
            originalPrice: 25,
            discountedPrice: 20,
            discountPercentage: 20
        },
        {
            uc: 600,
            originalPrice: 50,
            discountedPrice: 40,
            discountPercentage: 20
        },
        {
            uc: 1500,
            originalPrice: 100,
            discountedPrice: 80,
            discountPercentage: 20
        },
        {
            uc: 1500,
            originalPrice: 150,
            discountedPrice: 190,
            discountPercentage: 20
        },
        {
            uc: 2000,
            originalPrice: 200,
            discountedPrice: 180,
            discountPercentage: 20
        },
        {
            uc: 2500,
            originalPrice: 100,
            discountedPrice: 154,
            discountPercentage: 20
        },
        {
            uc: 3000,
            originalPrice: 250,
            discountedPrice: 220,
            discountPercentage: 20
        },
    ];

    return (
        <div className='bg-seconderyCol relative px-6 py-2 rounded-md'>
            <div className='flex items-center justify-start gap-1'>
                <span className='w-12 h-12 flex items-center justify-center text-center -mt-8 text-seconderyCol text-xl font-semibold rounded-full bg-white border-4 border-seconderyCol'>
                    1
                </span>
                <h3 className='font-semibold text-xl'>Select Items</h3>
            </div>
            <div className='my-6'>
                <h3 className='text-center text-xl font-medium uppercase'>UC Topup</h3>
                <div className='grid grid-cols-4 gap-6 my-6'>
                    {topUpItems.map((item, indx) =>
                        <div key={indx}
                            className='bg-textCol hover:bg-primaryCol hover:text-textCol text-seconderyCol px-3 py-2 rounded-md cursor-pointer duration-300 flex'>
                            <h4 className='text-2xl font-semibold'>{item.uc}<br />UC</h4>
                            <div className='flex items-end flex-col justify-between my-1 flex-1'>
                                <h5 className='text-xl font-bold'>{item.discountedPrice}$</h5>
                                <div className='flex items-center justify-end gap-1'>
                                    <h5 className='text-xs'>-{item.discountPercentage}%</h5>
                                    <h5 className='line-through'>{item.originalPrice}$</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='my-6'>
                <h3 className='text-center text-xl font-medium uppercase'>Membership</h3>
                <div className='grid grid-cols-4 gap-6 my-6'>
                    {membership.map((item, indx) =>
                        <div key={indx}
                            className='bg-textCol hover:bg-primaryCol hover:text-textCol text-seconderyCol px-3 py-2 rounded-md cursor-pointer duration-300 flex'>
                            <h4 className='text-2xl font-semibold'>{item.uc}<br /></h4>
                            <div className='flex items-end flex-col justify-between my-1'>
                                <h5 className='text-xl font-bold'>{item.discountedPrice}$</h5>
                                <div className='flex items-center justify-end gap-1'>
                                    <h5 className='text-xs'>{item.discountPercentage}%</h5>
                                    <h5 className='line-through'>{item.originalPrice}$</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <hr className='border-[#FFFFFF1A]' />
            <div className='my-6'>
                <h3 className='text-center text-xl font-medium uppercase'>Total Payable Amount: 350$</h3>
            </div>
        </div>
    );
};

export default SelectItems;