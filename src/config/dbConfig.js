import mysql from "mysql2/promise";

import dotenv from "dotenv";
dotenv.config();
const connPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: "root",
  password: "rELAX2024",
  database: "recette_api",
});

connPool.getConnection().then(() => {
  console.log("CONNECTED");
});
export default connPool;
