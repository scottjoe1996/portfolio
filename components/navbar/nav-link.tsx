import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<React.PropsWithChildren<NavLinkProps>> = ({
  children,
  href,
}) => {
  return (
    <Link href={href} className="text-zinc-900 group">
      {children}
      <div className="w-0 h-1 bg-zinc-900 transition-[width] ease-in-out duration-300 group-hover:w-full group-focus:w-full" />
    </Link>
  );
};

export default NavLink;
