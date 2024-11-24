import {
    getAllAssignementsService,
    getAssignementByIdService,
    createAssignementService,
    deleteAssignementByIdService,
} from "../services/index.js";
import { logger } from "../utils/index.js";
export const getAllAssignmentsCon = async (req, res, next) => {
    try {
        logger.info("Route: /api/v1/assignment METHOD: GET");
        const data = await getAllAssignementsService();
        if (!data) {
            return res.status(400).send({
                msg: "Assignments not found",
            });
        }
        return res.status(200).send({
            msg: "Assignments",
            assignment: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/assignment METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const getAssignmentByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/assignment/${req.params.id} METHOD: GET`);
        const data = await getAssignementByIdService(req.params.id);
        if (!data) {
            return res.status(400).send({
                msg: "Assignments not found",
            });
        }
        return res.status(200).send({
            msg: "Assignments",
            assignment: data,
        });
    } catch (error) {
        logger.errors(
            `Route: /api/v1/assignment/${req.params.id} METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const createAssignmentCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/assignment METHOD: POST`);
        const newData = await createAssignementService(req.body);
        if (!newData) {
            return res.status(400).send({
                msg: "NOT CREATED",
            });
        }
        return res.status(200).send({
            msg: "CREATED",
            newAssignment: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/assignment METHOD: POST,Error: ${error.message}`
        );
        next(error);
    }
};
export const deleteAssignmentByIdCon = async (req, res, next) => {
    try {
        logger.info(
            `Route: /api/v1/assignment/${req.params.id} METHOD: DELETE`
        );
        const newData = await deleteAssignementByIdService(req.params.id);
        if (!newData) {
            return res.status(400).send({
                msg: "NOT DELETED",
            });
        }
        return res.status(200).send({
            msg: "DELETED",
            deletedAssignment: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/assignment/${req.params.id} METHOD: DELETE,Error: ${error.message}`
        );
        next(error);
    }
};
