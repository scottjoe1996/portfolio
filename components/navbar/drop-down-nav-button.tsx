import React from 'react';
import HamburgerMenu from '../icons/hamburger-menu/hamburger-menu';

interface DropDownNavButtonProps {
  show: boolean;
}

const DropDownNavButton: React.FC<React.PropsWithChildren<DropDownNavButtonProps>> = ({ children, show }) => {
  return (
    <nav
      className={`fixed top-0 right-4 ml-auto bg-gray-800 p-2 rounded-b-md shadow-xl transition-[translate,opacity] ease-in-out duration-200 ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <HamburgerMenu size='2rem' show={show} />
      {children}
    </nav>
  );
};

export default DropDownNavButton;
