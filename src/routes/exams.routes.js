import { Router } from "express";
import {
    getAllExamsCon,
    getExamByIdCon,
    createExamCon,
    updateExamByIdCon,
    deleteExamByIdCon,
} from "../controllers/index.js";
import { authGuard, roleGuard, validateData } from "../middleware/index.js";
import { examsSchema } from "../validations/index.js";
export const examsRouter = Router();
examsRouter.get("/", getAllExamsCon);
examsRouter.get("/:id", getExamByIdCon);
examsRouter.post("/", createExamCon);
examsRouter.put("/:id", updateExamByIdCon);
examsRouter.delete("/:id", deleteExamByIdCon);
