import React from "react";

const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
  return <h2 className="mb-10 text-6xl">{title}</h2>;
};

export default SectionHeading;
