import React from "react";

import TextField from "./text-field";
import TextareaField from "./textarea-field";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="flex w-full items-center justify-center bg-zinc-200 p-4"
    >
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
          <TextareaField
            id="message"
            label="Message"
            placeholder="Hello there!"
            rows={6}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
