"use client"
import React, { useEffect, useState } from 'react';
import logo from '@/assets/images/logo/gamersParadiseLogo.png';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/button';
import ToggleMenuButton from '@/components/ui/ToggleMenuButton/ToggleMenuButton';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [prevPosition, setPrevPosition] = useState(0);

    // scroll handler
    const onScroll = () => {
        const currentPosition = window.scrollY;
        /* isScrolling state will be true when scroll up and current scroll position greater than 50.
         or current current position beetween 50-250 it will also return true */
        setIsScrolling(prevPosition > currentPosition && currentPosition >= 50 || prevPosition < currentPosition && (currentPosition >= 50 && currentPosition <= 250));
        setPrevPosition(currentPosition);
    };

    // dropdown manu handler
    const handleMenuToggler = () => {
        setIsMenuOpen(pre => !pre);
    }

    // handle sideeffect for scroll
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [prevPosition]);

    return (
        <div className={`sticky py-4 shadow-xl top-0 w-full z-40 duration-300 ${(prevPosition <= 50) ? "header-bg" : "bg-seconderyCol"} ${isScrolling || (prevPosition <= 50) ? "" : " -translate-y-full"}`}>
            <div className='wrapper relative'>
                <div className='flex items-center justify-between mx-3'>
                    {/* dropdown button for smaller devicesS */}
                    <div className='md:hidden'>
                        <span>
                            <ToggleMenuButton handleMenuToggler={handleMenuToggler} />
                        </span>
                    </div>

                    {/* header logo */}
                    <div>
                        <Link href={'/'}>
                            <Image className='w-24 md:w-32' src={logo} alt='logo of gamers paradise' />
                        </Link>
                    </div>

                    {/* navlinks for larger devices start */}
                    <div className='flex gap-10 items-center'>
                        <div className='hidden md:block'>
                            <NavLinks />
                        </div>
                        <Button>Login</Button>
                    </div>

                    {/* navlinks for smaller devices start */}
                    <div className={`absolute md:hidden right-0 top-[70px] left-0 z-20 w-[70%] max-w-72 mx-auto rounded-b-[8px] origin-top duration-300 ${isMenuOpen ? "scale-y-100" : "scale-y-0"} blur-background ${isScrolling || (prevPosition <= 50) ? "" : " -translate-y-full"}`} >
                        <NavLinks />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;