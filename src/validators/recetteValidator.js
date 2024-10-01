// RecetteValidators.js
import { body, validationResult } from 'express-validator';
import connPool from '../config/dbConfig.js'; // Ajustez le chemin d'importation selon votre structure de projet

export const validateRecette = [
  body('titre')
    .trim()
    .notEmpty()
    .withMessage('Le titre est requis.')
    .isLength({ min: 5, max: 100 })
    .withMessage('Le titre doit contenir entre 5 et 100 caractères.')
    .custom(async value => {
      const existingRecette = await checkRecetteByTitle(value);
      if (existingRecette) {
        throw new Error(
          'Le titre doit être unique. Une recette avec ce titre existe déjà.'
        );
      }
      return true;
    }),

  body('ingredient')
    .trim()
    .notEmpty()
    .withMessage('Les ingrédients sont requis.')
    .isLength({ min: 10, max: 500 })
    .withMessage(
      'Les ingrédients doivent contenir entre 10 et 500 caractères.'
    ),

  body('type')
    .trim()
    .notEmpty()
    .withMessage('Le type de recette est requis.')
    .isIn(['entrée', 'plat', 'dessert'])
    .withMessage('Le type de recette doit être entrée, plat ou dessert.'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Fonction pour vérifier l'existence d'un titre de recette
const checkRecetteByTitle = async titre => {
  const [recettes] = await connPool.query(
    'SELECT * FROM recettes WHERE titre = ?',
    [titre]
  );
  return recettes.length > 0; // Retourne vrai si une recette existe déjà avec ce titre
};
