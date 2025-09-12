"use client";

import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import Email from "@/components/icons/email";
import Button from "@/components/button";

import TextField from "./text-field";
import TextareaField from "./textarea-field";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" })
    .nonoptional(),
  email: z.string().regex(new RegExp("^[\\w-\\.]+@[\\w-\\.]+\\.[a-z]{2,4}$"), {
    message: "Please enter a valid email address",
  }),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters" })
    .max(500, { message: "Message must be at most 500 characters" })
    .nonoptional(),
});

interface ContactFormProps {
  onSendMessage(name: string, email: string, message: string): Promise<void>;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSendMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit((inputs) => {
        setIsLoading(true);
        onSendMessage(inputs.name, inputs.email, inputs.message).finally(() => {
          setIsLoading(false);
        });
      })}
      noValidate
    >
      <TextField
        id="name"
        type="text"
        label="Name"
        placeholder="John Doe"
        error={errors.name?.message}
        disabled={isLoading}
        {...register("name")}
      />
      <TextField
        id="email"
        type="email"
        label="Email"
        placeholder="john@doe.co.uk"
        error={errors.email?.message}
        disabled={isLoading}
        {...register("email")}
      />
      <TextareaField
        id="message"
        label="Message"
        placeholder="Hello there!"
        rows={6}
        error={errors.message?.message}
        disabled={isLoading}
        {...register("message")}
      />
      <Button type="submit" isLoading={isLoading} icon={Email}>
        Send Email
      </Button>
    </form>
  );
};

export default ContactForm;
