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
    <Link href={href} className="group font-bold text-zinc-100 outline-none">
      {children}
      <div className="h-1 w-0 bg-zinc-100 transition-[width] duration-300 ease-in-out group-hover:w-full group-focus:w-full" />
    </Link>
  );
};

export default NavLink;
