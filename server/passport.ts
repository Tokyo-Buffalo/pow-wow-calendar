import passport from "passport";
import { OAuth2Strategy } from "passport-google-oauth";
import { config as loadDotenvConfig } from "dotenv";

loadDotenvConfig();

passport.serializeUser(function(user: any, done: any) {
  done(null, user);
});

passport.deserializeUser(function(user: any, done: any) {
  done(null, user);
});

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: `${process.env.BASE_URI}/auth/google/callback`,
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    async function(token: any, tokenSecret: any, profile: any, done: any) {
      done(null);
    }
  )
);