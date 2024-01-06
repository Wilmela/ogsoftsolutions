import { Schema, models, model, Model, Document } from "mongoose";

interface IEmail extends Document {
  email: string;
}
const newsLetterSchema = new Schema<IEmail>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
    },
  },
  { timestamps: true }
);

const NewsLetterEmail =
  models.NewsLetterEmail || model("NewsLetterEmail", newsLetterSchema);

export default NewsLetterEmail as Model<IEmail>;
