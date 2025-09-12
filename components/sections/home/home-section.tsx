"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import Button from "@/components/button";
import Resume from "@/components/icons/resume";

import styles from "./home-section.module.css";

const HomeSection: React.FC = () => {
  const handleResumeClick = React.useCallback(() => {
    window.open("/joseph-scott-cv.pdf", "_blank");
  }, []);

  return (
    <section className="flex min-h-[calc(100vh-96px)] w-full flex-row flex-wrap-reverse content-center items-center justify-center px-4 py-30">
      <div className="max-w-4xl min-w-xs shrink grow basis-md">
        <p className="mb-1 text-xl">Hi, my name is</p>
        <h1 className="mb-2 text-7xl">JOSEPH SCOTT</h1>
        <p className="min-h-40 text-4xl text-pretty">
          I am a web developer that
          <Typewriter
            component={"span"}
            onInit={(typewriter) => {
              typewriter
                .typeString(" builds with purpose.")
                .pauseFor(1000)
                .deleteAll()
                .typeString(" meets deadlines.")
                .pauseFor(1000)
                .deleteAll()
                .typeString(" exceeds expectations.")
                .start();
            }}
            options={{
              delay: 35,
              deleteSpeed: 35,
              wrapperClassName: "text-primary font-bold",
              cursorClassName: `text-primary font-bold ${styles.caret} font-sans`,
            }}
          />
        </p>
        <Button onClick={handleResumeClick} icon={Resume} size="large">
          Resume
        </Button>
      </div>
      <div className="max-w-xl min-w-2xs shrink grow basis-md p-10">
        <div className="bg-primary aspect-square size-full rotate-10" />
      </div>
    </section>
  );
};

export default HomeSection;
