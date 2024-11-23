import express from "express";
import morgan from "morgan";
import {
    assignmentRouter,
    authRouter,
    courseRouter,
    studentRouter,
    teachersRouter,
} from "./routes/index.js";
import { logger } from "./utils/index.js";
import { createTables } from "./database/index.js";
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/teachers", teachersRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/assignment", assignmentRouter);
app.use((err, req, res, next) => {
    if (err) {
        return res.send(err.message);
    }
    return res.send("Not found");
});
app.get("/api/v1/setup", async (req, res) => {
    try {
        await createTables();
        res.status(200).send({
            msg: "TABLES ARE CREATED SUCCESSFULLY",
        });
    } catch (error) {
        logger.error(error.message);
    }
});
export default app;
