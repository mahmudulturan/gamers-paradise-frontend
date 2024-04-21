import React from 'react';
import './footer.css';
import logo from '@/assets/images/logo/gamersParadiseLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='footer-bg'>
            <section className='min-h-[40vh] wrapper flex items-center justify-between gap-6 py-12'>
                {/* footer logo start*/}
                <div>
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
                <div>

                </div>

                {/* newsletter section start */}
                <div>

                </div>
            </section>
            <section className='bg-seconderyCol py-8'>
                <p className='text-center text-sm'>The <span>Trio Dev LTD.</span> © 2024 Trading as <span className='font-semibold'>Gamers Paradise</span>. All Rights Reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;