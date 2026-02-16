import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "reader" }, // "admin" pour toi
});

export default mongoose.model("User", userSchema);
