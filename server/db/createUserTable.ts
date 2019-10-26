
import { pool } from "./pool";

const queryText = `
  CREATE TABLE IF NOT EXISTS users(
    id VARCHAR(128) PRIMARY KEY,
    email VARCHAR(128) NOT NULL, 
    picture VARCHAR(128) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    modified_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_admin BOOL DEFAULT FALSE
  )`;

export default (async () => {
  try {
    pool.query(queryText);
  } catch(err) {
    console.error("Error: Could not create user table", err);
    return await pool.end();
  }
})();