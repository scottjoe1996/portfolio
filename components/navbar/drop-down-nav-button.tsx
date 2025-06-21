import React from 'react';
import HamburgerMenu from '../icons/hamburger-menu/hamburger-menu';

const DropDownNavButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex justify-end pr-2'>
      <nav className='ml-auto bg-gray-800 p-2 rounded-b-md shadow-xl'>
        <HamburgerMenu size='2rem' />
        {children}
      </nav>
    </div>
  );
};

export default DropDownNavButton;
