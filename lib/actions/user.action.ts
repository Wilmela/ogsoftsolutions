"use server";

import connectDb from "@/lib/database";
import { UserType, userSchema } from "@/lib/validation";
import User from "@/lib/database/model/User.model";
import { revalidatePath } from "next/cache";

export const createUser = async (data: UserType) => {
  const validatedUser = userSchema.safeParse(data);

  if (!validatedUser.success) {
    throw new Error(`${validatedUser.error?.errors}`);
  }

  try {
    await connectDb();

    const isExist = await User.findOne({ email: data.email });
    if (isExist) throw new Error("Email already exists");

    const user = await User.create(data);

    return {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      role: user.role,
    };
  } catch (e) {
    throw e;
  }
};

export const getUsers = async () => {
  const users = await User.find();

  return JSON.parse(JSON.stringify(users));
};

export const makeAdmin = async (id: string) => {
  try {
    await connectDb();

    const user = await User.findById(id);
    if (!user) return;

    const updatedUser = await User.findOneAndUpdate(
      { _id: id.toString() },
      {
        $set: {
          role: user?.role === "user" ? "admin" : "user",
        },
      },
      { new: true }
    );
    revalidatePath("/dashboard");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    throw error;
  }
};
