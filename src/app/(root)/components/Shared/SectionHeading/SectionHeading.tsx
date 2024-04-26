import { cn } from '@/lib/utils';
import React from 'react';

const SectionHeading = ({ heading, subheading, className }: { heading: string, subheading: string, className?: string }) => {
    return (
        <div className={cn("flex items-center justify-center flex-col gap-2 py-12 text-center font-medium", className)}>
            <h6 className='uppercase text-primaryCol text-xl md:text-2xl'>{subheading}</h6>
            <h2 className='uppercase text-3xl md:text-5xl font-black'>{heading}</h2>
        </div>
    );
};

export default SectionHeading;