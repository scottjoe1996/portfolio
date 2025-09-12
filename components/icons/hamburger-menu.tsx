import React from "react";

import { Icon } from "./icon";

interface HamburgerMenuProps extends Icon {
  open?: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  size = "1rem",
  className,
  open = true,
}) => {
  const animationClassNames = `transition-[width] duration-300 ${open ? "w-full" : "w-1/5"}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170.08 184.25"
      height={size}
      className={className}
    >
      <g id="hamburger-menu" className="fill-zinc-100">
        <g id="bottom-bar">
          <rect
            x="0"
            y="0"
            height="42.52"
            rx="20"
            ry="20"
            className={`${animationClassNames} delay-75`}
          />
        </g>
        <g id="middle-bar">
          <rect
            x="0"
            y="70.87"
            height="42.52"
            rx="20"
            ry="20"
            className={`${animationClassNames} delay-125`}
          />
        </g>
        <g id="top-bar">
          <rect
            x="0"
            y="141.73"
            height="42.52"
            rx="20"
            ry="20"
            className={`${animationClassNames} delay-175`}
          />
        </g>
      </g>
    </svg>
  );
};

export default HamburgerMenu;
