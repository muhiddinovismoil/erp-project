import {
    createTeacherService,
    deleteTeacherByIdService,
    getAllTeachersService,
    getTeacherByIdService,
} from "../services/index.js";
export const getAllTeachersCon = async (req, res, next) => {
    try {
        const data = await getAllTeachersService();
        if (!data) {
            return res.status(400).send({
                msg: "Teacher not found",
            });
        }
        res.status(200).send({
            msg: "ALL TEACHERS",
            teachers: data,
        });
    } catch (error) {
        next(error);
    }
};
export const getTeacherByIdCon = async (req, res, next) => {
    try {
        const data = await getTeacherByIdService(req.params.id);
        if (!data) {
            return res.status(400).send({
                msg: "Teacher not found",
            });
        }
        res.status(200).send({
            msg: "TEACHER FOUND",
            teachers: data,
        });
    } catch (error) {
        next(error);
    }
};
export const createTeacherCon = async (req, res, next) => {
    try {
        const data = await createTeacherService(req.body);
        if (!data) {
            return res.status(400).send({
                msg: "TEACHERS NOT CREATED",
                teachers: data,
            });
        }
        res.status(200).send({
            msg: "TEACHERS CREATED",
            teachers: data,
        });
    } catch (error) {
        next(error);
    }
};
export const deleteTeacherByIdCon = async (req, res, next) => {
    try {
        const data = await deleteTeacherByIdService(req.params.id);
        res.status(200).send({
            msg: "TEACHER DELETED",
            teachers: data,
        });
    } catch (error) {
        next(error);
    }
};
