import { Router } from "express";
import { roleGuard, authGuard, validateData } from "../middleware/index.js";
import {
    getAllLessonsCon,
    getLessonByIdCon,
    createLessonCon,
    updateLessonByIdCon,
    deleteLessonByIdCon,
} from "../controllers/index.js";
import { lessonSchema } from "../validations/index.js";
export const lessonsRouter = Router();
lessonsRouter.get("/", authGuard, getAllLessonsCon);
lessonsRouter.get("/:id", authGuard, getLessonByIdCon);
lessonsRouter.post(
    "/",
    authGuard,
    roleGuard("teacher"),
    validateData(lessonSchema),
    createLessonCon
);
lessonsRouter.put("/:id", authGuard, roleGuard("teacher"), updateLessonByIdCon);
lessonsRouter.delete(
    "/:id",
    authGuard,
    roleGuard("teacher", "admin"),
    deleteLessonByIdCon
);
