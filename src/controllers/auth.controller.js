import {
    registerUserService,
    loginUserService,
    updateOTPService,
    changePasswordService,
} from "../services/index.js";
import { logger } from "../utils/index.js";
export const registerUserCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/auth/register METHOD: POST`);
        const newUser = await registerUserService(req.body);
        if (!newUser) {
            return res.status(400).send({ msg: "NOT REGISTERED" });
        }
        res.status(200).send({
            msg: "REGISTER",
            data: newUser,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/register METHOD: POST,Error: ${error.message}`
        );
        next(error.message);
    }
};
export const loginUserCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/auth/login METHOD: POST`);
        const login = await loginUserService(req.body);
        if (!login) {
            return res.status(400).send({ msg: "NOT LOGGED IN" });
        }
        res.status(200).json({
            accessToken: login.accessToken,
            refreshToken: login.refreshToken,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/login METHOD: POST,Error: ${error.message}`
        );
        next(error.message);
    }
};
export const refreshOTPCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/auth/updateOTP METHOD: POST`);
        const newOTP = await updateOTPService(req.body);
        if (!newOTP) {
            return res.status(400).send({
                msg: "YOUR OTP NOT UPDATED",
            });
        }
        res.status(200).send({
            msg: "OTP UPDATED",
            otp: newOTP,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/updateOTP METHOD: POST,Error: ${error.message}`
        );
        next(error.message);
    }
};
export const changeUserPasswordCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/auth/forget-password METHOD: POST`);
        const newPass = await changePasswordService(req.body);
        if (!newPass) {
            return res.status(400).send({
                msg: "YOUR PASSWORD NOT CHANGED",
            });
        }
        res.status(200).send({
            msg: "PASSWORD CHANGED",
            data: newPass,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/auth/forget-password METHOD: POST,Error: ${error.message}`
        );
        next(error.message);
    }
};
