import { User } from "controllers/User";
import { pool } from "db/pool";
import { createUsersTable } from "utils/db";

const user = new User();
let testUser: typeof user;

const sub = "123456789";
const email = "tester@test.com";
const picture = "https://google.com/picture.jpg";

beforeAll(async () => {
  return await createUsersTable();
});

afterAll(async () => {
  await pool.query("TRUNCATE TABLE users;");
  return await pool.end();
});

test("Creates a new user", async () => {
  expect.assertions(1);
  testUser = await user.createUser(sub, email, picture);

  await user.findUser(sub).then(async (res: boolean) => {
    await expect(res).toEqual(true);
  });
});

test("Gets the new user", async () => {
  expect.assertions(1);
  await user.getUser(sub).then(async (res) => {
    await expect(res).toEqual(testUser);
  });
});
