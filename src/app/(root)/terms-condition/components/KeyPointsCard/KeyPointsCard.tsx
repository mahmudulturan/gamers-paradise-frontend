import { FC } from 'react';
import { MdOutlinePrivacyTip } from "react-icons/md";
import { GoCodeOfConduct } from "react-icons/go";
import { RiRefund2Line } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";

const KeyPointsCard: FC = () => {
    const keyPoints = [
        {
            title: "Payment Methods",
            description: "We accept a variety of payment methods, including credit/debit cards, e-wallets, and mobile payments.",
            icon: <MdOutlinePayment />
        },
        {
            title: "Refund Policy",
            description: "We offer a 14-day money-back guarantee on all purchases. Certain restrictions may apply.",
            icon: <RiRefund2Line />
        },
        {
            title: "User Conduct",
            description: "Users are expected to behave responsibly and refrain from engaging in any illegal or unethical activities.",
            icon: <GoCodeOfConduct />
        },
        {
            title: "Privacy",
            description: "We take your privacy seriously and will not share your personal information with any third parties. ",
            icon: <MdOutlinePrivacyTip />
        },
    ]
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6'>
                {
                    keyPoints.map((keyPoint, indx) => (
                        <div key={indx} className='px-3 py-6 bg-seconderyCol/60 rounded-md flex gap-1 flex-col items-center justify-center'>
                            <div className='rounded-full relative flex'>
                                <span className="group-hover:animate-ping absolute h-full w-full -z-10 duration-150 transition-all rounded-full bg-seconderyCol opacity-0 group-hover:opacity-75"></span>
                                <span className='text-2xl md:text-4xl md:p-4 p-2 bg-primaryCol rounded-full'>{keyPoint.icon}</span>
                            </div>
                            <h6 className='text-xl font-semibold'>{keyPoint.title}</h6>
                            <p className='text-white/75 font-medium text-center mb-2'>{keyPoint.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default KeyPointsCard;