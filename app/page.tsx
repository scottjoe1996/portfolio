import React from "react";

import Navbar from "@/components/navbar/navbar";
import NavLink from "@/components/navbar/nav-link";

const Portfolio: React.FC = () => {
  return (
    <>
      <Navbar>
        <NavLink href="#about">about</NavLink>
        <NavLink href="#experience">experience</NavLink>
        <NavLink href="#contact">contact</NavLink>
      </Navbar>
      <main className="bg-gray-500">
        <h1>Hi, I&apos;m Joe Scott, Web Developer</h1>
        <section id="about" className="h-50 my-50">
          <h2>This is the about section</h2>
        </section>
        <section id="experience" className="h-50 my-50">
          <h2>This is the experience section</h2>
        </section>
        <section id="contact" className="h-50 my-50">
          <h2>This is the contact section</h2>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
