import express from 'express';
import {
  getAllRecettesController,
  getRecetteByIdController,
  createRecetteController,
  updateRecetteController,
  deleteRecetteController,
} from '../controllers/recetteController.js';
import { validateRecette } from '../validators/recetteValidator.js'; // Assurez-vous d'importer le validateur

const router = express.Router();

router.get('/recettes', getAllRecettesController);
router.get('/recettes/:id', getRecetteByIdController);
router.post('/recettes', validateRecette, createRecetteController); // Ajout de la validation
router.put('/recettes/:id', validateRecette, updateRecetteController); // Ajout de la validation
router.delete('/recettes/:id', deleteRecetteController);

export default router;
