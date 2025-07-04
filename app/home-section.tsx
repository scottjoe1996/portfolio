"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const HomeSection: React.FC = () => {
  return (
    <section className="flex w-full flex-row flex-wrap-reverse content-center items-center justify-center sm:h-[80dvh] lg:flex-nowrap">
      <div className="lg:w-4xl">
        <p className="mb-1 text-xl">Hi, my name is</p>
        <h1 className="mb-2 text-7xl">JOSEPH SCOTT</h1>
        <p className="min-h-40 text-4xl text-pretty">
          I am a web developer that{" "}
          <Typewriter
            component={"span"}
            onInit={(typewriter) => {
              typewriter
                .typeString("builds with purpose.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("meets deadlines.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("exceeds expectations.")
                .start();
            }}
            options={{
              delay: 35,
              wrapperClassName: "text-[#03A678] font-bold",
              cursorClassName: "Typewriter__cursor text-[#03A678] font-bold",
            }}
          />
        </p>
      </div>
      <div className="min-w-xs shrink basis-xl p-10">
        <div className="aspect-square size-full rotate-10 bg-[#03A678]" />
      </div>
    </section>
  );
};

export default HomeSection;
