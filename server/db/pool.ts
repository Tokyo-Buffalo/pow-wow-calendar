import { Pool } from "pg";
import { config as loadDotenvConfig } from "dotenv";

loadDotenvConfig();

export const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
});