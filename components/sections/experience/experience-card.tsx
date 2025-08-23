import React from "react";
import { createDurationText, Duration } from "./duration";

export interface ExperienceCardProps {
  role: string;
  description: string;
  skillsGained: string[];
  duration: Duration;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  description,
  skillsGained,
  duration,
}) => {
  return (
    <div className="bg-foreground flex flex-1 flex-row gap-4 rounded-md p-3 text-zinc-50 shadow-md shadow-zinc-600/30">
      <span className="inline w-30 text-sm leading-6 font-semibold text-nowrap md:hidden">
        {createDurationText(duration)}
      </span>
      <div>
        <p>{role}</p>
        <p className="mb-2 text-sm text-zinc-400">{description}</p>
        <div className="flex gap-2">
          {skillsGained.map((skill) => (
            <div
              key={skill}
              className="border-primary rounded-2xl border-2 bg-emerald-950 px-2 py-1 text-sm font-semibold text-nowrap"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
