import React from 'react';

const SectionHeading = ({ heading, subheading }: { heading: string, subheading: string }) => {
    return (
        <div className='flex items-center justify-center flex-col gap-2 md:gap-3 py-12 text-center'>
            <h6 className='uppercase text-primaryCol text-xl md:text-2xl'>{subheading}</h6>
            <h2 className='uppercase text-3xl md:text-5xl font-black'>{heading}</h2>
        </div>
    );
};

export default SectionHeading;