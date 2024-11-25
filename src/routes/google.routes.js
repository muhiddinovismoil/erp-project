import { Router } from "express";
import passport from "passport";
import "../strategies/passport-google.js";
export const googleRouter = Router();

googleRouter.get("/user/profile", (req, res) => {
    res.send("ok");
});
googleRouter.get(
    "/user/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);
googleRouter.get(
    "/user/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    function (req, res) {
        res.redirect("/api/v1/user/profile");
    }
);
