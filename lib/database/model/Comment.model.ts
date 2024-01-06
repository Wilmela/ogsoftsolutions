import { Schema, Document, Model, models, model } from "mongoose";

// interface IComment extends Document {
//   text: string;
//   postId: Schema.Types.ObjectId;
//   createdAt: Date;
// }
const commentSchema = new Schema(
  {
    text: {
      type: String,
    },
    // each comment can only relates to one blog, so it's not in an array
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Comment = models?.Comment || model("Comment", commentSchema);
export default Comment;
