import { erp } from "../database/index.js";
// Lessons Service
export const getAllLessonsService = async () => {
    try {
        const data = await erp.select("*").from("lessons");
        if (data.length == 0) {
            throw new Error("There is no any lessons now");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getLessonByIdService = async (id) => {
    try {
        const data = await erp.select("*").from("lessons").where("id", id);
        if (!data[0]) {
            throw new Error("There is no any lessons now");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createLessonService = async (body) => {
    try {
        const data = await erp("lessons")
            .insert({ ...body })
            .returning("*");
        if (!data[0]) {
            throw new Error("lessons not created");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const updateLessonByIdService = async (id, body) => {
    try {
        const data = await erp("lessons")
            .update({ ...body })
            .where("id", id)
            .returning("*");
        if (!data[0]) {
            throw new Error("lessons not Updated");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deleteLessonByIdService = async (id) => {
    try {
        const data = await erp("lessons").where("id", id).del().returning("*");
        if (!data[0]) {
            throw new Error("There is no any lessons now");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
