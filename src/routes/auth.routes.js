import { Router } from "express";
import {
    registerUserCon,
    loginUserCon,
    changeUserPasswordCon,
    refreshOTPCon,
} from "../controllers/index.js";
import { usersScheme } from "../validations/index.js";
import { validateData } from "../middleware/index.js";
export const authRouter = Router();
authRouter.post("/register", validateData(usersScheme), registerUserCon);
authRouter.post("/login", loginUserCon);
authRouter.post("/updateOTP", refreshOTPCon);
authRouter.post("/forget-password", changeUserPasswordCon);
