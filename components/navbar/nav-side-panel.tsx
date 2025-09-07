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
  return (
    show && (
      <div className="no-doc-scroll absolute top-0 z-1 h-screen w-screen bg-zinc-900/30">
        <nav className="bg-foreground ml-auto h-full w-xs p-4">
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="mb-8 ml-auto block cursor-pointer"
          >
            <Cross size="1rem" />
          </button>
          {children}
        </nav>
      </div>
    )
  );
};

export default NavSidePanel;
