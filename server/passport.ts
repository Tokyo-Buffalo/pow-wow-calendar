import passport from "passport";
import { User } from "./controllers/User";
import { OAuth2Strategy } from "passport-google-oauth";
import { config as loadDotenvConfig } from "dotenv";

loadDotenvConfig();

passport.serializeUser(function (user: any, done: any) {
  done(null, user);
});

passport.deserializeUser(function (user: any, done: any) {
  done(null, user);
});

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: `${process.env.BASE_URI}/auth/google/callback`,
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async function (token: any, tokenSecret: any, profile: any, done: any) {
      const { sub, email, picture } = profile._json;
      const userClass = User.getInstance();
      const doesUserExist = await userClass.findUser(sub);

      if (!doesUserExist) {
        const user = await userClass.createUser(sub, email, picture);
        done(null, user);
      }

      if (doesUserExist) {
        const user = await userClass.getUser(sub);
        done(null, user);
      }

      done(null);
    }
  )
);
