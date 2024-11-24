import { Router } from "express";
import { studentsScheme } from "../validations/index.js";
import { authGuard, validateData, roleGuard } from "../middleware/index.js";
import {
    createStudentCon,
    deleteStudentByIdCon,
    getAllStudentsCon,
    getStudentByIdCon,
} from "../controllers/index.js";
export const studentRouter = Router();

studentRouter.get("/", authGuard, getAllStudentsCon);
studentRouter.get("/:id", authGuard, getStudentByIdCon);
studentRouter.post(
    "/",
    validateData(studentsScheme),
    authGuard,
    roleGuard("admin"),
    createStudentCon
);
studentRouter.delete(
    "/:id",
    authGuard,
    roleGuard("admin"),
    deleteStudentByIdCon
);
