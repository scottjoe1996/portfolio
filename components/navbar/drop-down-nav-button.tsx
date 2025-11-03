import { motion } from "motion/react";
import React from "react";
import { isMobile } from "react-device-detect";

import HamburgerMenu from "../icons/hamburger-menu";
import { NavLinkProps } from "./nav-link";

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

  const handleLinkBlur = React.useCallback(
    (event: React.FocusEvent<HTMLAnchorElement>) => {
      const menuElement = document.getElementById(menuId);

      if (menuElement && !menuElement.contains(event.relatedTarget)) {
        setShowMenu(false);
      }
    },
    [],
  );

  const handleLinkClick = React.useCallback(() => {
    if (isMobile) {
      setShowMenu(false);
    }
  }, []);

  const handleButtonClick = React.useCallback(() => {
    setShowMenu(true);

    setTimeout(() => {
      const menuElement = document.getElementById(menuId);

      if (menuElement && !isMobile) {
        const firstItemAnchor = menuElement.querySelector(
          '[role="menuitem"] a',
        ) as HTMLElement | null;
        firstItemAnchor?.focus();
      }
    }, 10);
  }, []);

  React.useLayoutEffect(() => {
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
      className={`container-shadow bg-foreground fixed top-0 right-4 z-1 ml-auto overflow-hidden rounded-b-md leading-none transition-[translate,opacity] duration-200 ease-in-out ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      onMouseLeave={handleShowChange(false)}
      onMouseEnter={handleShowChange(true)}
    >
      <motion.div
        className="box-content flex items-center justify-center p-2.5"
        variants={{
          open: {
            width: size.width,
            height: size.height,
            transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
          },
          closed: {
            width: size.width,
            height: size.height,
          },
        }}
        animate={showMenu ? "open" : "closed"}
      >
        <div ref={menuContainerRef}>
          {showMenu ? (
            <ul
              id={menuId}
              role="menu"
              className="px-2 *:not-first:not-last:my-2"
            >
              {React.Children.map(children, (child) => {
                if (!React.isValidElement<NavLinkProps>(child)) {
                  return null;
                }

                const clonedChild = React.cloneElement(child, {
                  onBlur: handleLinkBlur,
                  onClick: handleLinkClick,
                });

                return (
                  <li role="menuitem" className="w-full leading-5">
                    {clonedChild}
                  </li>
                );
              })}
            </ul>
          ) : (
            <button
              onClick={handleButtonClick}
              aria-haspopup="menu"
              aria-expanded={show}
              aria-controls={menuId}
              aria-label="Open navigation menu"
            >
              <HamburgerMenu size="2rem" open={show} />
            </button>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default DropDownNavButton;
