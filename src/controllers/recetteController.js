//recetteController
import {
  getAllRecettes,
  getRecetteById,
  createRecette,
  updateRecette,
  deleteRecette,
} from '../models/recetteModel.js';

export const getAllRecettesController = async (req, res) => {
  try {
    const results = await getAllRecettes();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecetteByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const recette = await getRecetteById(id);
    if (!recette) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.json(recette);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createRecetteController = async (req, res) => {
  const { titre, ingredient, type } = req.body;
  try {
    await createRecette(titre, ingredient, type);
    res.status(201).json({ message: 'Recette ajoutée avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateRecetteController = async (req, res) => {
  const { id } = req.params;
  const { titre, ingredient, type } = req.body;
  try {
    const result = await updateRecette(id, titre, ingredient, type);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.json({ message: 'Mise à jour réussie avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteRecetteController = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteRecette(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.json({ message: 'Suppression réussie avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
