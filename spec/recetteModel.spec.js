import './helpers/jasmineHelper.js';
import db from '../src/config/dbConfig.js';
import {
  getAllRecettes,
  getRecetteById,
  createRecette,
  updateRecette,
  deleteRecette,
} from '../src/models/RecetteModel.js';

describe('Recette Model', () => {
  let createdRecetteIds = [];

  afterEach(async () => {
    for (const id of createdRecetteIds) {
      await deleteRecette(id);
    }
    createdRecetteIds = [];
  });

  afterAll(async () => {
    await db.end();
  });

  it('should create a recette', async () => {
    const uniqueTitle = `Titre de Test ${Date.now()}`;
    const recette = await createRecette(
      uniqueTitle,
      'Ingrédients de Test',
      'plat'
    );
    createdRecetteIds.push(recette.insertId);
    expect(recette.affectedRows).toBe(1);
  });

  it('should get all recettes', async () => {
    const uniqueTitle = `Titre de Test ${Date.now()}`;
    const newRecette = await createRecette(
      uniqueTitle,
      'Ingrédients de Test',
      'plat'
    );
    createdRecetteIds.push(newRecette.insertId);
    const recettes = await getAllRecettes();
    expect(recettes.length).toBeGreaterThan(0);
  });

  it('should get a recette by ID', async () => {
    const uniqueTitle = `Titre de Test ${Date.now()}`;
    const createdRecette = await createRecette(
      uniqueTitle,
      'Ingrédients de Test',
      'plat'
    );
    createdRecetteIds.push(createdRecette.insertId);
    const recette = await getRecetteById(createdRecette.insertId);
    expect(recette).not.toBeNull();
    expect(recette).toEqual({
      id: createdRecette.insertId,
      titre: uniqueTitle,
      ingredient: 'Ingrédients de Test',
      type: 'plat',
    });
  });

  it('should update a recette', async () => {
    const uniqueTitle = `Titre de Test ${Date.now()}`;
    const createdRecette = await createRecette(
      uniqueTitle,
      'Ingrédients de Test',
      'plat'
    );
    createdRecetteIds.push(createdRecette.insertId);
    const updatedRecette = await updateRecette(
      createdRecette.insertId,
      'Titre Mis à Jour',
      'Ingrédients Mis à Jour',
      'plat'
    );
    expect(updatedRecette.affectedRows).toBe(1);
  });

  it('should delete a recette', async () => {
    const uniqueTitle = `Titre de Test ${Date.now()}`;
    const createdRecette = await createRecette(
      uniqueTitle,
      'Ingrédients de Test',
      'plat'
    );
    const result = await deleteRecette(createdRecette.insertId);
    expect(result.affectedRows).toBe(1);
  });
});
