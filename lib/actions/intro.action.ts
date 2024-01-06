"use server";

import connectDb from "@/lib/database";
import IntroText from "@/lib/database/model/IntroText.model";
import { IntroTextField, IntroTextSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";

export const createIntroText = async (text: IntroTextField) => {
  const validatedText = IntroTextSchema.safeParse(text);
  if (!validatedText.success) return;

  try {
    await connectDb();

    const newText = await IntroText.create(text);
    revalidatePath("/");
    return JSON.parse(JSON.stringify(newText));
  } catch (error) {
    throw error;
  }
};

export const fetchIntroText = async () => {
  try {
    await connectDb();

    const res = await IntroText.find();
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    throw error;
  }
};

export const updateIntroText = async (id: string, text: IntroTextField) => {
  try {
    await connectDb();

    await IntroText.findByIdAndUpdate(
      id,
      {
        $set: {
          text: text.text,
        },
      },
      { new: true }
    );
    revalidatePath("/");
  } catch (error) {
    throw error;
  }
};

export const deleteIntroText = async (id: string) => {
  try {
    await connectDb();

    await IntroText.findByIdAndDelete(id);
    revalidatePath("/");
  } catch (error) {
    throw error;
  }
};
