import jwt from "jsonwebtoken";
import { web } from "../../config/index.js";
import { logger } from "../logger.js";
const { sign, verify } = jwt;
export const generateToken = async (prop, payload) => {
    try {
        const option = web[prop];
        const token = await sign(payload, option.secret, {
            expiresIn: option.expiresIn,
        });
        return token;
    } catch (error) {
        logger.error(error.message);
        return error.message;
    }
};
export const verifyToken = async (prop, token) => {
    try {
        const option = web[prop];
        const result = await verify(token, option.secret);
        return {
            ...result,
            success: true,
        };
    } catch (error) {
        if (error.message === "invalid token") {
            return {
                success: false,
            };
        }
    }
};
