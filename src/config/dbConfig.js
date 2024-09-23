import mysql from "mysql2/promise";

const connPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Nd49523097",
  database: "recette_api",
  port: 3308,
});

connPool.getConnection().then(() => {
  console.log("CONNECTED");
});
export default connPool;
