import express from 'express';
import {
  getAllRecettesController,
  getRecetteByIdController,
  createRecetteController,
  updateRecetteController,
  deleteRecetteController,
} from '../controllers/recetteController.js';
import { validateRecette } from '../validators/recetteValidator.js'; 

const router = express.Router();

router.get('/recipes', getAllRecettesController);
router.get('/recipe/:id', getRecetteByIdController);
router.post('/recipes', validateRecette, createRecetteController); 
router.put('/recipe/:id', validateRecette, updateRecetteController); 
router.delete('/recipe/:id', deleteRecetteController);

export default router;
