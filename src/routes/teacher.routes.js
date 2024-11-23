import { Router } from "express";
import { authGuard, roleGuard } from "../middleware/index.js";
import {
    createTeacherCon,
    deleteTeacherByIdCon,
    getAllTeachersCon,
    getTeacherByIdCon,
} from "../controllers/index.js";
export const teachersRouter = Router();

teachersRouter.get("/", authGuard, getAllTeachersCon);
teachersRouter.get("/:id", authGuard, getTeacherByIdCon);
teachersRouter.post("/", authGuard, roleGuard("admin"), createTeacherCon);
teachersRouter.delete(
    "/:id",
    authGuard,
    roleGuard("admin"),
    deleteTeacherByIdCon
);
