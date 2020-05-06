// import fetch from "jest-fetch-mock";
const { User } = require("../User");
import { pool } from "./../../db/pool";
import { createUsersTable } from "../../tests/utils";

const user = new User();

const sub = "123456789";
const email = "tester@test.com";
const picture = "https://google.com/picture.jpg";

beforeEach(async () => {
  return await createUsersTable();
});

test("Creates a new user", async () => {
  await user.createUser(sub, email, picture);

  await user.findUser(sub).then(async (res: boolean) => {
    await expect(res).toEqual(true);
  });
  return await pool.end();
});
