import { Router } from "express";
import { authGuard, roleGuard, validateData } from "../middleware/index.js";
import {
    getAllHomeworksCon,
    getHomeworkByIdCon,
    createHomeworkCon,
    updateHomeworkByIdCon,
    deleteHomeworkByIdCon,
} from "../controllers/index.js";
import { homeworkSchema } from "../validations/index.js";
export const homeworksRouter = Router();
homeworksRouter.get("/", authGuard, getAllHomeworksCon);
homeworksRouter.get("/:id", authGuard, getHomeworkByIdCon);
homeworksRouter.post(
    "/",
    authGuard,
    roleGuard("student"),
    validateData(homeworkSchema),
    createHomeworkCon
);
homeworksRouter.put(
    "/:id",
    authGuard,
    roleGuard("student"),
    updateHomeworkByIdCon
);
homeworksRouter.delete(
    "/:id",
    authGuard,
    roleGuard("teacher"),
    deleteHomeworkByIdCon
);
