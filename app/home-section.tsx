"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const HomeSection: React.FC = () => {
  return (
    <section className="flex h-[80dvh] w-full flex-col items-center justify-center">
      <div className="w-3/5">
        <p className="mb-1 text-xl">Hi, my name is</p>
        <h1 className="mb-2 text-7xl">JOSEPH SCOTT</h1>
        <p className="text-5xl">
          I design websites that{" "}
          <Typewriter
            component={"span"}
            onInit={(typewriter) => {
              typewriter
                .typeString("users love.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("are accessible.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("are fit for purpose.")
                .start();
            }}
            options={{ delay: 50 }}
          />
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
