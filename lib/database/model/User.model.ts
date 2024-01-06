import { Schema, Document, Model, models, model } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin" | "super-admin";
}

interface Methods {
  comparePassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser, {}, Methods>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (e) {
      throw e;
    }
  }

  next();
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (e) {
    throw e;
  }
};
const User = models.User || model("User", userSchema);
export default User as Model<IUser, {}, Methods>;
