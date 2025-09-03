"use client";

import React from "react";
import DropDownNavButton from "./drop-down-nav-button";
import HamburgerMenu from "../icons/hamburger-menu";

const Navbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navBarRef = React.useRef<HTMLElement>(null);

  const [showNavDropDown, setShowNavDropDown] = React.useState(false);

  const onScroll = React.useCallback(() => {
    if (
      navBarRef.current?.clientHeight &&
      window.scrollY > navBarRef.current.clientHeight
    ) {
      setShowNavDropDown(true);
    } else {
      setShowNavDropDown(false);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <nav
        ref={navBarRef}
        aria-label="Main Nav Bar"
        className="container-shadow bg-foreground m-4 box-border flex items-center justify-between rounded-md px-8 py-4 sm:justify-end sm:gap-16"
        inert={showNavDropDown}
      >
        <div className="-ml-3 self-start text-white sm:hidden">
          <HamburgerMenu size="2rem" />
        </div>
        {React.Children.map(children, (child) => (
          <div className="mt-1 hidden sm:block">{child}</div>
        ))}
      </nav>
      <DropDownNavButton show={showNavDropDown}>{children}</DropDownNavButton>
    </>
  );
};

export default Navbar;
