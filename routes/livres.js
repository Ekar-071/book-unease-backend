import express from "express";
import { Book } from "../models/Book.js";
import { authAdmin } from "../middleware/authAdmin.js";

const router = express.Router();

// Lister tous les livres (public)
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Ajouter un livre (admin uniquement)
router.post("/", authAdmin, async (req, res) => {
  const book = new Book({ ...req.body, authorId: req.user.id });
  await book.save();
  res.json(book);
});

export default router;
