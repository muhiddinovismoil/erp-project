import { erp } from "../database/index.js";
export const getAllStudentsService = async () => {
    try {
        const data = await erp.select("*").from("students");
        if (data.length == 0) {
            throw new Error(`Students not found`);
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const getStudentByIdService = async (id) => {
    try {
        const data = await erp.select("*").from("students").where("id", id);
        if (!data[0]) {
            throw new Error("Student not found");
        }
        return data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
export const createStudentService = async (body) => {
    try {
        const registeredUsers = await erp.select("*").from("users");
        for (let i = 0; i < registeredUsers.length; i++) {
            if (
                registeredUsers[i].role == "student" &&
                body.user_id == registeredUsers[i].id
            ) {
                const data = await erp("students")
                    .insert({ ...body })
                    .returning("*");
                console.log(data[0]);
                return data[0];
            }
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteStudentByIdService = async (id) => {
    try {
        const deletedStudent = await erp("students")
            .where("id", id)
            .del()
            .returning("*");
        return deletedStudent[0];
    } catch (error) {
        throw new Error(error.message);
    }
};
