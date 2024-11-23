import {
    registerUserService,
    loginUserService,
    updateOTPService,
    changePasswordService,
} from "../services/index.js";
export const registerUserCon = async (req, res, next) => {
    try {
        const newUser = await registerUserService(req.body);
        res.status(200).send({
            msg: "REGISTER",
            data: newUser,
        });
    } catch (error) {
        next(error.message);
    }
};
export const loginUserCon = async (req, res, next) => {
    try {
        const login = await loginUserService(req.body);
        res.status(200).json({
            accessToken: login.accessToken,
            refreshToken: login.refreshToken,
        });
    } catch (error) {
        next(error.message);
    }
};
export const refreshOTPCon = async (req, res, next) => {
    try {
        const newOTP = await updateOTPService(req.body);
        res.status(200).send({
            msg: "OTP UPDATED",
            otp: newOTP,
        });
    } catch (error) {
        next(error.message);
    }
};
export const changeUserPasswordCon = async (req, res, next) => {
    try {
        const newPass = await changePasswordService(req.body);
        res.status(200).send({
            msg: "PASSWORD CHANGED",
            data: newPass,
        });
    } catch (error) {
        next(error.message);
    }
};
