import React from 'react';
import HamburgerMenu from '../icons/hamburger-menu/hamburger-menu';

interface DropDownNavButtonProps {
  show: boolean;
}

const DropDownNavButton: React.FC<React.PropsWithChildren<DropDownNavButtonProps>> = ({ children, show }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const menuId = 'dropdown-nav-menu';
  const hidden = !show;

  const handleShowChange = React.useCallback((open: boolean) => {
    return () => setShowMenu(open);
  }, []);

  const handleMenuItemBlur = React.useCallback((event: React.FocusEvent<HTMLLIElement>) => {
    const menuElement = document.getElementById(menuId);

    if (menuElement && menuElement.contains(event.relatedTarget)) {
      return;
    }
    setShowMenu(false);
  }, []);

  const handleButtonClick = React.useCallback(() => {
    setShowMenu(true);

    setTimeout(() => {
      const menuElement = document.getElementById(menuId);

      if (menuElement) {
        const firstItemAnchor = menuElement.querySelector('[role="menuitem"] a') as HTMLElement | null;
        firstItemAnchor?.focus();
      }
    }, 10);
  }, []);

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
            <li role='menuitem' className='my-2' onFocus={handleShowChange(true)} onBlur={handleMenuItemBlur}>
              {child}
            </li>
          ))}
        </ul>
      ) : (
        <button onClick={handleButtonClick} aria-haspopup='menu' aria-expanded={show} aria-controls={menuId} aria-label='Open navigation menu'>
          <HamburgerMenu size='2rem' animate={show} />
        </button>
      )}
    </nav>
  );
};

export default DropDownNavButton;
