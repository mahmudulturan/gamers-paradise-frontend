import { Button } from '@/components/ui/button';
import NavLink from '@/components/ui/navlink';
import React from 'react';

const NavLinks = () => {
    const navbarRoutes = [
        { name: "Home", path: "/" },
        { name: "Games", path: "/games" },
        { name: "Top-Up", path: "/top-up" },
        { name: "Store", path: "/store" },
        { name: "Support", path: "/support" },
    ];
    return (
        <div className='flex gap-5'>
            {
                navbarRoutes.map((route, indx) => <NavLink key={indx} other='ghost' active='default' href={route.path}>{route.name}</NavLink>)
            }
        </div>
    );
};

export default NavLinks;