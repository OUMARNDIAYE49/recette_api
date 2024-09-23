import express from "express";
import { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe,} from "../controllers/recetteController.js";
import { validateRecette } from '../validators/recetteValidator.js'; 


const router = express.Router();

router.get("/recipes", getAllRecipes);
router.get("/recipes/:id", getRecipeById);
router.post("/recipes", validateRecette, createRecipe);
router.put("/recipe/:id", validateRecette,  updateRecipe);
router.delete("/recipe/:id", deleteRecipe);


export default router;
