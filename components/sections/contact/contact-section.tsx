"use client";

import React from "react";

import Field from "./field";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="flex w-full items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2>Contact me</h2>
        <div className="container-shadow rounded-md p-2.5">
          <form>
            <Field id="name" label="Name" placeholder="John Doe" />
            <Field id="email" label="Email" placeholder="john@doe.co.uk" />
          </form>
          <p>Card goes here</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
