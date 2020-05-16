import { User } from "../User";
import { pool } from "./../../db/pool";
import { createUsersTable } from "../../tests/utils";

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

test("Fails to get user", async () => {
  expect.assertions(1);

  const errorMessage = "Could not retrieve user";
  const expectedError = new Error(errorMessage);

  await expect(user.getUser("1")).resolves.toEqual(expectedError);
});

test("Fails to find user", async () => {
  expect.assertions(1);

  await expect(user.findUser("1")).resolves.toEqual(false);
});
