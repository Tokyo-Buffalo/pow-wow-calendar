// import fetch from "jest-fetch-mock";
const { User } = require("../User");

const user = new User();

const sub = "123456789";
const email = "tester@test.com";
const picture = "https://picture";

test("Creates a new user", (done) => {
  user.createUser(sub, email, picture);

  user.findUser(sub).then((res: boolean) => {
    expect(res).toEqual(true);
    done();
  });

  done();
});
