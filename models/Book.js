import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  type: { type: String, required: true },
  contenu: { type: String, required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

export const Book = mongoose.model("Book", bookSchema);
