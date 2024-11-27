import erp from "./database.js";
import { logger } from "../utils/logger.js";
export const createTables = async () => {
    try {
        if (!(await erp.schema.hasTable("users"))) {
            await erp.schema.createTable("users", (table) => {
                table.increments("id").primary();
                table.string("name").notNullable();
                table.string("email").unique().notNullable();
                table.string("password").notNullable();
                table
                    .timestamp("date_created")
                    .defaultTo(erp.fn.now())
                    .notNullable();
                table
                    .timestamp("last_login")
                    .defaultTo(erp.fn.now())
                    .notNullable();
                table
                    .enu("role", ["student", "teacher", "admin"])
                    .defaultTo("student");
            });
            logger.info("Users Table Created");
        }
        if (!(await erp.schema.hasTable("teachers"))) {
            await erp.schema.createTable("teachers", (table) => {
                table.increments("id").primary();
                table
                    .integer("user_id")
                    .unsigned()
                    .references("id")
                    .inTable("users")
                    .notNullable();
            });
            logger.info(`Teachers Table Created`);
        }
        if (!(await erp.schema.hasTable("students"))) {
            await erp.schema.createTable("students", (table) => {
                table.increments("id").primary();
                table.boolean("permission").defaultTo(false);
                table
                    .integer("user_id")
                    .unsigned()
                    .references("id")
                    .inTable("users")
                    .notNullable();
            });
            logger.info(`Students Table Created`);
        }
        if (!(await erp.schema.hasTable("homeworks"))) {
            await erp.schema.createTable("homeworks", (table) => {
                table.increments("id").primary();
                table.string("title").notNullable();
                table.string("description");
                table.string("homework_file");
                table
                    .enu("status", ["jarayonda", "tahrirlangan"])
                    .defaultTo("jarayonda");
                table.timestamp("start_time").notNullable();
                table.timestamp("end_time").notNullable();
            });
            logger.info(`Homeworks Table Created`);
        }
        if (!(await erp.schema.hasTable("lessons"))) {
            await erp.schema.createTable("lessons", (table) => {
                table.increments("id").primary();
                table.string("title").notNullable();
                table.string("lesson_video").notNullable();
                table.string("comment");
                table.integer("rating").notNullable();
                table
                    .integer("homework_id")
                    .unsigned()
                    .references("id")
                    .inTable("homeworks")
                    .notNullable();
                table
                    .timestamp("created_at")
                    .defaultTo(erp.fn.now())
                    .notNullable();
                table
                    .timestamp("updated_at")
                    .defaultTo(erp.fn.now())
                    .notNullable();
            });
            logger.info(`Lessons Table Created`);
        }
        if (!(await erp.schema.hasTable("exams"))) {
            await erp.schema.createTable("exams", (table) => {
                table.increments("id").primary();
                table.string("title").notNullable();
                table.string("file").notNullable();
                table.string("comment").notNullable();
                table
                    .enu("status", ["jarayonda", "tahrirlangan"])
                    .defaultTo("jarayonda");
                table.timestamp("start_time").notNullable();
                table.timestamp("end_time").notNullable();
            });
            logger.info(`Exams Table Created`);
        }
        if (!(await erp.schema.hasTable("courses"))) {
            await erp.schema.createTable("courses", (table) => {
                table.increments("id").primary();
                table.string("name").notNullable();
                table.string("desc").notNullable();
                table
                    .integer("lesson_id")
                    .unsigned()
                    .references("id")
                    .inTable("lessons")
                    .notNullable();
                table
                    .integer("exam_id")
                    .unsigned()
                    .references("id")
                    .inTable("exams")
                    .notNullable();
                table
                    .timestamp("start_time")
                    .defaultTo(erp.fn.now())
                    .notNullable();
                table
                    .timestamp("end_time")
                    .defaultTo(erp.fn.now())
                    .notNullable();
            });
            logger.info(`Courses Table Created`);
        }
        if (!(await erp.schema.hasTable("assignment"))) {
            await erp.schema.createTable("assignment", (table) => {
                table.increments("id").primary();
                table
                    .integer("course_id")
                    .unsigned()
                    .references("id")
                    .inTable("courses")
                    .notNullable();
                table
                    .integer("student_id")
                    .unsigned()
                    .references("id")
                    .inTable("students")
                    .notNullable();
                table
                    .integer("teacher_id")
                    .unsigned()
                    .references("id")
                    .inTable("teachers")
                    .notNullable();
            });
            logger.info(`Assignment Table Created`);
        }
        if (!(await erp.schema.hasTable("otp_codes"))) {
            await erp.schema.createTable("otp_codes", (table) => {
                table.increments("id").primary();
                table.string("otp_code").notNullable();
                table
                    .integer("user_id")
                    .unsigned()
                    .references("id")
                    .inTable("users")
                    .notNullable();
            });
            logger.info("OTP Codes table created.");
        }
    } catch (error) {
        logger.error(error.message);
        console.log(error.message);
        throw new Error(error);
    }
};
