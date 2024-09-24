import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3308,
});

connPool
  .getConnection()
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

export default connPool;
