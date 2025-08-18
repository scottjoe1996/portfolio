import React from "react";

interface ExperienceCardProps {
  role: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  description,
}) => {
  return (
    <div className="bg-foreground w-full rounded-md p-3 text-zinc-50 shadow-md shadow-zinc-600/30">
      <p>{role}</p>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  );
};

export default ExperienceCard;
