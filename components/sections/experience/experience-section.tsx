import React from "react";
import SectionHeading from "../common/section-heading";
import ExperienceCard from "./experience-card";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="mb-4 w-full max-w-7xl">
      <SectionHeading title="Experience" />
      <div className="flex flex-wrap justify-between gap-2">
        <ExperienceCard
          role="Senior Software Engineer"
          description="Wow would you look at that I've got experience!"
          skillsGained={["Typescript", "AWS", "React", "Material UI"]}
          duration={{ startYear: 2020 }}
        />
        <ExperienceCard
          role="Fullstack Software Consultant"
          description="Wow would you look at that I've got experience!"
          skillsGained={["Typescript", "AWS", "Angular", "Java"]}
          duration={{ startYear: 2018, endYear: 2019 }}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
