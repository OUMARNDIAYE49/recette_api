import express from "express";
import { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe,} from "../controllers/recetteController.js";
import { validateRecette } from '../validators/recetteValidator.js'; // Utilisez import au lieu de require


const router = express.Router();

router.get("/recipe", getAllRecipes);
router.get("/recipe/:id", getRecipeById);
router.post("/recipe", validateRecette, createRecipe);
router.put("/recipe/:id", validateRecette,  updateRecipe);
router.delete("/recipe/:id", deleteRecipe);


export default router;
