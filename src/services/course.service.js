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
        if (!data[0]) {
            throw new Error("There is no any course now");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createCourseService = async (body) => {
    try {
        const data = await erp("courses")
            .insert({ ...body })
            .returning("*");
        if (!data[0]) {
            throw new Error("Course not created");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const updateCourseByIdService = async (id, body) => {
    try {
        const data = await erp("courses")
            .update({ ...body })
            .where("id", id)
            .returning("*");
        if (!data[0]) {
            throw new Error("Course not Updated");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deleteCourseByIdService = async (id) => {
    try {
        const data = await erp("courses").where("id", id).del().returning("*");
        if (!data[0]) {
            throw new Error("There is no any course now");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
