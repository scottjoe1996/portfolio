import React from 'react';

interface HamburgerMenuProps {
  size: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ size }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 170.08 184.25' height={size}>
    <g id='hamburger-menu' fill='white'>
      <g id='bottom-bar'>
        <rect x='0' y='0' width='170.08' height='42.52' rx='21.26' ry='21.26' />
      </g>
      <g id='middle-bar'>
        <rect x='0' y='70.87' width='170.08' height='42.52' rx='21.26' ry='21.26' />
      </g>
      <g id='top-bar'>
        <rect x='0' y='141.73' width='170.08' height='42.52' rx='21.26' ry='21.26' />
      </g>
    </g>
  </svg>
);

export default HamburgerMenu;
