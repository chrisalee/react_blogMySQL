import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const mysqlUser = process.env.REACT_APP_MYSQL_USER;
const mysqlPass = process.env.REACT_APP_MYSQL_PASS;

export const db = mysql.createConnection({
  host: "localhost",
  user: mysqlUser,
  password: mysqlPass,
  database: "blog",
})