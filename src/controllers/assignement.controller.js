import {
    getAllAssignementsService,
    getAssignementByIdService,
    createAssignementService,
    deleteAssignementByIdService,
} from "../services/index.js";
export const getAllAssignmentsCon = async (req, res, next) => {
    try {
        const data = await getAllAssignementsService();
        return res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};
export const getAssignmentByIdCon = async (req, res, next) => {
    try {
        const data = await getAssignementByIdService(req.params.id);
        return res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};
export const createAssignmentCon = async (req, res, next) => {
    try {
        const newData = await createAssignementService(req.body);
        return res.status(200).send(newData);
    } catch (error) {
        next(error);
    }
};
export const deleteAssignmentByIdCon = async (req, res, next) => {
    try {
        const newData = await deleteAssignementByIdService(req.params.id);
        return res.status(200).send(newData);
    } catch (error) {
        next(error);
    }
};
