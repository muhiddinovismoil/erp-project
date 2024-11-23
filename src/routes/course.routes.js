import { Router } from "express";
import {} from "../controllers/index.js";
export const courseRouter = Router();
courseRouter.get("/");
courseRouter.get("/:id");
courseRouter.post("/");
courseRouter.put("/:id");
courseRouter.delete("/:id");
