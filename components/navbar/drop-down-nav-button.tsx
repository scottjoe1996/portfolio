import React from 'react';
import HamburgerMenu from '../icons/hamburger-menu/hamburger-menu';

const DropDownNavButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <nav>
      <HamburgerMenu size='2rem' />
      {children}
    </nav>
  );
};

export default DropDownNavButton;
