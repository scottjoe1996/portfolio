"use client";

import React from "react";
import Image from "next/image";

import { motion, useAnimation } from "motion/react";

const animationVariants = {
  visible: { opacity: 1, translateY: 0 },
  hidden: { opacity: 0, translateY: -10 },
};

export const ProfilePicture: React.FC = () => {
  const [loaded, setLoaded] = React.useState(false);
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded]);

  return (
    <motion.div
      initial={"hidden"}
      animate={animationControls}
      variants={animationVariants}
      transition={{ duration: 0.6 }}
    >
      <Image
        src="/profile-picture.png"
        alt="Picture of Joseph Scott"
        priority={true}
        width={1024}
        height={1024}
        onLoad={() => setLoaded(true)}
      />
    </motion.div>
  );
};

export default ProfilePicture;
