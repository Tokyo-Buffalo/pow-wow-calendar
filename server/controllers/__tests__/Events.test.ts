import { pool } from "db/pool";
import { PWCEvents } from "controllers/Events";

const events = new PWCEvents();

const errorMessage = "Could not retrieve events";
const expectedError = new Error(errorMessage);

jest.mock("db/pool");

afterEach(() => {
  jest.clearAllMocks();
});

test("Could not retrieve any events", async () => {
  (pool as any).query.mockRejectedValueOnce(expectedError);
  expect.assertions(1);

  await expect(events.getAllEvents()).resolves.toEqual(expectedError);
});
