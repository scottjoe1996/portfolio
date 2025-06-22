import React from 'react';
import HamburgerMenu from '../icons/hamburger-menu/hamburger-menu';

interface DropDownNavButtonProps {
  show: boolean;
}

const DropDownNavButton: React.FC<React.PropsWithChildren<DropDownNavButtonProps>> = ({ children, show }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleShowChange = React.useCallback((open: boolean) => {
    return () => setShowMenu(open);
  }, []);

  return (
    <nav
      className={`leading-none fixed top-0 right-4 ml-auto bg-gray-800 p-2 rounded-b-md shadow-xl transition-[translate,opacity] ease-in-out duration-200 ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      onMouseEnter={handleShowChange(true)}
      onMouseLeave={handleShowChange(false)}
    >
      {showMenu ? (
        <ul className='px-2'>
          {React.Children.map(children, (child) => (
            <li className='my-2'>{child}</li>
          ))}
        </ul>
      ) : (
        <button>
          <HamburgerMenu size='2rem' animate={show} />
        </button>
      )}
    </nav>
  );
};

export default DropDownNavButton;
