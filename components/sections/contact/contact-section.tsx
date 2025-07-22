"use client";

import React from "react";

import TextField from "./text-field";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="flex w-full items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2>Contact me</h2>
        <form>
          <TextField
            id="name"
            type="text"
            label="Name"
            placeholder="John Doe"
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="john@doe.co.uk"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
