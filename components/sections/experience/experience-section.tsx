import React from "react";
import SectionHeading from "../common/section-heading";
import ExperienceCard, { ExperienceCardProps } from "./experience-card";
import { createDurationText } from "./duration";

const EXPERIENCE_CARD_PROPS: ExperienceCardProps[] = [
  {
    role: "Senior Software Engineer",
    description: "Wow would you look at that I've got experience!",
    skillsGained: ["Typescript", "AWS", "React", "Material UI"],
    duration: { startYear: 2020 },
  },
  {
    role: "Fullstack Software Consultant",
    description: "Wow would you look at that I've got experience!",
    skillsGained: ["Typescript", "AWS", "Angular", "Java"],
    duration: { startYear: 2018, endYear: 2019 },
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="mb-4 w-full max-w-7xl p-4">
      <SectionHeading title="Experience" />
      <ul className="relative flex flex-col justify-between gap-4 md:gap-16">
        {EXPERIENCE_CARD_PROPS.map((props, index) => {
          const isLeftSide = index % 2 === 0;

          return (
            <li
              key={props.role}
              className={`flex ${isLeftSide ? "flex-row" : "flex-row-reverse"} z-1 items-center gap-8`}
            >
              <div className="flex-1">
                <ExperienceCard {...props} />
              </div>
              <div className="bg-primary border-background hidden size-5 rounded-full border-4 md:inline" />
              <div className="hidden flex-1 md:inline">
                <p
                  className={`${isLeftSide ? "text-left" : "text-right"} text-sm font-semibold text-zinc-500`}
                >
                  {createDurationText(props.duration)}
                </p>
              </div>
            </li>
          );
        })}
        <div className="absolute left-1/2 hidden h-full w-1 translate-x-[-50%] bg-zinc-300 md:block"></div>
      </ul>
    </section>
  );
};

export default ExperienceSection;
