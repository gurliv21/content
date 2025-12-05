import pkg from "pg";
import dotenv from 'dotenv'
dotenv.config()
const { Pool } = pkg;

// const isProduction = process.env.NODE_ENV === "production";
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: false
});
console.log("DB_NAME:", process.env.DB_NAME);

export default pool;
