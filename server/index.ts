import path from 'path';
import redis from 'redis';
import express from 'express';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import connect from 'connect-redis';
import session from 'express-session';
import { config as getDotEnvConfig } from 'dotenv';
import webpackConfig from '../webpack.config';
import passport from 'passport';

import './passport';

const app = express();
const port = 3000;
const RedisStore = connect(session);
const client = redis.createClient();
const compiler = webpack(webpackConfig);

getDotEnvConfig();

app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

app.use('/', express.static(path.join(__dirname, '../dist')));

app.use(
  middleware(compiler, {
    publicPath: '/__what'
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(require('webpack-hot-middleware')(compiler));

app.get('/auth/google', passport.authenticate('google', { scope: ['openid email'] }));

app.get(
  '/auth/google/callback*',
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/login/error'
  })
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export { app };
