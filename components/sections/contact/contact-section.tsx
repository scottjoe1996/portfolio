"use client";

import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import sendMessage from "@/actions/message";

import TextField from "./text-field";
import TextareaField from "./textarea-field";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" })
    .nonoptional(),
  email: z
    .email({ message: "Please enter a valid email address" })
    .nonoptional(),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters" })
    .max(500, { message: "Message must be at most 500 characters" })
    .nonoptional(),
});

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
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
            sendMessage(inputs.name, inputs.email, inputs.message).then(
              (response) => console.log(response),
            );
          })}
        >
          <TextField
            id="name"
            type="text"
            label="Name"
            placeholder="John Doe"
            error={errors.name?.message}
            {...register("name")}
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="john@doe.co.uk"
            error={errors.email?.message}
            {...register("email")}
          />
          <TextareaField
            id="message"
            label="Message"
            placeholder="Hello there!"
            rows={6}
            error={errors.message?.message}
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-foreground focus:ring-primary rounded-md px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 focus:ring-4 focus:outline-none"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
