//recetteRoutes
import express from 'express';
import {
  getAllRecettesController,
  getRecetteByIdController,
  createRecetteController,
  updateRecetteController,
  deleteRecetteController,
} from '../controllers/RecetteController.js';
import { validateRecette } from '../validators/RecetteValidator.js';

const router = express.Router();

router.get('/recipes', getAllRecettesController);
router.get('/recipe/:id', getRecetteByIdController);
router.post('/recipes', validateRecette, createRecetteController);
router.put('/recipe/:id', validateRecette, updateRecetteController);
router.delete('/recipe/:id', deleteRecetteController);

export default router;
