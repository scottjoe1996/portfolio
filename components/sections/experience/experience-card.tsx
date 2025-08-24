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
  const durationText = createDurationText(duration);

  return (
    <div className="bg-foreground flex flex-1 flex-row gap-4 rounded-md p-3 text-zinc-50 shadow-md shadow-zinc-600/30">
      <span className="xs:inline hidden w-30 text-sm leading-6 font-semibold text-nowrap text-zinc-300 md:hidden">
        {durationText}
      </span>
      <div>
        <div className="mb-2">
          <p className="xs:hidden inline text-sm font-semibold text-zinc-300">
            {durationText}
          </p>
          <p>{role}</p>
        </div>
        <p className="mb-2 text-sm text-zinc-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skillsGained.map((skill) => (
            <div
              key={skill}
              className="border-primary rounded-2xl border-1 bg-emerald-900 px-2 py-1 text-sm text-nowrap text-emerald-100"
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
