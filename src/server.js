import express from "express";
import bodyParser from "body-parser";
import recetteRoutes from "./routes/recetteRoutes.js"; 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api", recetteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
