import {
    createStudentService,
    deleteStudentByIdService,
    getAllStudentsService,
    getStudentByIdService,
} from "../services/index.js";
import { logger } from "../utils/index.js";
export const getAllStudentsCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/students/ METHOD: GET`);
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
        logger.error(
            `Route: /api/v1/students/ METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const getStudentByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/students/${req.params.id} METHOD: GET`);
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
        logger.error(
            `Route: /api/v1/students/${req.params.id} METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const createStudentCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/students/ METHOD: POST`);
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
        logger.error(
            `Route: /api/v1/students/ METHOD: POST,Error: ${error.message}`
        );
        next(error);
    }
};

export const deleteStudentByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/students/${req.params.id} METHOD: DELETE`);
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
        logger.error(
            `Route: /api/v1/students/${req.params.id} METHOD: DELETE,Error: ${error.message}`
        );
        next(error);
    }
};
