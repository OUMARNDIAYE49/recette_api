//recetteModel
import db from '../config/dbConfig.js';

export const getAllRecettes = async () => {
  const [results] = await db.query('SELECT * FROM recettes');
  return results;
};

export const getRecetteById = async id => {
  const [results] = await db.query('SELECT * FROM recettes WHERE id = ?', [id]);
  return results.length > 0 ? results[0] : null;
};
export const getRecetteByTitle = async titre => {
  const [rows] = await db.query('SELECT * FROM recettes WHERE titre = ?', [
    titre,
  ]);
  return rows.length > 0 ? rows[0] : null;
};

export const createRecette = async (titre, ingredient, type) => {
  const [result] = await db.query(
    'INSERT INTO recettes (titre, ingredient, type) VALUES (?, ?, ?)',
    [titre, ingredient, type]
  );
  return result;
};

export const updateRecette = async (id, titre, ingredient, type) => {
  const [result] = await db.query(
    'UPDATE recettes SET titre = ?, ingredient = ?, type = ? WHERE id = ?',
    [titre, ingredient, type, id]
  );
  return result;
};

export const deleteRecette = async id => {
  const [result] = await db.query('DELETE FROM recettes WHERE id = ?', [id]);
  return result;
};
