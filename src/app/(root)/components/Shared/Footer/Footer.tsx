import React from 'react';
import './footer.css';
import logo from '@/assets/images/logo/gamersParadiseLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaFacebook, FaChevronRight } from "react-icons/fa6";
import { CiLocationOn, CiMobile4, CiMail } from "react-icons/ci";
import { Input } from '@/components/ui/Input/input';
import { Button } from '@/components/ui/Button/button';

const Footer = () => {
    return (
        <footer className='footer-bg'>
            {/* address section start */}
            <section className='border-b-[1px] border-[#FFFFFF1A] '>
                <div className='wrapper border-x-[1px] border-[#FFFFFF1A] flex flex-col md:flex-row justify-between py-10 md:py-0'>
                    <div className='flex-1 py-3 md:py-10 md:px-6 flex items-center gap-2'>
                        <CiMobile4 className='text-4xl' />
                        <span>Phone Number : +88017 548 8598 648</span>
                    </div>
                    <div className='flex-1 py-3 md:py-10 md:px-6 md:border-x-[1px] border-[#FFFFFF1A] flex items-center gap-2'>
                        <CiMail className='text-4xl' />
                        <span>Email : gamersparadise@gmail.com</span>
                    </div>
                    <div className='flex-1 py-3 md:py-10 md:px-6 flex items-center gap-2'>
                        <CiLocationOn className='text-4xl' />
                        <span>Address : House #80, North Badda, Dhaka 1212</span>
                    </div>
                </div>
            </section>
            {/* address section end */}

            {/* details and speacial links section start */}
            <section className='min-h-[40vh] wrapper flex flex-col md:flex-row items-start justify-between gap-6 py-12'>
                {/* footer logo and details start*/}
                <div className='flex-1'>
                    <Link href={'/'}>
                        <Image className='w-24 md:w-32' src={logo} alt='logo of gamers paradise' />
                    </Link>
                    <p className='max-w-xs my-6'>Gamers Paradise: Enhancing gaming worldwide with convenience, accessibility, and community. A comprehensive platform tailored for diverse gamer needs.</p>
                    <div className='flex gap-4 items-center justify-start'>
                        <a href="https://www.facebook.com" target='_blank'>
                            <FaFacebook className='text-4xl hover:-translate-y-1 duration-300 cursor-pointer bg-textCol text-blue-600 p-1 rounded-2xl' />
                        </a>
                        <a href="https://www.instagram.com" target='_blank'>
                            <FaInstagram className='text-4xl hover:-translate-y-1 duration-300 cursor-pointer bg-textCol text-red-500 p-1 rounded-2xl' />
                        </a>
                        <a href="https://www.youtube.com" target='_blank'>
                            <FaYoutube className='text-4xl hover:-translate-y-1 duration-300 cursor-pointer bg-textCol text-red-600 p-1 rounded-2xl' />
                        </a>
                    </div>
                </div>
                {/* footer logo and details end*/}

                {/* help and information section start*/}
                <div className='flex-1'>
                    <h4 className='uppercase font-bold text-xl mb-4'>Help & Information</h4>
                    <div className='space-y-2'>
                        <div className='group hover:text-textCol/80 cursor-pointer flex items-center gap-2'>
                            <FaChevronRight className='group-hover:text-textCol/80' />
                            <span>About Us</span>
                        </div>
                        <div className='group hover:text-textCol/80 cursor-pointer flex items-center gap-2'>
                            <FaChevronRight className='group-hover:text-textCol/80' />
                            <span>Terms And Conditions</span>
                        </div>
                        <div className='group hover:text-textCol/80 cursor-pointer flex items-center gap-2'>
                            <FaChevronRight className='group-hover:text-textCol/80' />
                            <span>Return And Refund</span>
                        </div>
                        <div className='group hover:text-textCol/80 cursor-pointer flex items-center gap-2'>
                            <FaChevronRight className='group-hover:text-textCol/80' />
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </div>
                {/* help and information section end*/}

                {/* newsletter section start */}
                <div className='flex-1 gap-4 space-y-4'>
                    <h4 className='uppercase font-bold text-xl'>Our NewsLetter</h4>
                    <p>
                        Esports Excellence, Empowered by Passionate Community Leaders Worldwide.
                    </p>
                    <Input placeholder='Your Name' className='w-full' />
                    <Input placeholder='Your Email' className='w-full' />
                    <Button className='py-6 my-4' variant={"secondary"}>Send Message</Button>
                </div>
                {/* newsletter section start */}
            </section>
            {/* details and speacial links section end */}

            {/* copyright section start */}
            <section className='bg-seconderyCol py-6'>
                <p className='text-center text-sm'>The <span>Trio Dev LTD.</span> © 2024 Trading as <span className='font-semibold'>Gamers Paradise</span>. All Rights Reserved.</p>
            </section>
            {/* copyright section end */}
        </footer>
    );
};

export default Footer;