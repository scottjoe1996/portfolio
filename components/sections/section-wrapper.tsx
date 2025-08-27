import React from "react";
import SectionHeading from "./common/section-heading";

interface SectionWrapperProps extends React.PropsWithChildren {
  id: string;
  title: string;
  bgColor?: string;
  textColor?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  bgColor,
  textColor,
  children,
}) => {
  return (
    <section
      id={id}
      className={`flex w-full items-center justify-center p-4 ${bgColor} ${textColor}`}
    >
      <div className="mb-4 w-full max-w-7xl">
        <SectionHeading title={title} />
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
