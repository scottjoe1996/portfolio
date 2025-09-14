import React from "react";

import { motion } from "motion/react";

interface TextDropProps {
  texts: string[];
  className?: string;
}

const TextDrop: React.FC<TextDropProps> = ({ texts, className }) => {
  return (
    <span className={`${className} relative inline-grid`}>
      {texts.map((text, index) => (
        <motion.span
          key={index}
          className="col-start-1 row-start-1 text-nowrap"
        >
          &nbsp;{text}
        </motion.span>
      ))}
    </span>
  );
};

export default TextDrop;
