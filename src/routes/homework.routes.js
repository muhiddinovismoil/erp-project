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
homeworksRouter.get("/", getAllHomeworksCon);
homeworksRouter.get("/:id", getHomeworkByIdCon);
homeworksRouter.post("/", validateData(homeworkSchema), createHomeworkCon);
homeworksRouter.put("/:id", updateHomeworkByIdCon);
homeworksRouter.delete("/:id", deleteHomeworkByIdCon);
