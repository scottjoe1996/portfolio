'use client';

import React from 'react';
import DropDownNavButton from './drop-down-nav-button';

const Navbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navBarRef = React.useRef<HTMLElement>(null);

  const [showNavDropDown, setShowNavDropDown] = React.useState(false);

  const onScroll = React.useCallback(() => {
    if (navBarRef.current?.clientHeight && window.scrollY > navBarRef.current.clientHeight) {
      setShowNavDropDown(true);
    } else {
      setShowNavDropDown(false);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <>
      <nav ref={navBarRef} className='bg-gray-800 flex justify-center items-center p-4 w-full shadow-xl gap-10'>
        {children}
      </nav>
      <DropDownNavButton show={showNavDropDown}> {children}</DropDownNavButton>
    </>
  );
};

export default Navbar;
