import { FC } from 'react';
import ConditionDetails from './components/ConditionDetails/ConditionDetails';
import SectionHeading from '../components/Shared/SectionHeading/SectionHeading';
import KeyPointsCard from './components/KeyPointsCard/KeyPointsCard';

const TermsAndConditionPage: FC = () => {

    return (
        <div className='min-h-[90vh] my-10 h-full wrapper'>

            <SectionHeading className='md:text-left md:items-start py-0 mb-6' heading='Terms and Conditions' subheading='IMPORTANT INFORMATION'></SectionHeading>
            <p className='max-w-3xl'>A trusted game shop, committed to transparency and fairness. Our terms and conditions outline the rules and regulations for the use of our services, ensuring a safe and enjoyable experience for all our users.</p>


            <div className='my-10'>
                <KeyPointsCard />
            </div>

            <div className='my-10'>
                <ConditionDetails />
            </div>

        </div>
    );
};

export default TermsAndConditionPage;