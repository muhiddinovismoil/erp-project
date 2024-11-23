import { Router } from "express";
import { authGuard, roleGuard } from "../middleware/index.js";
import {
    createStudentCon,
    deleteStudentByIdCon,
    getAllStudentsCon,
    getStudentByIdCon,
} from "../controllers/index.js";
export const studentRouter = Router();

studentRouter.get("/", authGuard, getAllStudentsCon);
studentRouter.get("/:id", authGuard, getStudentByIdCon);
studentRouter.post("/", authGuard, roleGuard("admin"), createStudentCon);
studentRouter.delete(
    "/:id",
    authGuard,
    roleGuard("admin"),
    deleteStudentByIdCon
);
