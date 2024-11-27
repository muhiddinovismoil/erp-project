import {
    getAllExamsService,
    getExamByIdService,
    createExamService,
    updateExamByIdService,
    deleteExamByIdService,
} from "../services/index.js";
import { logger } from "../utils/index.js";
// Exams Controller
export const getAllExamsCon = async (req, res, next) => {
    try {
        logger.info("Route: /api/v1/exams METHOD: GET");
        const data = await getAllExamsService();
        if (!data) {
            return res.status(400).send({
                msg: "Exams Not Found",
            });
        }
        return res.status(200).send({
            msg: "Exams",
            AllExams: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/exams METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const getExamByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/exams/${req.params.id} METHOD: GET`);
        const data = await getExamByIdService(req.params.id);
        if (!data) {
            return res.status(400).send({
                msg: "Exam Not Found",
            });
        }
        return res.status(200).send({
            msg: "Exam",
            Exam: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/exams/${req.params.id} METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const createExamCon = async (req, res, next) => {
    try {
        logger.info("Route: /api/v1/exams METHOD: POST");
        const newData = await createExamService(req.body);
        if (!newData) {
            return res.status(400).send({
                msg: "EXAM NOT CREATED",
            });
        }
        return res.status(200).send({
            msg: "New Exam",
            newExam: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/exams METHOD: POST,Error: ${error.message}`
        );
        next(error);
    }
};
export const updateExamByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/exams/${req.params.id} METHOD: PUT`);
        const newData = await updateExamByIdService(req.params.id, req.body);
        if (!newData) {
            return res.status(400).send({
                msg: "EXAM NOT UPDATED",
            });
        }
        return res.status(200).send({
            msg: "Exam Updated",
            updatedExam: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/exams/${req.params.id} METHOD: PUT,Error: ${error.message}`
        );
        next(error);
    }
};
export const deleteExamByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/exams/${req.params.id} METHOD: DELETE`);
        const newData = await deleteExamByIdService(req.params.id);
        if (!newData) {
            return res.status(400).send({
                msg: "EXAM NOT DELETED",
            });
        }
        return res.status(200).send({
            msg: "Exam Deleted",
            deletedExam: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/exams/${req.params.id} METHOD: DELETE,Error: ${error.message}`
        );
        next(error);
    }
};
