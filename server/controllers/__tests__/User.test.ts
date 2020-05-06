// import fetch from "jest-fetch-mock";
const { User } = require("../User");
import { pool } from "./../../db/pool";

const user = new User();

const sub = "123456789";
const email = "tester@test.com";
const picture = "https://google.com/picture.jpg";

beforeEach(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
      id VARCHAR(128) PRIMARY KEY,
      email VARCHAR(128) NOT NULL, 
      picture VARCHAR(128) NOT NULL,
      created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
      modified_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_admin BOOL DEFAULT FALSE
  `);
});

afterEach(async () => {
  await pool.query("TRUNCATE TABLE users;");
});

test("Creates a new user", async () => {
  await user.createUser(sub, email, picture);

  await user.findUser(sub).then(async (res: boolean) => {
    await expect(res).toEqual(true);
  });
  return await pool.end();
});
