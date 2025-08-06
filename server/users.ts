"use server";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    console.log("Signed in successfully");
  } catch (error) {
    console.error("Sign-in error:", error);
    throw new Error("Failed to sign in");
  }
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "user@email.com",
      password: "password",
      name: "user",
    },
  });
};
