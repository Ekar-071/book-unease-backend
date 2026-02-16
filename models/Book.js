import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  type: { type: String, required: true },
  contenu: { type: String, required: true },
});

export default mongoose.model("Book", bookSchema);
