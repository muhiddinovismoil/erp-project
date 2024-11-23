import { Router } from "express";
import {
    createAssignmentCon,
    deleteAssignmentByIdCon,
    getAllAssignmentsCon,
    getAssignmentByIdCon,
} from "../controllers/index.js";
export const assignmentRouter = Router();
assignmentRouter.get("/", getAllAssignmentsCon);
assignmentRouter.get("/:id", getAssignmentByIdCon);
assignmentRouter.post("/", createAssignmentCon);
assignmentRouter.delete("/:id", deleteAssignmentByIdCon);
