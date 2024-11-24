import {
    createTeacherService,
    deleteTeacherByIdService,
    getAllTeachersService,
    getTeacherByIdService,
} from "../services/index.js";
import { logger } from "../utils/index.js";
export const getAllTeachersCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/teachers METHOD: GET`);
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
        logger.error(
            `Route: /api/v1/teachers METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const getTeacherByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/teachers/${req.params.id} METHOD: GET`);
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
        logger.error(
            `Route: /api/v1/teachers/${req.params.id} METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const createTeacherCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/teachers METHOD: POST`);
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
        logger.error(
            `Route: /api/v1/teachers METHOD: POST,Error: ${error.message}`
        );
        next(error);
    }
};
export const deleteTeacherByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/teachers/${req.params.id} METHOD: DELETE`);
        const data = await deleteTeacherByIdService(req.params.id);
        res.status(200).send({
            msg: "TEACHER DELETED",
            teachers: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/teachers/${req.params.id} METHOD: DELETE,Error: ${error.message}`
        );
        next(error);
    }
};
