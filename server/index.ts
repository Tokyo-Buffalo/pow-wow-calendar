import path from "path";
import express from "express";
import redis from "redis";
import webpack from "webpack";
import middleware from "webpack-dev-middleware";
import session from "express-session";
import RedisStore from "connect-redis";
import { config as getDotEnvConfig } from "dotenv";
import camelcaseKeys from "camelcase-keys";
import passport from "passport";

import webpackConfig from "../webpack.config";

import { User } from "./controllers/User";

import "./passport";

const app = express();
const port = 3000;
const compiler = webpack(webpackConfig);
const RedisConnect = RedisStore(session);
const client = redis.createClient({ port: 6379 });

getDotEnvConfig();

app.use(
  session({
    name: "sid",
    store: new RedisConnect({ client }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 14 * 14 * 24 * 60 * 60 * 60
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", express.static(path.join(__dirname, "../dist")));
app.use(
  middleware(compiler, {
    publicPath: "/__what"
  })
);
app.use(require("webpack-hot-middleware")(compiler));

app.get("/auth/google", passport.authenticate("google", { scope: ["openid email"] }));

app.get(
  "/auth/google/callback*",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login/error"
  })
);

app.get("/auth", async (req, res) => {
  const userClass = new User();
  if (req.session && req.session.passport) {
    const user = await userClass.getUser(req.session.passport.user.id);
    const userCamelCase = camelcaseKeys(user);
    res.json({ ...userCamelCase, isLoggedIn: true }).end();
  } else {
    res.json({ isLoggedIn: false }).end();
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export { app };
