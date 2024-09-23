import mysql from "mysql2/promise";

// Configuration de la connexion à la base de données MySQL
const connPool = mysql.createPool({
  host: "localhost", // Remplace par ton host si nécessaire
  user: "root", // Remplace par ton utilisateur
  password: "", // Remplace par ton mot de passe
  database: "recette_api", // Remplace par le nom de ta base de données
});

connPool.getConnection().then(() => {
  console.log("CONNECTED");
});
export default connPool;
