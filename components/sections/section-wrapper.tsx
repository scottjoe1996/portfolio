import React from "react";
import SectionHeading from "./common/section-heading";

interface SectionWrapperProps extends React.PropsWithChildren {
  id: string;
  title: string;
  sectionClasses?: string[];
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  sectionClasses,
  children,
}) => {
  return (
    <section
      id={id}
      className={`flex w-full items-center justify-center px-4 py-30 ${sectionClasses?.join(" ")}`}
    >
      <div className="mb-4 w-full max-w-7xl">
        <SectionHeading title={title} />
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
