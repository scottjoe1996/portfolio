"use client";

import React from "react";
import DropDownNavButton from "./drop-down-nav-button";
import RetroComputer from "../icons/retro-computer";

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
        className="container-shadow bg-foreground m-4 box-border flex items-center justify-end rounded-md px-8 py-3 sm:gap-16"
        inert={showNavDropDown}
      >
        <div className="mr-auto -ml-3 text-white">
          <RetroComputer size="3.5rem" />
        </div>
        {React.Children.map(children, (child) => (
          <div className="mt-1 hidden sm:inline-block">{child}</div>
        ))}
      </nav>
      <DropDownNavButton show={showNavDropDown}>{children}</DropDownNavButton>
    </>
  );
};

export default Navbar;
