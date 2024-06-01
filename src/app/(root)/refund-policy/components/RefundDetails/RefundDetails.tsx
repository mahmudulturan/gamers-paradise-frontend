import { FC } from 'react';

const RefundDetails: FC = () => {
    return (
        <div className='space-y-8'>
            <div className='text-center'>
                <h3 className='text-2xl font-medium '>14-Day Money-Back Guarantee</h3>
                <div className='text-white/75  my-3 space-y-2 font-medium mx-auto text-left'><span className='block'>
                    We offer a 14-day money-back guarantee on all purchases. If you are got any wrong product with your purchase, you can request a refund within 14 days of the transaction date.
                </span>
                    <span className='block'>
                        To request a refund, please contact our customer support team with your order details and the reason for the refund. We will review your request and process the refund as soon as possible.
                    </span>
                    <span className='block'>
                        Please note that certain restrictions may apply, and we reserve the right to deny refund requests in certain cases, such as fraudulent activity or abuse of the refund policy.
                    </span>
                </div>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl font-medium'>Refund Process</h3>
                <div className='text-white/75  my-3 space-y-2 font-medium mx-auto text-left'>
                    <span className='block'>
                        To request a refund, please follow these steps:
                    </span>
                    <span className='block text-left'>
                        <ol style={{ listStyleType: "decimal" }} className='ml-5'>
                            <li>Contact our customer support team within 14 days of your purchase. You can reach us by email at support@gamersparadise.com or directly message us on our social media channels.</li>
                            <li>Provide your order details, including the order number, date of purchase, and the reason for the refund request.</li>
                            <li>Our team will review your request and process the refund as soon as possible. Depending on your payment method, the refund may take 3-5 business days to appear in your account.
                            </li>
                        </ol>
                    </span>
                </div>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl font-medium '>Refund Restrictions</h3>
                <div className='text-white/75  my-3 space-y-2 font-medium mx-auto text-left'>
                    <span className='block'>
                        While we strive to provide a hassle-free refund process, there are certain restrictions and limitations that apply:
                    </span>
                    <span className='block text-left'>
                        <ul style={{ listStyleType: "disc" }} className='ml-5'>
                            <li>Refunds are only available for purchases made within the last 14 days.</li>
                            <li>Refunds may be denied in cases of fraudulent activity or abuse of the refund policy.</li>
                            <li>Certain digital products or services may not be eligible for refunds, as specified in the product's terms and conditions.</li>
                            <li>Refunds may be subject to a processing fee, depending on the payment method used.</li>
                        </ul>
                    </span>
                </div>
            </div>

            <div className='text-center'>
                <h3 className='text-2xl font-medium '>Customer Support</h3>
                <div className='text-white/75  my-3 space-y-2 font-medium mx-auto text-left'>
                    <span className='block'>
                        If you have any questions or concerns about our refund policy or the refund process, please don't hesitate to contact our customer support team. We are here to assist you and ensure a smooth experience.
                    </span>
                </div>
            </div>
            <hr className='border-[#FFFFFF1A] my-20' />
            <div className='text-white mx-auto my-3 space-y-2 font-medium text-center'>
                By using our services, you agree to be bound by our refund policy. If you have any further questions or concerns, please don't hesitate to contact our customer support team.
            </div>
        </div >
    );
};

export default RefundDetails;