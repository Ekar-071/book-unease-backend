import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Book Unease OK 🔥");
});

app.get("/api/livres", (req, res) => {
  res.json([
    { id: 1, titre: "Zépi", type: "Roman", contenu: "Début du livre..." },
    { id: 2, titre: "Le fruit du fils du Diable", type: "Manga", contenu: "Début du livre..." }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend lancé sur port ${PORT}`));
