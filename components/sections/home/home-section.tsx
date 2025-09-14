"use client";

import React from "react";

import Button from "@/components/button";
import Resume from "@/components/icons/resume";

import TextDrop from "./text-drop";

const HomeSection: React.FC = () => {
  const handleResumeClick = React.useCallback(() => {
    window.open("/joseph-scott-cv.pdf", "_blank");
  }, []);

  return (
    <section className="flex min-h-[calc(100vh-96px)] w-full flex-row flex-wrap-reverse content-center items-center justify-center px-4 pt-15 pb-30">
      <div className="max-w-4xl min-w-xs shrink grow basis-md">
        <p className="mb-1 text-xl">Hi, my name is</p>
        <h1 className="mb-2 text-7xl">JOSEPH SCOTT</h1>
        <div className="flex flex-wrap text-4xl">
          <span>I am a web developer that</span>
          <TextDrop
            className="text-primary font-bold"
            texts={[
              "builds with purpose",
              "meets deadlines",
              "exceeds expections",
            ]}
          />
        </div>
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
