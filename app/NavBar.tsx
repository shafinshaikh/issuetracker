'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiCodesandbox } from "react-icons/fi";
import classnames from "classnames";

const NavBar = () => {
  const currentpath = usePathname();
  const links = [
    {label: 'Dashboard', href: '/'},
    {label: 'Issues', href: '/issues'},
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FiCodesandbox />
      </Link>
      <ul className="flex space-x-6">
        {links.map(link => 
            <Link 
            key={link.href} 
            href={link.href} 
            className={classnames({
              'text-zinc-900': currentpath === link.href,
              'text-zinc-500': currentpath !== link.href,
              'hover:text-zinc-800 transition-colors': true,
            })}> 
            {link.label}
            </Link>)}
      </ul>
    </nav>
  );
};

export default NavBar;
