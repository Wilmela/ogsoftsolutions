import { Schema, Document, Model, models, model } from "mongoose";

interface Post extends Document {
  author: string;
  photo: string;
  title: string;
  subTitle: string;
  body: string;
  category: string;
  likes?: number;
  disLikes?: number;
  comments?: any[];
  date?: Date;
  owner: Schema.Types.ObjectId;
}
const PostSchema = new Schema<Post>(
  {
    author: {
      type: String,
    },
    photo: {
      type: String,
      required: [true, "photo is required"],
    },
    title: {
      type: String,
      required: [true, "title is required"],
    },
    subTitle: {
      type: String,
      required: [true, "subTitle is required"],
    },
    body: {
      type: String,
      required: [true, "post is required"],
    },
    likes: {
      type: Number,
      default: 0,
    },
    disLikes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    category: {
      type: String,
      default: 'general'
    },
    date: {
      type: Date,
      default: Date.now,
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);
export default Post as Model<Post>;
