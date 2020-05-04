import { Pool } from "pg";
import { config as loadDotenvConfig } from "dotenv";

loadDotenvConfig();

const { PGDATABASE, PGDATABASE_TEST } = process.env;

const isTestEnv = process.env.NODE_ENV === "test";
const database = isTestEnv ? PGDATABASE_TEST : PGDATABASE;

export const pool = new Pool({
  host: process.env.PGHOST,
  database,
  user: process.env.PGUSER,
});
