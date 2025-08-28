import React from "react";

import SectionWrapper from "../section-wrapper";

const TOTAL_SKILLS = [
  "Typescript",
  "NodeJS",
  "GraphQL",
  "React",
  "HTML & CSS",
  "Storybook",
  "Playwright",
  "UI & UX Design",
  "CircleCI",
  "AWS",
  "Agile",
  "User Research",
];

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      sectionClasses={["bg-zinc-800", "text-zinc-50", "min-h-screen"]}
    >
      <div className="flex justify-between">
        <div className="w-full">
          <p className="mb-6">
            I&apos;m a passionate full stack developer with an enthusiasm for
            crafting{" "}
            <b className="text-emerald-500">exceptional digital experiences.</b>{" "}
            I have professional experience working with Java, TypeScript, React
            and Angular; all being used in tandem with AWS to build scalable and
            secure cloud solutions.
          </p>
          <p>
            Dedicated to creating intuitive and visually appealing user
            interfaces. My UX design skills allow me to bridge the gap between
            functionality and aesthetics. My design decisions are always{" "}
            <b className="text-emerald-500">powered by data</b>, ensuring that
            users get the best experience possible.
          </p>
          <p className="mt-6">
            In an ever evolving industry, I believe in the{" "}
            <b className="text-emerald-500">power of collaboration</b> and
            continuous learning. Together, we can create solutions that make a
            positive impact on the world and if you share this vision, I would
            love to connect and explore how we can work together.
          </p>
        </div>
        <div className="hidden w-full flex-wrap content-center items-center justify-center gap-2 md:flex">
          {TOTAL_SKILLS.map((skill) => (
            <div
              key={skill}
              className="border-primary rounded-md border-1 bg-emerald-900 px-4 py-1 text-nowrap text-emerald-100"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
