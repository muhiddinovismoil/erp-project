import {
    createStudentService,
    deleteStudentByIdService,
    getAllStudentsService,
    getStudentByIdService,
} from "../services/index.js";
export const getAllStudentsCon = async (req, res, next) => {
    try {
        const data = await getAllStudentsService();
        if (!data) {
            return res.status(400).send({
                msg: "Student Not Found",
            });
        }
        res.status(200).send({
            msg: "ALL STUDENTS",
            students: data,
        });
    } catch (error) {
        next(error);
    }
};
export const getStudentByIdCon = async (req, res, next) => {
    try {
        const data = await getStudentByIdService(req.params.id);
        if (!data) {
            return res.status(400).send({
                msg: "Student Not Found",
            });
        }
        res.status(200).send({
            msg: "STUDENT FOUND",
            student: data,
        });
    } catch (error) {
        next(error);
    }
};
export const createStudentCon = async (req, res, next) => {
    try {
        const data = await createStudentService(req.body);
        if (!data) {
            return res.status(400).send({
                msg: "STUDENT NOT CREATED",
                student: data,
            });
        }
        res.status(200).send({
            msg: "STUDENT CREATED",
            student: data,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteStudentByIdCon = async (req, res, next) => {
    try {
        const data = await deleteStudentByIdService(req.params.id);
        if (!data) {
            return res.status(400).send({
                msg: "STUDENT NOT DELETED",
            });
        }
        res.status(200).send({
            msg: "STUDENT DELETED",
            student: data,
        });
    } catch (error) {
        next(error);
    }
};
