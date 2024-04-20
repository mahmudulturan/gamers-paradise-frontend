import React from 'react';
import logo from '@/assets/images/logo/gamersParadiseLogo.png';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/button';
import ToggleMenuButton from '@/components/ui/ToggleMenuButton/ToggleMenuButton';
const Navbar = () => {
    return (
        <div className='py-4 header-bg shadow-xl'>
            <div className='wrapper flex items-center justify-between'>
                <div>
                    <Link href={'/'}>
                        <Image className='w-24 md:w-32' src={logo} alt='logo of gamers paradise' />
                    </Link>
                </div>
                <div className='md:hidden'>
                    <ToggleMenuButton />
                </div>
                <div className='md:flex gap-10 items-center hidden'>
                    <NavLinks />
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;