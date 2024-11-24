import {
    getAllCoursesService,
    getCourseByIdService,
    createCourseService,
    updateCourseByIdService,
    deleteCourseByIdService,
} from "../services/index.js";
import { logger } from "../utils/index.js";
export const getAllCoursesCon = async (req, res, next) => {
    try {
        logger.info("Route: /api/v1/courses METHOD: GET");
        const data = await getAllCoursesService();
        if (!data) {
            return res.status(400).send({
                msg: "Course Not Found",
            });
        }
        return res.status(200).send({
            msg: "Courses",
            AllCourses: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/courses METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const getCourseByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/courses/${req.params.id} METHOD: GET`);
        const data = await getCourseByIdService(req.params.id);
        if (!data) {
            return res.status(400).send({
                msg: "Course Not Found",
            });
        }
        return res.status(200).send({
            msg: "Course",
            Course: data,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/courses/${req.params.id} METHOD: GET,Error: ${error.message}`
        );
        next(error);
    }
};
export const createCourseCon = async (req, res, next) => {
    try {
        logger.info("Route: /api/v1/courses METHOD: POST");
        const newData = await createCourseService(req.body);
        if (!newData) {
            return res.status(400).send({
                msg: "COURSE NOT CREATED",
            });
        }
        return res.status(200).send({
            msg: "New Course",
            newCourse: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/courses METHOD: POST,Error: ${error.message}`
        );
        next(error);
    }
};
export const updateCourseByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/courses/${req.params.id} METHOD: PUT`);
        const newData = await updateCourseByIdService(req.params.id, req.body);
        if (!newData) {
            return res.status(400).send({
                msg: "COURSE NOT UPDATED",
            });
        }
        return res.status(200).send({
            msg: "Course Updated",
            updatedCourse: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/courses/${req.params.id} METHOD: PUT,Error: ${error.message}`
        );
        next(error);
    }
};
export const deleteCourseByIdCon = async (req, res, next) => {
    try {
        logger.info(`Route: /api/v1/courses/${req.params.id} METHOD: DELETE`);
        const newData = await deleteCourseByIdService(req.params.id);
        if (!newData) {
            return res.status(400).send({
                msg: "COURSE NOT DELETED",
            });
        }
        return res.status(200).send({
            msg: "Course Deleted",
            deletedCourse: newData,
        });
    } catch (error) {
        logger.error(
            `Route: /api/v1/courses/${req.params.id} METHOD: DELETE,Error: ${error.message}`
        );
        next(error);
    }
};
