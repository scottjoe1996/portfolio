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
      <main className="flex w-full flex-col items-center justify-center">
        <section className="flex h-[92dvh] w-full flex-col items-center justify-center text-center">
          <h1 className="mb-2 text-7xl">JOSEPH SCOTT</h1>
          <p className="text-5xl">Designing websites that users love.</p>
        </section>
        <section id="about" className="my-50 h-50">
          <h2>This is the about section</h2>
        </section>
        <section id="experience" className="my-50 h-50">
          <h2>This is the experience section</h2>
        </section>
        <section id="contact" className="my-50 h-50">
          <h2>This is the contact section</h2>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
