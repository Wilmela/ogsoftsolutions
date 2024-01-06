"use server";

import connectDb from "@/lib/database";
import TeamMember from "@/lib/database/model/Team.model";
import { TeamField, TeamSchema } from "@/lib/validation";
import { TeamMemberProps } from "@/type/type";
import { revalidatePath } from "next/cache";

export const addTeamMember = async (data: TeamField) => {
  const parsedData = TeamSchema.safeParse(data);
  if (!parsedData.success) return;
  try {
    await connectDb();
    await TeamMember.create({ ...data });
    revalidatePath("/about");
  } catch (error) {
    throw error;
  }
};
export const fetchTeamMembers = async () => {
  try {
    await connectDb();
    const members = await TeamMember.find();
    revalidatePath("/about");
    return JSON.parse(JSON.stringify(members));
  } catch (error) {
    throw error;
  }
};

export const findTeamMember = async (id: string): Promise<TeamMemberProps> => {
  try {
    await connectDb();
    const member = await TeamMember.findById(id);

    return JSON.parse(JSON.stringify(member));
  } catch (error) {
    throw error;
  }
};
export const updateTeamMember = async (data: TeamMemberProps) => {
  try {
    await connectDb();
    await TeamMember.findByIdAndUpdate(
      { _id: data._id },
      {
        $set: {
          photo: data.photo,
          fullName: data.fullName,
          position: data.position,
          detail: data.detail,
        },
      },
      { new: true }
    );
    revalidatePath("/about");
  } catch (error) {
    throw error;
  }
};
export const deleteTeamMember = async (id: string) => {
  try {
    await connectDb();
    await TeamMember.findByIdAndDelete(id);
    revalidatePath("/about");
  } catch (error) {
    throw error;
  }
};
