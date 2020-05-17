import { User } from "../User";
import { pool } from "../../db/pool";

const user = new User();

const errorMessage = "Could not retrieve user";
const expectedError = new Error(errorMessage);

jest.mock("../../db/pool");

afterEach(() => {
  jest.clearAllMocks();
});

test("Fails to get user", async () => {
  (pool as any).query.mockRejectedValueOnce(expectedError);
  expect.assertions(1);

  await expect(user.getUser("1")).resolves.toEqual(expectedError);
});

test("Fails to find user", async () => {
  expect.assertions(1);
  (pool as any).query.mockRejectedValueOnce(expectedError);

  await expect(user.findUser("1")).resolves.toEqual(expectedError);
});
