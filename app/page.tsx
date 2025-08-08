import React from "react";

import Navbar from "@/components/navbar/navbar";
import NavLink from "@/components/navbar/nav-link";

import HomeSection from "@/components/sections/home/home-section";
import ArrowScrollSuggestion from "@/components/icons/arrow-scroll-suggestion";
import ContactSection from "@/components/sections/contact/contact-section";

const Portfolio: React.FC = () => {
  return (
    <>
      <Navbar>
        <NavLink href="#about">about</NavLink>
        <NavLink href="#experience">experience</NavLink>
        <NavLink href="#contact">contact</NavLink>
      </Navbar>
      <main className="relative flex w-full flex-col items-center justify-center">
        <HomeSection />
        <ArrowScrollSuggestion size="3rem" />
        <section id="about" className="my-50 h-50">
          <h2>This is the about section</h2>
        </section>
        <section id="experience" className="my-50 h-50">
          <h2>This is the experience section</h2>
        </section>
        <ContactSection />
      </main>
    </>
  );
};

export default Portfolio;
