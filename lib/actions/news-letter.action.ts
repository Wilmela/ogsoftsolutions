"use server";

import connectDb from "@/lib/database";
import NewsLetterEmail from "@/lib/database/model/NewsLetter.model";
import { EmailFormFieldType, newsLetterSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// type Success = {
//   success: boolean,
//   data: object;
// }
// type Failure = {
//   success: false,
//   message: string;
// }
// type ExpectedReturn = Success | Failure;

export const addEmailAddress = async (email: EmailFormFieldType) => {
  const validatedEmail = newsLetterSchema.safeParse(email);
  if (!validatedEmail.success) return new Error("Email already exists");
  try {
    await connectDb();
    const exists = await NewsLetterEmail.findOne({
      email: validatedEmail.data,
    });

    if (exists) {
      throw new Error("Email already exits");
    }

    await NewsLetterEmail.create({ email: validatedEmail.data });
    revalidatePath("/");
  } catch (error) {
    throw error;
  }
};

export const fetchNewLetters = async () => {
  try {
    await connectDb();
    const newsLetterSchema = await NewsLetterEmail.find();
    return JSON.parse(JSON.stringify(newsLetterSchema));
  } catch (error) {
    throw error;
  }
};
