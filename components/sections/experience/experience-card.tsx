import React from "react";
import SkillChip from "@/components/chips/skill-chip";

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
    <div className="container-shadow flex flex-1 flex-row gap-4 rounded-md bg-zinc-900 p-3 text-zinc-50">
      <span className="xs:inline hidden min-w-28 text-sm leading-6 font-semibold text-nowrap text-zinc-300 md:hidden">
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
            <SkillChip key={skill} skill={skill} size="regular" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
