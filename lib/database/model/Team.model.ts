import { Schema, Document, Model, models, model } from "mongoose";

export interface ITeam extends Document {
  _id: string;
  photo: string;
  fullName: string;
  position: string;
  detail: string;
}
const TeamSchema = new Schema<ITeam>(
  {
    photo: { type: String },

    fullName: {
      type: String,
      unique: true,
      required: [true, "full name is required"],
    },
    position: {
      type: String,
      required: [true, "position is required"],
    },
    detail: {
      type: String,
      required: [true, "detail is required"],
    },
  },
  { timestamps: true }
);

const TeamMember = models.TeamMember || model("TeamMember", TeamSchema);
export default TeamMember as Model<ITeam>;
