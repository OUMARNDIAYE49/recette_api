
import db from '../config/dbConfig.js'

// Récupérer toutes les recettes
export const getAllRecipes = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM recettes');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Récupérer une recette par ID
export const getRecipeById = async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await db.query('SELECT * FROM recettes WHERE id = ?', [id]);
        if (results.length === 0) {
            return res.status(404).json({ message: 'Recette non trouvé' });
        }
        res.json(results[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Créer une nouvelle recette
export const createRecipe = async (req, res) => {
  const { titre, ingredient, type } = req.body;
  try {
      const [result] = await db.query('INSERT INTO recettes (titre, ingredient, type) VALUES (?, ?, ?)', [titre, ingredient, type]);
      res.status(201).json({ id: result.insertId, titre, ingredient, type });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une recette existante
export const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { titre, ingredient, type } = req.body;
  try {
      const [result] = await db.query('UPDATE recettes SET titre = ?, ingredient = ?, type = ? WHERE id = ?', [titre, ingredient, type, id]);
      if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Recette non trouvé' });
      }
      res.json({ message: 'Mise ajour reussi avec succes' });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

// Supprimer une recette
export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
      const [result] = await db.query('DELETE FROM recettes WHERE id = ?', [id]);
      if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Recette non trouvé' });
      }
      res.json({ message: 'Supprésion reussi avec succes' });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};