// import fetch from "jest-fetch-mock";
const { User } = require("../User");

test("Creates a new user", () => {
  const user = new User();

  expect(user).toEqual(1);
});
