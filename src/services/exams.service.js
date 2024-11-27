import { erp } from "../database/index.js";
// Exam Service
export const getAllExamsService = async () => {
    try {
        const data = await erp.select("*").from("exams");
        if (data.length == 0) {
            throw new Error("There is no any exams now");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getExamByIdService = async (id) => {
    try {
        const data = await erp.select("*").from("exams").where("id", id);
        if (!data[0]) {
            throw new Error("There is no any exams now");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createExamService = async (body) => {
    try {
        const data = await erp("exams")
            .insert({ ...body })
            .returning("*");
        if (!data[0]) {
            throw new Error("exams not created");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const updateExamByIdService = async (id, body) => {
    try {
        const data = await erp("exams")
            .update({ ...body, status: "tahrirlangan" })
            .where("id", id)
            .returning("*");
        if (!data[0]) {
            throw new Error("exams not Updated");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deleteExamByIdService = async (id) => {
    try {
        const data = await erp("exams").where("id", id).del().returning("*");
        if (!data[0]) {
            throw new Error("There is no any exams now");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
