"use client";

import React from "react";

interface ArrowScrollSuggestionProps {
  size: string;
}

const ArrowScrollSuggestion: React.FC<ArrowScrollSuggestionProps> = ({
  size,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210 210"
      height={size}
      className="container-shadow absolute top-[80vh] hidden rounded-full fill-white lg:inline"
    >
      <defs>
        <style>
          {`.arrows {
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 10px;
        fill: none;
        stroke: #000;
      }`}
        </style>
      </defs>
      <g id="arrow-scroll-suggestion">
        <circle id="container" cx="105" cy="105" r="100" />
        <polyline
          id="arrow-bottom"
          className="arrows"
          points="60 70 105 100 150 70"
        />
        <polyline
          id="arrow-middle"
          className="arrows"
          points="60 100 105 130 150 100"
        />
        <polyline
          id="arrow-top"
          className="arrows"
          points="60 130 105 160 150 130"
        />
      </g>
    </svg>
  );
};

export default ArrowScrollSuggestion;
