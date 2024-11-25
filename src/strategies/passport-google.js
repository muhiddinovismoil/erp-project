import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { application } from "../config/index.js";
export default passport.use(
    new Strategy(
        {
            clientID: application.clinetId,
            clientSecret: application.clientSecret,
            callbackURL: "http://localhost:3000/api/v1/user/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            console.log({ accessToken, refreshToken, profile, done });
            return done(null, profile);
        }
    )
);
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((obj, done) => {
    done(null, obj);
});
