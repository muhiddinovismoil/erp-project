import {
    getAllCoursesService,
    getCourseByIdService,
    createCourseService,
    updateCourseByIdService,
    deleteCourseByIdService,
} from "../services/index.js";
export const getAllCoursesCon = async (req, res, next) => {
    try {
        const data = await getAllCoursesService();
        return res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};
export const getCourseByIdCon = async (req, res, next) => {
    try {
        const data = await getCourseByIdService(req.params.id);
        return res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};
export const createCourseCon = async (req, res, next) => {
    try {
        const newData = await createCourseService(req.body);
        return res.status(200).send(newData);
    } catch (error) {
        next(error);
    }
};
export const updateCourseByIdCon = async (req, res, next) => {
    try {
        const newData = await updateCourseByIdService(req.params.id, req.body);
        return res.status(200).send(newData);
    } catch (error) {
        next(error);
    }
};
export const deleteCourseByIdCon = async (req, res, next) => {
    try {
        const newData = await deleteCourseByIdService(req.params.id);
        return res.status(200).send(newData);
    } catch (error) {
        next(error);
    }
};
