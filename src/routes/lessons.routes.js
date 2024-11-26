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
lessonsRouter.get("/", getAllLessonsCon);
lessonsRouter.get("/:id", getLessonByIdCon);
lessonsRouter.post("/", createLessonCon);
lessonsRouter.put("/:id", updateLessonByIdCon);
lessonsRouter.delete("/:id", deleteLessonByIdCon);
