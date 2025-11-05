"use client";

import React from "react";

import sendMessage from "@/actions/message";
import Github from "@/components/icons/github";
import Reddit from "@/components/icons/reddit";
import LinkedIn from "@/components/icons/linked-in";

import ContactForm from "./contact-form";
import SectionWrapper from "../section-wrapper";

type FormState = "INITIAL" | "SENT" | "ERROR";

const ContactSection: React.FC = () => {
  const [formState, setFormState] = React.useState<FormState>("INITIAL");

  return (
    <SectionWrapper
      id="contact"
      title="Contact me"
      sectionClasses={["bg-zinc-200", "min-h-screen"]}
    >
      <div className="flex min-h-[440px] items-center justify-center gap-2">
        {formState === "INITIAL" ? (
          <>
            <aside className="hidden flex-[1] text-center md:inline">
              <p className="mb-2 text-2xl font-semibold">
                Let&apos;s Collaborate!
              </p>
              <p className="text-balance">
                Feel free to contact me anytime. I&apos;ll get back to you as
                soon as I can!
              </p>
            </aside>
            <div className="flex flex-[1] flex-col items-center justify-center gap-2">
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
            </div>
          </>
        ) : (
          <div className="mb-12 text-center">
            {formState === "SENT" ? (
              <>
                <p className="text-4xl font-semibold">Email received!</p>
                <p>
                  Thanks for reaching out, I&apos;ll get back to you as soon as
                  I can!
                </p>
              </>
            ) : (
              <>
                <p className="text-4xl font-semibold">Error!</p>
                <p>
                  There was an error sending your message. Please try again
                  later.
                </p>
              </>
            )}
          </div>
        )}
      </div>
      <hr className="mx-auto mt-10 mb-4 h-0.5 w-full border-t-0 bg-zinc-300" />
      <h3 className="mb-1 text-end font-semibold text-zinc-500">Follow me</h3>
      <div className="flex justify-end gap-4">
        <a href="https://github.com/scottjoe1996/" target="_blank">
          <Github size="1.55rem" />
        </a>
        <a href="https://www.reddit.com/user/MoshedDev/" target="_blank">
          <Reddit size="1.55rem" />
        </a>
        <a href="https://www.linkedin.com/in/josephscottuk/" target="_blank">
          <LinkedIn size="1.55rem" />
        </a>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
