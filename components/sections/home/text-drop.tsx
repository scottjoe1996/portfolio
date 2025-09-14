import React from "react";

import { motion } from "motion/react";

interface TextDropProps {
  texts: string[];
  className?: string;
}

const ID_PREFIX = "drop-text";

const TextDrop: React.FC<TextDropProps> = ({ texts, className }) => {
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [containerHeight, setContainerHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    let largestWidth = 0;
    let largestHeight = 0;

    texts.forEach((_text, index) => {
      const element = document.getElementById(`${ID_PREFIX}-${index}`);

      if (element) {
        if (element.offsetWidth > largestWidth) {
          largestWidth = element.offsetWidth;
        }
        if (element.offsetHeight > largestHeight) {
          largestHeight = element.offsetHeight;
        }
      }
    });
    setContainerWidth(largestWidth);
    setContainerHeight(largestHeight);
  }, [texts]);

  return (
    <span
      className={`${className} relative inline-grid`}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {texts.map((text, index) => {
        const id = `${ID_PREFIX}-${index}`;
        return (
          <motion.span
            id={id}
            key={id}
            className="col-start-1 row-start-1 text-nowrap"
          >
            &nbsp;{text}
          </motion.span>
        );
      })}
    </span>
  );
};

export default TextDrop;
