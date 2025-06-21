import React from 'react';
import DropDownNavButton from './drop-down-nav-button';

const Navbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <nav className='bg-gray-800 flex justify-center items-center p-4 w-full shadow-xl gap-10'>{children}</nav>
      <DropDownNavButton />
    </>
  );
};

export default Navbar;
