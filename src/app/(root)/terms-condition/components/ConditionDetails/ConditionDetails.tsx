import { FC } from 'react';

const ConditionDetails: FC = () => {
    return (
        <div className='space-y-8'>
            <div className='text-center'>
                <h3 className='text-2xl font-medium '>Payment Methods</h3>
                <p className='text-white/75  my-3 space-y-2 font-medium mx-auto text-left'><span className='block'>
                    We accept a variety of payment methods, including credit/debit cards, e-wallets, and mobile payments. All transactions are processed securely through our    trusted payment partners.
                </span>
                    <span className='block'>
                        Please note that we reserve the right to add, remove, or modify the available payment methods at any time without prior notice.
                    </span>
                    <span className='block'>
                        If you encounter any issues with your payment, please contact our customer support team for assistance.
                    </span>
                </p>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl font-medium'>Refund Policy</h3>
                <p className='text-white/75  my-3 space-y-2 font-medium mx-auto text-left'>
                    <span className='block'>
                        We offer a 14-day money-back guarantee on all purchases. If you are not satisfied with your purchase, you can request a refund within 14 days of the transaction date.
                    </span>
                    <span className='block'>
                        To request a refund, please contact our customer support team with your order details and the reason for the refund. We will review your request and process the refund as soon as possible.
                    </span>
                    <span className='block'>
                        Please note that certain restrictions may apply, and we reserve the right to deny refund requests in certain cases, such as fraudulent activity or abuse of the refund policy.
                    </span>
                </p>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl font-medium '>User Conduct</h3>
                <p className='text-white/75  my-3 space-y-2 font-medium mx-auto text-left'>
                    <span className='block'>
                        Users are expected to behave responsibly and refrain from engaging in any illegal or unethical activities while using our services. This includes, but is not limited to:
                    </span>
                    <span className='block text-left'>
                        <ul style={{ listStyleType: "disc" }} className='ml-5'>
                            <li>Attempting to hack, exploit, or manipulate our systems</li>
                            <li>Engaging in any form of fraud, including chargebacks or unauthorized transactions</li>
                            <li>Distributing or promoting any content that is illegal, harmful, or offensive</li>
                            <li>Violating the terms of service or policies of any third-party platforms or services</li>
                        </ul>
                    </span>
                    <span className='block'>
                        We reserve the right to suspend or terminate your account at any time if we determine that you have violated these terms or engaged in any other unacceptable behavior.
                    </span>
                </p>
            </div>

            <div className='text-center'>
                <h3 className='text-2xl font-medium '>Privacy</h3>
                <p className='text-white/75  my-3 space-y-2 font-medium mx-auto text-left'>
                    <span className='block'>
                        We take your privacy seriously and are committed to protecting your personal information. We will not share your personal information with any third parties without your consent, except as required by law or to provide the services you have requested.
                    </span>
                    <span className='block'>
                        We may collect and use certain information about you, such as your name, email address, and payment information, in order to facilitate your transactions and provide you with the best possible experience.
                    </span>
                    <span className='block'>
                        For more detailed information about our privacy practices, please refer to our Privacy Policy, which is available on our website.
                    </span>
                </p>
            </div>
            <hr className='border-[#FFFFFF1A] my-20' />
            <p className='text-white mx-auto my-3 space-y-2 font-medium text-center'>
                By using our services, you agree to be bound by these terms and conditions. If you have any questions or concerns, please don't hesitate to contact our customer support team.
            </p>


        </div >
    );
};

export default ConditionDetails;