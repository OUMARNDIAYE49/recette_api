import express from 'express';
import recetteRoutes from './routes/RecetteRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', recetteRoutes);

const PORT = process.env.DB_PORT || 4000;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
