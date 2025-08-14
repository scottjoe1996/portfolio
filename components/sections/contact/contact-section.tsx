"use client";

import React from "react";

import sendMessage from "@/actions/message";

import ContactForm from "./contact-form";

const ContactSection: React.FC = () => {
  const [hasSentMail, setHasSentMail] = React.useState(false);

  return (
    <section
      id="contact"
      className="flex w-full items-center justify-center rounded-t-4xl bg-zinc-200 p-4"
    >
      <div className="w-full max-w-2xl">
        <h2>Contact me</h2>
        <div className="flex min-h-[440px] flex-col items-center justify-center gap-2">
          {hasSentMail ? (
            <>
              <p className="text-5xl font-bold">Email recieved!</p>
              <p>
                Thanks for reaching out, I'll get back to you as soon as I can!
              </p>
            </>
          ) : (
            <ContactForm
              onSendMessage={(name, email, message) =>
                sendMessage(name, email, message).then((response) => {
                  if (response.success) {
                    setHasSentMail(true);
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
