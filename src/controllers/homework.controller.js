import {
    getAllHomeworksService,
    getHomeworkByIdService,
    createHomeworkService,
    updateHomeworkByIdService,
    deleteHomeworkByIdService,
} from "../services/index.js";
import { logger } from "../utils/index.js";
// Homework Controller
export const getAllHomeworksCon = async (req, res, next) => {
    try {
        logger.info("Route: /api/v1/homeworks METHOD: GET");
        const data = await getAllHomeworksService();
        if (!data) {
            return res.status(400).send({
                msg: "Homework Not Found",
            });
        }
        return res.status(200).send({
            msg: "Homeworks",
            AllHomeworks: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/homeworks METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const getHomeworkByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/homeworks/${req.params.id} METHOD: GET`);
        const data = await getHomeworkByIdService(req.params.id);
        if (!data) {
            return res.status(400).send({
                msg: "Homework Not Found",
            });
        }
        return res.status(200).send({
            msg: "Homework",
            Homework: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/homeworks/${req.params.id} METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const createHomeworkCon = async (req, res, next) => {
    try {
        logger.info("Route: /api/v1/homeworks METHOD: POST");
        const newData = await createHomeworkService(req.body);
        if (!newData) {
            return res.status(400).send({
                msg: "HOMEWORK NOT CREATED",
            });
        }
        return res.status(200).send({
            msg: "New Homework",
            newHomework: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/homeworks METHOD: POST,Error: ${error.message}`
        );
        next(error);
    }
};
export const updateHomeworkByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/homeworks/${req.params.id} METHOD: PUT`);
        const newData = await updateHomeworkByIdService(
            req.params.id,
            req.body
        );
        if (!newData) {
            return res.status(400).send({
                msg: "HOMEWORK NOT UPDATED",
            });
        }
        return res.status(200).send({
            msg: "Homework Updated",
            updatedHomework: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/homeworks/${req.params.id} METHOD: PUT,Error: ${error.message}`
        );
        next(error);
    }
};
export const deleteHomeworkByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/homeworks/${req.params.id} METHOD: DELETE`);
        const newData = await deleteHomeworkByIdService(req.params.id);
        if (!newData) {
            return res.status(400).send({
                msg: "HOMEWORK NOT DELETED",
            });
        }
        return res.status(200).send({
            msg: "Homework Deleted",
            deletedHomework: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/homeworks/${req.params.id} METHOD: DELETE,Error: ${error.message}`
        );
        next(error);
    }
};
