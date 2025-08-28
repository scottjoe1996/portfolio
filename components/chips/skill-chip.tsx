import Link from "next/link";
import React from "react";

interface SkillChipProps {
  skill: string;
  size?: "regular" | "large";
}

const SkillChip: React.FC<SkillChipProps> = ({ skill, size = "regular" }) => {
  return (
    <div
      className={`border-primary rounded-md border-1 bg-emerald-900 py-1 text-nowrap text-emerald-100 ${size === "regular" ? "px-2 text-sm" : "px-4"}`}
    >
      {skill}
    </div>
  );
};

export default SkillChip;
