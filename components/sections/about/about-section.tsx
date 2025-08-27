import React from "react";

import SectionWrapper from "../section-wrapper";

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      bgColor="bg-foreground"
      textColor="text-zinc-50"
    >
      <div className="flex justify-between">
        <div className="w-full">
          <p className="mb-6">
            I'm a passionate full stack developer with an enthusiasm for
            crafting <b>exceptional digital experiences.</b> I have professional
            experience working with Java, TypeScript, React and Angular; all
            being used in tandem with AWS to build scalable and secure cloud
            solutions.
          </p>
          <p>
            Dedicated to creating intuitive and visually appealing user
            interfaces. My UX design skills allow me to bridge the gap between
            functionality and aesthetics. My design decisions are always
            <b>powered by data</b> received through thorough user research,
            ensuring that the resulting UI provides a delightful user
            experience.
          </p>
          <p className="mt-6">
            In an ever-evolving industry, I believe in the power of
            collaboration and continuous learning. Together, we can create
            solutions that make a positive impact on the world and push the
            boundaries of what's possible in the digital realm.
          </p>
        </div>
        <div className="h-50 w-full bg-amber-500">TODO</div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
