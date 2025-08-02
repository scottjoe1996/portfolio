"use client";

import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import TextField from "./text-field";
import TextareaField from "./textarea-field";

const formSchema = z.object({
  name: z.string().min(2).max(50).nonoptional(),
  email: z.email().nonoptional(),
  message: z.string().min(2).max(500).nonoptional(),
});

const ContactSection: React.FC = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <section
      id="contact"
      className="flex w-full items-center justify-center bg-zinc-200 p-4"
    >
      <div className="w-full max-w-2xl">
        <h2>Contact me</h2>
        <form
          onSubmit={handleSubmit((inputs) => {
            console.log(inputs.name);
            console.log(inputs.email);
            console.log(inputs.message);
          })}
        >
          <TextField
            id="name"
            type="text"
            label="Name"
            placeholder="John Doe"
            {...register("name")}
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="john@doe.co.uk"
            {...register("email")}
          />
          <TextareaField
            id="message"
            label="Message"
            placeholder="Hello there!"
            rows={6}
            {...register("message")}
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
