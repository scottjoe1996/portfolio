"use client";

import React from "react";

import sendMessage from "@/actions/message";

import ContactForm from "./contact-form";
import SectionHeading from "../common/section-heading";

type FormState = "INITIAL" | "SENT" | "ERROR";

const ContactSection: React.FC = () => {
  const [formState, setFormState] = React.useState<FormState>("INITIAL");

  return (
    <section
      id="contact"
      className="flex w-full items-center justify-center rounded-t-4xl bg-zinc-200 p-4"
    >
      <div className="w-full max-w-4xl">
        <SectionHeading title="Contact me" />
        <div className="flex min-h-[440px] flex-col items-center justify-center gap-2">
          {formState === "SENT" ? (
            <>
              <p className="text-4xl font-semibold">Email received!</p>
              <p>
                Thanks for reaching out, I&apos;ll get back to you as soon as I
                can!
              </p>
            </>
          ) : formState === "ERROR" ? (
            <>
              <p className="text-4xl font-semibold">Error!</p>
              <p>
                There was an error sending your message. Please try again later.
              </p>
            </>
          ) : (
            <ContactForm
              onSendMessage={(name, email, message) =>
                sendMessage(name, email, message).then((response) => {
                  if (response.success) {
                    setFormState("SENT");
                  } else {
                    setFormState("ERROR");
                  }
                })
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
