import React from "react";
import SectionHeading from "../common/section-heading";
import ExperienceCard, { ExperienceCardProps } from "./experience-card";
import { createDurationText } from "./duration";

const EXPERIENCE_CARD_PROPS: ExperienceCardProps[] = [
  {
    role: "Smartnumbers - Senior Software Developer",
    description:
      "Developed a range of frontend and backend applications that empowered customers to manage their call delivery and fraud prevention solutions through a self service platform. I architectured high-quality, scalable solutions across multiple development teams and by collaborating with design and product I ensured that these features were fit for purpose and met our user's needs.",
    skillsGained: [
      "Typescript",
      "NodeJS",
      "GraphQL",
      "React",
      "Storybook",
      "Playwright",
      "CircleCI",
      "AWS",
    ],
    duration: { startYear: 2020 },
  },
  {
    role: "KCOM - Fullstack Software Consultant",
    description:
      "Created a custom design framework for the communications provider KCOM, speaking directly with high level stakeholders on the importance of user centered design, I helped influence KCOM to commit to the project and send stakeholders to take part in our workshops within a week.",
    skillsGained: [
      "Typescript",
      "HTML & SCSS",
      "StencilJS",
      "Storybook",
      "Puppeteer",
      "UI & UX Design",
    ],
    duration: { startYear: 2019, endYear: 2020 },
  },
  {
    role: "Seed Software - Fullstack Software Consultant",
    description:
      "Led the transformation of a development team building a nationally used fire service risk management system. Improved deployment reliability by raising test coverage from 5% to 78%, and eliminated continuous delivery failure within two sprints.",
    skillsGained: [
      "C#",
      "ASP.NET",
      "Razor",
      "HTML & CSS",
      "Javascript",
      "Team Management",
      "Agile",
    ],
    duration: { startYear: 2019, endYear: 2020 },
  },
  {
    role: "Lampada - Junior Software Consultant",
    description:
      "I spent a year in a postgraduate academy learning the fundamentals of software development and the product life cycle. From discovery to release, I gained hands on experience developing an event planning solutions for the University of Hull.",
    skillsGained: [
      "Typescript",
      "Angular",
      "Java",
      "Dropwizard",
      "REST",
      "TravisCI",
      "AWS",
      "Agile",
      "User Research",
    ],
    duration: { startYear: 2018, endYear: 2019 },
  },
  {
    role: "University of Hull - Masters of Mathematics",
    description:
      "Researched and developed computational methods which I applied to the study of dark energy through analysis of Type Ia supernova data. I designed and implemented scalable mathematical models to solve large linear systems, validated results against observational datasets and collaborated with other students to ensure my findings were as precise as possible.",
    skillsGained: [
      "Critical Thinking",
      "Analysis",
      "Problem Solving",
      "Logical Reasoning",
      "Communication",
      "Data Interpretation",
    ],
    duration: { startYear: 2014, endYear: 2018 },
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
              className={`flex ${isLeftSide ? "flex-row" : "flex-row-reverse"} items-center gap-6`}
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
        <div className="absolute left-1/2 -z-1 hidden h-full w-1 translate-x-[-50%] bg-zinc-300 md:block"></div>
      </ul>
    </section>
  );
};

export default ExperienceSection;
