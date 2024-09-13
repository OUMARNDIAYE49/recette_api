const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Importer les routes
const recetteRoutes = require("./routes/recetteRoutes");

// Middleware
app.use(bodyParser.json());

// Utilisation des routes
app.use("/api/recettes", recetteRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
