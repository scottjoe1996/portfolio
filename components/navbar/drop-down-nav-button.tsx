import React from 'react';
import HamburgerMenu from '../icons/hamburger-menu/hamburger-menu';

const DropDownNavButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <nav className='fixed top-0 right-2 ml-auto bg-gray-800 p-2 rounded-b-md shadow-xl'>
      <HamburgerMenu size='2rem' />
      {children}
    </nav>
  );
};

export default DropDownNavButton;
