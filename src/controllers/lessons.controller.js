import {
    getAllLessonsService,
    getLessonByIdService,
    createLessonService,
    updateLessonByIdService,
    deleteLessonByIdService,
} from "../services/index.js";
import { logger } from "../utils/index.js";
// Lessons Controller
export const getAllLessonsCon = async (req, res, next) => {
    try {
        logger.info("Route: /api/v1/lessons METHOD: GET");
        const data = await getAllLessonsService();
        if (!data) {
            return res.status(400).send({
                msg: "Lessons Not Found",
            });
        }
        return res.status(200).send({
            msg: "Lessons",
            AllLessons: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/lessons METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const getLessonByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/lessons/${req.params.id} METHOD: GET`);
        const data = await getLessonByIdService(req.params.id);
        if (!data) {
            return res.status(400).send({
                msg: "Lesson Not Found",
            });
        }
        return res.status(200).send({
            msg: "Lesson",
            Lesson: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/lessons/${req.params.id} METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const createLessonCon = async (req, res, next) => {
    try {
        logger.info("Route: /api/v1/lessons METHOD: POST");
        const newData = await createLessonService(req.body);
        if (!newData) {
            return res.status(400).send({
                msg: "LESSON NOT CREATED",
            });
        }
        return res.status(200).send({
            msg: "New Lesson",
            newLesson: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/lessons METHOD: POST,Error: ${error.message}`
        );
        next(error);
    }
};
export const updateLessonByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/lessons/${req.params.id} METHOD: PUT`);
        const newData = await updateLessonByIdService(req.params.id, req.body);
        if (!newData) {
            return res.status(400).send({
                msg: "LESSONS NOT UPDATED",
            });
        }
        return res.status(200).send({
            msg: "Lesson Updated",
            updatedLesson: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/lessons/${req.params.id} METHOD: PUT,Error: ${error.message}`
        );
        next(error);
    }
};
export const deleteLessonByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/lessons/${req.params.id} METHOD: DELETE`);
        const newData = await deleteLessonByIdService(req.params.id);
        if (!newData) {
            return res.status(400).send({
                msg: "LESSON NOT DELETED",
            });
        }
        return res.status(200).send({
            msg: "Lesson Deleted",
            deletedLesson: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/lessons/${req.params.id} METHOD: DELETE,Error: ${error.message}`
        );
        next(error);
    }
};
