"use client"
import React, { useState } from 'react';
import logo from '@/assets/images/logo/gamersParadiseLogo.png';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/button';
import ToggleMenuButton from '@/components/ui/ToggleMenuButton/ToggleMenuButton';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggler = () => {
        setIsMenuOpen(pre => !pre);
    }
    return (
        <div className='py-4 shadow-xl'>
            <div className='wrapper relative'>
                <div className='flex items-center justify-between mx-3'>
                    <div className='md:hidden'>
                        <span>
                            <ToggleMenuButton handleMenuToggler={handleMenuToggler} />
                        </span>
                    </div>
                    <div>
                        <Link href={'/'}>
                            <Image className='w-24 md:w-32' src={logo} alt='logo of gamers paradise' />
                        </Link>
                    </div>
                    <div className='flex gap-10 items-center'>
                        <div className='hidden md:block'>
                            <NavLinks />
                        </div>
                        <Button>Login</Button>
                    </div>
                    <div className={`absolute right-0 top-[70px] left-0 z-20 min-h-screen w-full origin-top duration-300 ${isMenuOpen ? "scale-y-100" : "scale-y-0"} blur-background`}>
                        <NavLinks />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;