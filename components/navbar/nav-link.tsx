"use client";

import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<React.PropsWithChildren<NavLinkProps>> = ({
  children,
  href,
}) => {
  const disablePropagation = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation();
    },
    [],
  );

  return (
    <Link
      href={href}
      className="group z-10 font-bold text-zinc-100 outline-none"
      onClick={disablePropagation}
    >
      <div className="w-fit">
        {children}
        <div className="h-1 w-0 bg-zinc-100 transition-[width] duration-300 ease-in-out group-hover:w-full group-focus:w-full" />
      </div>
    </Link>
  );
};

export default NavLink;
