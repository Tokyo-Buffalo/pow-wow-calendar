import { User } from "../User";
import { pool } from "../../db/pool";

const user = new User();

jest.mock("../../db/pool", () => {
  return {
    pool: {
      query: jest.fn(),
    },
  };
});

afterEach(jest.clearAllMocks);

const errorMessage = "Could not retrieve user";
const expectedError = new Error(errorMessage);

test("Fails to get user", async () => {
  expect.assertions(1);
  (pool as any).query.mockImplementation(() => Promise.reject(expectedError));

  await expect(user.getUser("1")).resolves.toEqual(expectedError);
});

test("Fails to find user", async () => {
  expect.assertions(1);
  (pool as any).query.mockImplementation(() => Promise.reject(expectedError));

  await expect(user.findUser("1")).resolves.toEqual(expectedError);
});
