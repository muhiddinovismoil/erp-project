import { erp } from "../database/index.js";
export const getAllAssignementsService = async () => {
    try {
        const data = await erp.select("*").from("assignment");
        if (data.length == 0) {
            throw new Error("There is not assignment");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getAssignementByIdService = async (id) => {
    try {
        const data = await erp.select("*").from("assignment").where("id", id);
        if (!data[0]) {
            throw new Error("There is not assignment");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createAssignementService = async (body) => {
    try {
        const data = await erp("assignment")
            .insert({ ...body })
            .returning("*");
        if (!data[0]) {
            throw new Error("Assignement not created");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deleteAssignementByIdService = async (id) => {
    try {
        const data = await erp("assignment")
            .where("id", id)
            .del()
            .returning("*");
        if (!data[0]) {
            throw new Error("Assignment not deleted");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
