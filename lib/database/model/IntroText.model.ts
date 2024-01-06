import { Schema, Document, Model, models, model } from "mongoose";

interface IText extends Document {
 
  text: string;
}
const textSchema = new Schema<IText>(
  {
    text: {
      type: String,
      required: [true, "text is required"],
    },
  },
  { timestamps: true }
);

const IntroText = models.IntroText || model("IntroText", textSchema);
export default IntroText as Model<IText>;
