import { Router } from "express";
import {
    createAssignmentCon,
    deleteAssignmentByIdCon,
    getAllAssignmentsCon,
    getAssignmentByIdCon,
} from "../controllers/index.js";
import { assignementSchema } from "../validations/index.js";
import { authGuard, roleGuard, validateData } from "../middleware/index.js";
export const assignmentRouter = Router();
assignmentRouter.get("/", authGuard, getAllAssignmentsCon);
assignmentRouter.get("/:id", authGuard, getAssignmentByIdCon);
assignmentRouter.post(
    "/",
    validateData(assignementSchema),
    authGuard,
    roleGuard("admin"),
    createAssignmentCon
);
assignmentRouter.delete(
    "/:id",
    authGuard,
    roleGuard("admin"),
    deleteAssignmentByIdCon
);
