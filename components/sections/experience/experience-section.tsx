import React from "react";
import SectionHeading from "../common/section-heading";
import ExperienceCard, { ExperienceCardProps } from "./experience-card";

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
      <ul className="flex flex-col justify-between gap-2">
        {EXPERIENCE_CARD_PROPS.map((props, index) => (
          <li
            key={props.role}
            className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-4`}
          >
            <ExperienceCard {...props} />
            <div className="flex-[1 1 0] hidden w-1/2 md:inline"></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
