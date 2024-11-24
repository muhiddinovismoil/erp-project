import { Router } from "express";
import { authGuard, roleGuard, validateData } from "../middleware/index.js";
import {
    createTeacherCon,
    deleteTeacherByIdCon,
    getAllTeachersCon,
    getTeacherByIdCon,
} from "../controllers/index.js";
import { teachersScheme } from "../validations/index.js";
export const teachersRouter = Router();

teachersRouter.get("/", authGuard, getAllTeachersCon);
teachersRouter.get("/:id", authGuard, getTeacherByIdCon);
teachersRouter.post(
    "/",
    validateData(teachersScheme),
    authGuard,
    roleGuard("admin"),
    createTeacherCon
);
teachersRouter.delete(
    "/:id",
    authGuard,
    roleGuard("admin"),
    deleteTeacherByIdCon
);
