import React from "react";
import Cross from "../icons/cross";

interface NavSidePanelProps {
  show: boolean;
  onClose: () => void;
}

const NavSidePanel: React.FC<React.PropsWithChildren<NavSidePanelProps>> = ({
  children,
  show,
  onClose,
}) => {
  const sidePanelId = "nav-side-panel";

  const handleMenuItemBlur = React.useCallback(
    (event: React.FocusEvent<HTMLElement>) => {
      const sidePanel = document.getElementById(sidePanelId);

      if (sidePanel && sidePanel.contains(event.relatedTarget)) {
        return;
      }
      onClose();
    },
    [onClose],
  );

  return (
    <div
      inert={!show}
      className={`absolute top-0 left-0 z-2 transition-opacity duration-500 ${show ? "no-doc-scroll opacity-100" : "opacity-0"} h-screen w-screen bg-zinc-900/30`}
    >
      <nav
        id={sidePanelId}
        className={`bg-foreground relative ml-auto h-full w-xs transition-transform duration-200 ${show ? "translate-x-0" : "translate-x-full"} p-4`}
      >
        <button
          onClick={onClose}
          onBlur={handleMenuItemBlur}
          aria-label="Close navigation menu"
          className="mb-8 ml-auto block cursor-pointer"
        >
          <Cross size="1rem" />
        </button>
        <ul role="menu">
          {React.Children.map(children, (child) => (
            <li role="menuitem" onBlur={handleMenuItemBlur} className="p-2">
              {child}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavSidePanel;
