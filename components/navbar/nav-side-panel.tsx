import React from "react";

interface NavSidePanelProps {
  show: boolean;
}

const NavSidePanel: React.FC<React.PropsWithChildren<NavSidePanelProps>> = ({
  children,
  show,
}) => {
  return (
    show && (
      <div className="no-doc-scroll absolute top-0 z-1 h-screen w-screen bg-zinc-900/30">
        <nav className="bg-foreground ml-auto h-full w-3/4">{children}</nav>
      </div>
    )
  );
};

export default NavSidePanel;
