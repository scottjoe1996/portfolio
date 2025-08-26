import React from "react";
import SectionHeading from "../common/section-heading";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="flex w-full items-center justify-center bg-zinc-700 p-4"
    >
      <div className="mb-4 w-full max-w-7xl">
        <SectionHeading title="About Me" />
      </div>
    </section>
  );
};

export default AboutSection;
