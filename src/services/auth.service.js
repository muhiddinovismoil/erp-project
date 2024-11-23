import {
    generateOtp,
    generateToken,
    hashPassword,
    comparePassword,
    logger,
    sendMail,
} from "../utils/index.js";
import { erp } from "../database/index.js";
export const getUserByEmailService = async (email) => {
    try {
        const data = await erp.select("*").from("users").where("email", email);
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const registerUserService = async (user) => {
    try {
        const check = await getUserByEmailService(user.email);
        if (check) {
            throw new Error("User email is already in use");
        }
        const otp = generateOtp();
        try {
            await sendMail(
                user.email,
                `OTP CODE`,
                `<h1>Your otp code is: ${otp}<br><p>Don't share it with others</p></h1>`
            );
        } catch (error) {
            throw new Error(`Failed to send OTP to email: ${error.message}`);
        }
        const hashedPassword = await hashPassword(user.password);
        const [newUser] = await erp("users")
            .insert({
                name: user.name,
                email: user.email,
                password: hashedPassword,
                role: user.role || "user",
            })
            .returning("*");
        await erp("otp_codes").insert({
            user_id: newUser.id,
            otp_code: otp,
        });
        return newUser;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const loginUserService = async (user) => {
    try {
        const currentUser = await getUserByEmailService(user.email);
        if (!currentUser) {
            throw new Error("User not found");
        }
        const passIsEqual = await comparePassword(
            user.password,
            currentUser.password
        );
        if (!passIsEqual) {
            throw new Error("User password or email wrong");
        }
        const accessToken = await generateToken("access", {
            sub: currentUser.id,
            email: currentUser.email,
            role: currentUser.role,
            username: currentUser.username,
        });
        const refreshToken = await generateToken("refresh", {
            sub: currentUser.id,
            email: currentUser.email,
            role: currentUser.role,
        });
        return {
            accessToken,
            refreshToken,
        };
    } catch (error) {
        logger.error(error);
        return error;
    }
};
export const updateOTPService = async (data) => {
    try {
        const { email } = data;
        const currentUser = await getUserByEmailService(email);
        if (!currentUser) {
            throw new Error("User not found");
        }
        const oneTimePassword = generateOtp();
        await sendMail(email, "OTP", `THIS IS YOUR OTP: ${oneTimePassword}`);
        await erp("otp_codes")
            .where("user_id", currentUser.id)
            .update({ otp_code: oneTimePassword });
        return {
            msg: "New OTP sended to your email",
        };
    } catch (error) {
        logger.error(error);
        return error;
    }
};
export const changePasswordService = async (userData) => {
    try {
        const { email, otp, newPassword } = userData;
        const currentUser = await getUserByEmailService(email);
        const otpdata = await erp
            .select("*")
            .from("otp_codes")
            .where("user_id", currentUser.id);
        if (otpdata[0].otp_code != otp) {
            throw new Error(`Please enter your OTP CODE`);
        }
        const hashedPassword = await hashPassword(newPassword);
        await erp("users")
            .where("id", currentUser.id)
            .update({ password: hashedPassword });
        return {
            msg: "Your password changed successfully",
        };
    } catch (error) {
        logger.error(error);
        return error;
    }
};
