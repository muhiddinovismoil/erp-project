import { Router } from "express";
import {
    createCourseCon,
    deleteCourseByIdCon,
    getAllCoursesCon,
    getCourseByIdCon,
    updateCourseByIdCon,
} from "../controllers/index.js";
import { coursesScheme } from "../validations/index.js";
import { authGuard, roleGuard, validateData } from "../middleware/index.js";
export const courseRouter = Router();
courseRouter.get("/", authGuard, getAllCoursesCon);
courseRouter.get("/:id", authGuard, getCourseByIdCon);
courseRouter.post(
    "/",
    validateData(coursesScheme),
    authGuard,
    roleGuard("admin"),
    createCourseCon
);
courseRouter.put("/:id", authGuard, roleGuard("admin"), updateCourseByIdCon);
courseRouter.delete("/:id", authGuard, roleGuard("admin"), deleteCourseByIdCon);
