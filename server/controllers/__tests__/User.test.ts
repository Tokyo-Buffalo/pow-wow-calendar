// import fetch from "jest-fetch-mock";
const { User } = require("../User");
import { pool } from "./../../db/pool";

const user = new User();

const sub = "123456789";
const email = "tester@test.com";
const picture = "https://google.com/picture.jpg";

test("Creates a new user", async () => {
  await user.createUser(sub, email, picture);
  const users = await pool.query("SELECT * FROM users;");

  await user.findUser(sub).then(async (res: boolean) => {
    await expect(user).toEqual(1);
    await expect(res).toEqual(true);
  });
  return await pool.end();
});
