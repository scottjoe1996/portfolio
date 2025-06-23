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

  const menuId = 'dropdown-nav-menu';
  const hidden = !show;

  return (
    <nav
      aria-label='Support Nav Menu'
      inert={hidden}
      className={`leading-none fixed top-0 right-4 ml-auto bg-gray-800 p-2 rounded-b-md shadow-xl transition-[translate,opacity] ease-in-out duration-200 ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      onMouseLeave={handleShowChange(false)}
      onMouseEnter={handleShowChange(true)}
    >
      {showMenu ? (
        <ul id={menuId} role='menu' className='px-2'>
          {React.Children.map(children, (child) => (
            <li role='menuitem' className='my-2'>
              {child}
            </li>
          ))}
        </ul>
      ) : (
        <button onClick={handleShowChange(true)} aria-haspopup='menu' aria-expanded={show} aria-controls={menuId} aria-label='Open navigation menu'>
          <HamburgerMenu size='2rem' animate={show} />
        </button>
      )}
    </nav>
  );
};

export default DropDownNavButton;
