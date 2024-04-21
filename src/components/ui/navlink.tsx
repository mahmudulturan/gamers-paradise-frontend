"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

const NavLink = ({ href, children, ...props }: NavLinkProps) => {
    const pathname = usePathname();
    return (
        <Link className={`uppercase font-semibold hover:text-textCol duration-300 flex flex-col group 
        relative  ${pathname === href && "border-b-2 border-primaryCol"}hover:border-b-2 border-primaryCol md:hover:border-b-0 md:border-b-0`} href={href} {...props}>
            <span className="px-1">
                {children}
            </span>
            <span
                className={`absolute hidden md:block inset-x-0 -bottom-0.5 h-0.5 bg-primaryCol transition-transform origin-left transform 
            ${pathname === href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
            duration-200`}>
            </span>
        </Link>
    );
};

export default NavLink;