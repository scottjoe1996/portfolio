import React from "react";

const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
  return <h2 className="mb-6 text-5xl font-bold">{title}</h2>;
};

export default SectionHeading;
