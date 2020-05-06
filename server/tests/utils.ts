import { pool } from "../db/pool";

export async function createUsersTable() {
  return await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
      id VARCHAR(128) PRIMARY KEY,
      email VARCHAR(128) NOT NULL, 
      picture VARCHAR(128) NOT NULL,
      created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
      modified_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_admin BOOL DEFAULT FALSE
    )`);
}
