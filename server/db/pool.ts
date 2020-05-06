import { Pool } from "pg";
import { config as loadDotenvConfig } from "dotenv";

loadDotenvConfig();

const {
  PGHOST,
  PGHOST_TEST,
  PGDATABASE,
  PGDATABASE_TEST,
  PGUSER,
  PGUSER_TEST,
  PGPASSWORD_TEST,
  POSTGRES_PORT,
} = process.env;

const isTestEnv = process.env.NODE_ENV === "test";

export const pool = new Pool({
  host: isTestEnv ? PGHOST_TEST : PGHOST,
  database: isTestEnv ? PGDATABASE_TEST : PGDATABASE,
  user: isTestEnv ? PGUSER_TEST : PGUSER,
  password: PGPASSWORD_TEST,
  port: parseInt(POSTGRES_PORT, 10),
});
