import express from "express";
import {
  getAllRecettesController,
  getRecetteByIdController,
  createRecetteController,
  updateRecetteController,
  deleteRecetteController,
} from "../controllers/recetteController.js";

const router = express.Router();

router.get("/recettes", getAllRecettesController);
router.get("/recettes/:id", getRecetteByIdController);
router.post("/recettes", createRecetteController);
router.put("/recettes/:id", updateRecetteController);
router.delete("/recettes/:id", deleteRecetteController);

export default router;
