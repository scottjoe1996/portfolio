import React from "react";

import { AnimatePresence, motion } from "motion/react";

interface TextDropProps {
  texts: string[];
  className?: string;
}

const TextDrop: React.FC<TextDropProps> = ({ texts, className }) => {
  const [showTextIndex, setShowTextIndex] = React.useState(0);

  React.useEffect(() => {
    if (showTextIndex === texts.length - 1) {
      return;
    }
    const interval = setInterval(() => {
      setShowTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length, showTextIndex]);

  return (
    <span className={`${className} relative inline-grid`}>
      {texts.map((text, index) => {
        return (
          <AnimatePresence key={index}>
            {showTextIndex === index ? (
              <motion.span
                className="col-start-1 row-start-1 text-nowrap"
                initial={{ y: "-30%", opacity: 0 }}
                animate={{
                  y: "0%",
                  opacity: 1,
                }}
                exit={{ y: "50%", opacity: 0 }}
                transition={{
                  y: { type: "spring", duration: 0.5 },
                  opacity: { duration: 0.3 },
                }}
              >
                {text}
              </motion.span>
            ) : null}
          </AnimatePresence>
        );
      })}
    </span>
  );
};

export default TextDrop;
