import { motion } from "motion/react";
import React from "react";
import HamburgerMenu from "../icons/hamburger-menu/hamburger-menu";

interface DropDownNavButtonProps {
  show: boolean;
}

const DropDownNavButton: React.FC<
  React.PropsWithChildren<DropDownNavButtonProps>
> = ({ children, show }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [size, setSize] = React.useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const menuContainerRef = React.useRef<HTMLDivElement>(null);
  const menuId = "dropdown-nav-menu";
  const hidden = !show;

  const handleShowChange = React.useCallback((open: boolean) => {
    return () => setShowMenu(open);
  }, []);

  const handleMenuItemBlur = React.useCallback(
    (event: React.FocusEvent<HTMLLIElement>) => {
      const menuElement = document.getElementById(menuId);

      if (menuElement && menuElement.contains(event.relatedTarget)) {
        return;
      }
      setShowMenu(false);
    },
    []
  );

  const handleButtonClick = React.useCallback(() => {
    setShowMenu(true);

    setTimeout(() => {
      const menuElement = document.getElementById(menuId);

      if (menuElement) {
        const firstItemAnchor = menuElement.querySelector(
          '[role="menuitem"] a'
        ) as HTMLElement | null;
        firstItemAnchor?.focus();
      }
    }, 10);
  }, []);

  React.useEffect(() => {
    if (menuContainerRef.current) {
      setSize({
        width: menuContainerRef.current.clientWidth,
        height: menuContainerRef.current.clientHeight,
      });
    }
  }, [showMenu]);

  return (
    <nav
      aria-label="Support Nav Menu"
      inert={hidden}
      className={`leading-none fixed top-0 right-4 ml-auto bg-stone-800 rounded-b-md drop-shadow-neutral-700 drop-shadow-md transition-[translate,opacity] ease-in-out duration-200 overflow-hidden ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      onMouseLeave={handleShowChange(false)}
      onMouseEnter={handleShowChange(true)}
    >
      <motion.div
        className="flex items-center justify-center"
        variants={{
          open: {
            width: size.height,
            height: size.width,
            transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
          },
          closed: {
            width: size.height,
            height: size.width,
          },
        }}
        animate={showMenu ? "open" : "closed"}
      >
        <div ref={menuContainerRef} className="p-2">
          {showMenu ? (
            <ul id={menuId} role="menu">
              {React.Children.map(children, (child) => (
                <li
                  role="menuitem"
                  onFocus={handleShowChange(true)}
                  onBlur={handleMenuItemBlur}
                  className="my-3"
                >
                  {child}
                </li>
              ))}
            </ul>
          ) : (
            <button
              onClick={handleButtonClick}
              aria-haspopup="menu"
              aria-expanded={show}
              aria-controls={menuId}
              aria-label="Open navigation menu"
            >
              <HamburgerMenu size="2rem" animate={show} />
            </button>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default DropDownNavButton;
