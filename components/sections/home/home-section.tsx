"use client";

import React from "react";
import Image from "next/image";

import Button from "@/components/button";
import Resume from "@/components/icons/resume";

import TextDrop from "./text-drop";

const HomeSection: React.FC = () => {
  const handleResumeClick = React.useCallback(() => {
    window.open("/joseph-scott-cv.pdf", "_blank");
  }, []);

  return (
    <section className="flex min-h-[calc(100vh-96px)] w-full flex-row flex-wrap-reverse content-center items-center justify-center gap-6 px-4 pt-5 pb-30">
      <div className="max-w-4xl min-w-xs shrink grow basis-md">
        <p className="mb-1 text-xl">Hi, my name is</p>
        <h1 className="mb-2 text-7xl">JOSEPH SCOTT</h1>
        <div className="mb-4 flex flex-wrap text-4xl">
          <span>I am a web developer that&nbsp;</span>
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
      <div className="max-w-2xl min-w-sm shrink grow basis-md">
        <Image
          src="/profile-picture.png"
          alt="Picture of Joseph Scott"
          priority={true}
          width={1024}
          height={1024}
        />
      </div>
    </section>
  );
};

export default HomeSection;
