import { Schema, models, model, Model, Document } from "mongoose";

interface IDetail extends Document {
  name: string;
  healthCenter: string;
  contact: string;
  email: string;
  city: string;
  country: string;
}
const pricingSchema = new Schema<IDetail>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    healthCenter: {
      type: String,
      required: [true, "healthCenter is required"],
    },
    contact: {
      type: String,
      unique: true,
      required: [true, "contact is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    },
    country: {
      type: String,
      required: [true, "country is required"],
    },
  },
  { timestamps: true }
);

const Pricing = models.Pricing || model("Pricing", pricingSchema);

export default Pricing as Model<IDetail>;
