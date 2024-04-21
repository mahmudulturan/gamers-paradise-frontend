import React from 'react';
import './footer.css';
import logo from '@/assets/images/logo/gamersParadiseLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa6";
import { CiLocationOn, CiMobile4, CiMail  } from "react-icons/ci";
import { Input } from '@/components/ui/Input/input';
import { Button } from '@/components/ui/Button/button';

const Footer = () => {
    return (
        <footer className='footer-bg'>
            <section className=' border-b-[1px] border-[#FFFFFF1A] '>
                <div className='wrapper border-x-[1px] border-[#FFFFFF1A] flex justify-between'>
                    <div className='flex-1 py-10 px-6 flex items-center gap-2'>
                        <CiMobile4 className='text-4xl' />
                        <span>Phone Number : +88017 548 8598 648</span>
                    </div>
                    <div className='flex-1 py-10 px-6 border-x-[1px] border-[#FFFFFF1A] flex items-center gap-2'>
                        <CiMail className='text-4xl' />
                        <span>Email : gamersparadise@gmail.com</span>
                    </div>
                    <div className='flex-1 py-10 px-6 flex items-center gap-2r'>
                        <CiLocationOn className='text-4xl' />
                        <span>Address : House #80, North Badda, Dhaka 1212</span>
                    </div>
                </div>
            </section>
            <section className='min-h-[40vh] wrapper flex items-center justify-between gap-6 py-12'>
                {/* footer logo start*/}
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

                {/* suggestions section start*/}
                <div className='flex-1'>

                </div>

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
            </section>
            <section className='bg-seconderyCol py-8'>
                <p className='text-center text-sm'>The <span>Trio Dev LTD.</span> © 2024 Trading as <span className='font-semibold'>Gamers Paradise</span>. All Rights Reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;