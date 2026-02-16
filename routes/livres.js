import express from "express";
import Book from "../models/Book.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

// Récupérer tous les livres
router.get("/", async (req, res) => {
  try {
    const livres = await Book.find();
    res.json(livres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Créer un nouveau livre (admin uniquement)
router.post("/", authAdmin, async (req, res) => {
  const { titre, type, contenu } = req.body;
  try {
    const book = new Book({ titre, type, contenu });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
