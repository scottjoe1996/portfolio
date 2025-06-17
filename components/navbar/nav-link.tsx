import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<React.PropsWithChildren<NavLinkProps>> = ({ children, href }) => {
  return (
    <Link href={href} className='text-white'>
      {children}
    </Link>
  );
};

export default NavLink;
