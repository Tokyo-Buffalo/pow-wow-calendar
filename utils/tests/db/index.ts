import { pool } from "db/pool";
import { userQuery } from "db/createTables";

export async function createUsersTable() {
  return await pool.query(userQuery);
}
