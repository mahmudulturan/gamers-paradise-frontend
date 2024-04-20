import React from 'react';
import logo from '@/assets/images/logo/gamersParadiseLogo.png';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const Navbar = () => {
    return (
        <div className='py-4'>
            <div className='wrapper flex items-center justify-between'>
                <div>
                    <Link href={'/'}>
                        <Image className='w-32' src={logo} alt='logo of gamers paradise' />
                    </Link>
                </div>
                <div className='flex gap-10 items-center'>
                    <NavLinks />
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;