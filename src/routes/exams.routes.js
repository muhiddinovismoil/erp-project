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
examsRouter.get("/", authGuard, getAllExamsCon);
examsRouter.get("/:id", authGuard, getExamByIdCon);
examsRouter.post("/", validateData(examsSchema), authGuard, createExamCon);
examsRouter.put("/:id", authGuard, roleGuard("teacher"), updateExamByIdCon);
examsRouter.delete(
    "/:id",
    authGuard,
    roleGuard("teacher", "admin"),
    deleteExamByIdCon
);
