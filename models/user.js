import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    match: [
      /^(?=.{2,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 2-20 alphanumeric letters and be unique!",
    ],
  },
  imageUrl: {
    type: String,
  },
});

const User = models.UserPrompts || model("UserPrompts", UserSchema); //User ini untuk nama collection

export default User;
