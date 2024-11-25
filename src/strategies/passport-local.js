import passport from "passport";
import LocalStrategy from "passport-local";
import { Service } from "../services/index.js";
export default passport.use(
    new LocalStrategy({ usernameField: "email" }, async function (
        email,
        password,
        done
    ) {
        try {
            const currentUser = await Service.findByEmail(email);
            if (!currentUser) {
                return done(null, false, {
                    message: "Incorrect email or password",
                });
            }
            done(null, currentUser[0]);
        } catch (error) {
            done(null, error);
        }
    })
);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    try {
        const currentUser = Service.findById(id);
        done(null, currentUser);
    } catch (error) {
        done(null, error);
    }
});
