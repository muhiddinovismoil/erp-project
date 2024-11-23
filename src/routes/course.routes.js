import { Router } from "express";
import {
    createCourseCon,
    deleteCourseByIdCon,
    getAllCoursesCon,
    getCourseByIdCon,
    updateCourseByIdCon,
} from "../controllers/index.js";
export const courseRouter = Router();
courseRouter.get("/", getAllCoursesCon);
courseRouter.get("/:id", getCourseByIdCon);
courseRouter.post("/", createCourseCon);
courseRouter.put("/:id", updateCourseByIdCon);
courseRouter.delete("/:id", deleteCourseByIdCon);
