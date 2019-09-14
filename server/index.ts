import path from "path";
import redis from "redis";
import express from "express";
import connect from "connect-redis";
import session from "express-session";
import { config as getDotEnvConfig } from "dotenv";

const app = express();
const port = 3000;
const RedisStore = connect(session);
const client = redis.createClient();

getDotEnvConfig();

app.use(session({
  store: new RedisStore({ client }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use("/", express.static(path.join(__dirname, "../dist")));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});