const express = require("express");
const router = express.Router();
const recetteController = require("../controllers/recetteController"); // Importer le contrôleur

// Route pour récupérer toutes les recettes (GET)
router.get("/", recetteController.getAllRecettes);

// Route pour récupérer une recette par ID (GET)
router.get("/:id", recetteController.getRecetteById);

// Route pour créer une nouvelle recette (POST)
router.post("/", recetteController.createRecette);

// Route pour mettre à jour une recette par ID (PUT)
router.put("/:id", recetteController.updateRecette);

// Route pour supprimer une recette par ID (DELETE)
router.delete("/:id", recetteController.deleteRecette);

module.exports = router;
