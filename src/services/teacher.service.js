import { erp } from "../database/index.js";
export const getAllTeachersService = async () => {
    try {
        const data = await erp.select("*").from("teachers");
        if (data.length == 0) {
            throw new Error(`Teachers not found`);
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getTeacherByIdService = async (id) => {
    try {
        const data = await erp.select("*").from("teachers").where("id", id);
        if (!data[0]) {
            throw new Error("Teacher not found");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createTeacherService = async (body) => {
    try {
        const registeredUsers = await erp.select("*").from("users");
        for (let i = 0; i < registeredUsers.length; i++) {
            if (
                registeredUsers[i].role == "teacher" &&
                body.user_id == registeredUsers[i].id
            ) {
                const data = await erp("teachers")
                    .insert({ ...body })
                    .returning("*");
                return data[0];
            }
        }
    } catch (error) {
        throw new Error(error.message);
    }
};
export const deleteTeacherByIdService = async (id) => {
    try {
        const deletedTeacher = await erp("teachers")
            .where("id", id)
            .del()
            .returning("*");
        return deletedTeacher[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
