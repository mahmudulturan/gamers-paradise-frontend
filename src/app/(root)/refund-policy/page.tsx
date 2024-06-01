import { FC } from 'react';
import SectionHeading from '../components/Shared/SectionHeading/SectionHeading';
import RefundDetails from './components/RefundDetails/RefundDetails';

const RefundPolicyPage: FC = () => {
    return (
        <div className='min-h-[90vh] my-10 h-full wrapper'>

            <SectionHeading className='md:text-left md:items-start py-0 mb-6' heading='REFUND POLICY' subheading='IMPORTANT INFORMATION'></SectionHeading>
            <p className='max-w-3xl'>A trusted game shop, dedicated to customer satisfaction. Our refund policy clearly outlines the conditions and procedures for refunds, ensuring a smooth and fair process for all our users.</p>

            <div className='my-10'>
                <RefundDetails />
            </div>
            
        </div>
    );
};

export default RefundPolicyPage;