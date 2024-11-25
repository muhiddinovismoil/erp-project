import { erp } from "../database/index.js";
export const Service = {
    findByEmail(email) {
        try {
            return erp.select("*").from("users").where("email", email);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    findById(id) {
        try {
            return erp.select("*").from("users").where("id", id);
        } catch (error) {
            throw new Error(error.message);
        }
    },
};
