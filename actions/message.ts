"use server";

import { Resend } from "resend";

const RESEND_CLIENT = new Resend(process.env.RESEND_API_KEY!);

interface SendMessageResponse {
  success: boolean;
}

const sendMessage = (
  name: string,
  email: string,
  message: string,
): Promise<SendMessageResponse> => {
  return RESEND_CLIENT.emails
    .send({
      from: process.env.SEND_FROM_EMAIL_ADDRESS!,
      to: process.env.SEND_TO_EMAIL_ADDRESS!,
      subject: `${name} wants to get in touch`,
      html: `<div><p style="margin-bottom: 8px">Email: ${email}</p><p>Message: ${message}</p></div>`,
    })
    .then((response) => {
      if (response.error) {
        console.error(
          `Failed to send message from [${name}] due to error:`,
          response.error,
        );
        return { success: false };
      }
      return { success: true };
    })
    .catch((err: Error) => {
      console.error(`Failed to send message from [${name}] due to error:`, err);
      return { success: false };
    });
};

export default sendMessage;
