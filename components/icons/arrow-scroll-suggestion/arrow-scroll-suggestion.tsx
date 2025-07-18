"use client";

import React from "react";

interface ArrowScrollSuggestionProps {
  size: string;
}

const ArrowScrollSuggestion: React.FC<ArrowScrollSuggestionProps> = ({
  size,
}) => {
  const [show, setShow] = React.useState(false);
  const [userHasScrolled, setUserHasScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setShow(false);
        setUserHasScrolled(true);
      },
      { once: true },
    );
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (!userHasScrolled) {
        setShow(true);
      }
    }, 1500);
  }, [userHasScrolled]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="arrow-title arrow-description"
      viewBox="0 0 210 210"
      height={size}
      className={`container-shadow absolute hidden rounded-full fill-white transition-[opacity,top] duration-1000 ease-in-out lg:inline ${show ? "top-[80vh] opacity-100" : "top-[79vh] opacity-0"}`}
    >
      <title id="arrow-title">Scroll Suggestion Arrow</title>
      <desc id="arrow-description">
        An arrow suggesting that there is more content to be seen upon
        scrolling.
      </desc>
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
        >
          <animate
            attributeName="opacity"
            values="1;0.25;1"
            dur="2s"
            repeatCount="indefinite"
            begin="0s"
          />
        </polyline>
        <polyline
          id="arrow-middle"
          className="arrows"
          points="60 100 105 130 150 100"
        >
          <animate
            attributeName="opacity"
            values="1;0.25;1"
            dur="2s"
            repeatCount="indefinite"
            begin="0.25s"
          />
        </polyline>
        <polyline
          id="arrow-top"
          className="arrows"
          points="60 130 105 160 150 130"
        >
          <animate
            attributeName="opacity"
            values="1;0.25;1"
            dur="2s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </polyline>
      </g>
    </svg>
  );
};

export default ArrowScrollSuggestion;
