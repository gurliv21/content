import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "gurlivkaurbajwa",
  host: "localhost",
  database: "content",
  password: "",     
  port: 5432,
});

export default pool;
