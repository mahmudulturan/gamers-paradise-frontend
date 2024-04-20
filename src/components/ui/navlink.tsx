"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { LinkHTMLAttributes } from "react";
import { Button } from "./button";

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    active: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    other: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const NavLink = ({ href, children, active, other, ...props }: NavLinkProps) => {
    const pathname = usePathname();
    return (
        <Link className="uppercase font-semibold hover:text-textCol duration-300 flex flex-col group relative" href={href} {...props}>
            <span className="px-1">
                {children}
            </span>
            <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-primaryCol transition-transform origin-left transform 
            ${pathname === href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
            duration-200`}>
            </span>
        </Link>
    );
};

export default NavLink;