"use server";

const sendMessage = (
  name: string,
  email: string,
  message: string,
): Promise<void> => {
  console.log(name);
  console.log(email);
  console.log(message);

  return Promise.resolve();
};

export default sendMessage;
