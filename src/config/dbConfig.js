import mysql from 'mysql2/promise';

import dotenv from 'dotenv';
dotenv.config();
const connPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: 'root',
  password: 'Nd49523097',
  database: 'recette_api',
  port: 3308,
});

connPool.getConnection().then(() => {
  console.log('CONNECTED');
});
export default connPool;
