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
    <div
      inert={!show}
      className={`absolute top-0 left-0 z-2 transition-opacity duration-500 ${show ? "no-doc-scroll opacity-100" : "opacity-0"} h-screen w-screen bg-zinc-900/30`}
    >
      <nav
        className={`bg-foreground relative ml-auto h-full w-xs transition-transform duration-200 ${show ? "translate-x-0" : "translate-x-full"} p-4`}
      >
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
  );
};

export default NavSidePanel;
