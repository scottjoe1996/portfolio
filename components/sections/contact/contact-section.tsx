"use client";

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
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            console.log(formData.get("name"));
            console.log(formData.get("email"));
            console.log(formData.get("message"));
          }}
        >
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
          <button
            type="submit"
            className="bg-foreground focus:ring-primary rounded-md px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:ring-4 focus:outline-none"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
