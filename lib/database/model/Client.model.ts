import { Schema, Document, Model, models, model } from "mongoose";

interface IClient extends Document {
  logo?: string;
  info: string;
  remark: string;
  hasLogo: boolean;
}
const clientSchema = new Schema<IClient>(
  {
    logo: {
      type: String,
    },
    info: {
      type: String,
      required: [true, "info is required"],
    },
    remark: {
      type: String,
      required: [true, "remark is required"],
    },
    hasLogo: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const client = models.client || model("client", clientSchema);
export default client as Model<IClient>;
