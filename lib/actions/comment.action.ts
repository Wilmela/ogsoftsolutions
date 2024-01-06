import Comment from "../database/model/Comment.model";
import { revalidatePath } from "next/cache";
import connectDb from "../database";

export const findCommentById = async (id: string) => {
  try {
    await connectDb();

    await Comment.findOne({ _id: id });
  } catch (error) {
    throw error;
  }
};
export const findComments = async () => {
  try {
    await connectDb();

    return await Comment.find({});
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (id: string) => {
  try {
    await connectDb();

    await Comment.findOneAndDelete({ _id: id });
    revalidatePath("/blog/post");
  } catch (error) {
    throw error;
  }
};
