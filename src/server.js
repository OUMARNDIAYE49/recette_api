import express from "express";
import bodyParser from "body-parser";
import recetteRoutes from "./routes/recetteRoutes.js"; // N'oublie pas d'ajouter l'extension .js

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Utiliser les routes pour les recettes
app.use("/api", recetteRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
