import { Schema, Document, Model, models, model } from "mongoose";

interface ICat extends Document {
  category: string;
}
const categorySchema = new Schema<ICat>(
  {
    category: {
      type: String,
      required: [true, "category is required"],
    },
  },
  { timestamps: true }
);

const category = models.category || model("category", categorySchema);
export default category as Model<ICat>;
