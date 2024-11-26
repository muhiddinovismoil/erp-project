import { erp } from "../database/index.js";
export const getAllHomeworksService = async () => {
    try {
        const data = await erp.select("*").from("homeworks");
        if (data.length == 0) {
            throw new Error("There is no any homework now");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getHomeworkByIdService = async (id) => {
    try {
        const data = await erp.select("*").from("homeworks").where("id", id);
        if (!data[0]) {
            throw new Error("There is no any homework now");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createHomeworkService = async (body) => {
    try {
        const data = await erp("homeworks")
            .insert({ ...body })
            .returning("*");
        if (!data[0]) {
            throw new Error("homework not created");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const updateHomeworkByIdService = async (id, body) => {
    try {
        const data = await erp("homeworks")
            .update({ ...body, status: "tahrirlangan" })
            .where("id", id)
            .returning("*");
        if (!data[0]) {
            throw new Error("homework not Updated");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deleteHomeworkByIdService = async (id) => {
    try {
        const data = await erp("homeworks")
            .where("id", id)
            .del()
            .returning("*");
        if (!data[0]) {
            throw new Error("There is no any homework now");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
