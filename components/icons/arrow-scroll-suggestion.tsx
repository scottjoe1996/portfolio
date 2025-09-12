"use client";

import React from "react";
import { Icon } from "./icon";

const ArrowScrollSuggestion: React.FC<Icon> = ({ size = "1rem" }) => {
  const [show, setShow] = React.useState(false);
  const [delayedShowTimeoutId, setDelayedShowTimeoutId] =
    React.useState<NodeJS.Timeout>();

  const delayedShow = React.useCallback(
    () =>
      setTimeout(() => {
        setShow(true);
      }, 1500),
    [],
  );

  const handleScroll = React.useCallback(() => {
    const isAtTopOfPage = window.scrollY === 0;
    clearTimeout(delayedShowTimeoutId);

    if (isAtTopOfPage) {
      setDelayedShowTimeoutId(delayedShow());
      return;
    }

    setShow(false);
  }, [delayedShow, delayedShowTimeoutId]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  React.useEffect(() => {
    const timeoutId = delayedShow();
    setDelayedShowTimeoutId(timeoutId);
  }, [delayedShow]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="arrow-title arrow-description"
      viewBox="0 0 210 210"
      height={size}
      className={`container-shadow absolute hidden rounded-full fill-white transition-[opacity,top] duration-1000 ease-in-out lg:inline ${show ? "top-[82vh] opacity-100" : "top-[81vh] opacity-0"}`}
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
        <polyline className="arrows" points="60 70 105 100 150 70">
          <animate
            id="arrow1"
            attributeName="opacity"
            values="1;0.5;1"
            dur="1.35s"
            begin="0s;arrow3.end-0.5"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines=".42,0,.58,1; .42,0,.58,1"
          />
        </polyline>
        <polyline className="arrows" points="60 100 105 130 150 100">
          <animate
            id="arrow2"
            attributeName="opacity"
            values="1;0.5;1"
            dur="1.35s"
            begin="arrow1.end-0.5"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines=".42,0,.58,1; .42,0,.58,1"
          />
        </polyline>
        <polyline className="arrows" points="60 130 105 160 150 130">
          <animate
            id="arrow3"
            attributeName="opacity"
            values="1;0.5;1"
            dur="1.35s"
            begin="arrow2.end-0.5"
            calcMode="spline"
            keyTimes="0; 0.5; 1"
            keySplines=".42,0,.58,1; .42,0,.58,1"
          />
        </polyline>
      </g>
    </svg>
  );
};

export default ArrowScrollSuggestion;
