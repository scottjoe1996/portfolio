import React from "react";
import SectionHeading from "../common/section-heading";
import ExperienceCard from "./experience-card";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="mb-4 w-full max-w-4xl">
      <SectionHeading title="Experience" />
      <div className="flex justify-between gap-2">
        <ExperienceCard
          role="Fullstack Software Consultant"
          description="Wow would you look at that I've got experience!"
        />
        <ExperienceCard
          role="Senior Software Engineer"
          description="Wow would you look at that I've got experience!"
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
