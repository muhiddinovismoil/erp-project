import { erp } from "../database/index.js";
export const getAllCoursesService = async () => {
    try {
        const data = await erp.select("*").from("courses");
        if (data.length == 0) {
            throw new Error("There is no any course now");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getCourseByIdService = async (id) => {
    try {
        const data = await erp.select("*").from("courses").where("id", id);
        if (data.length == 0) {
            throw new Error("There is no any course now");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createCourseService = async () => {
    try {
        const data = await erp.select("*").from("courses");
        if (data.length == 0) {
            throw new Error("There is no any course now");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const updateCourseByIdService = async () => {
    try {
        const data = await erp.select("*").from("courses");
        if (data.length == 0) {
            throw new Error("There is no any course now");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deleteCourseByIdService = async () => {
    try {
        const data = await erp.select("*").from("courses");
        if (data.length == 0) {
            throw new Error("There is no any course now");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
