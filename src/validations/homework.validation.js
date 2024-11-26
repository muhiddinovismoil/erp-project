import { z } from "zod";

export const homeworkSchema = z
    .object({
        title: z.string().min(1, { message: "Title is required." }),
        description: z.string().min(1, { message: "Description is required." }),
        status: z.enum(["jarayonda", "tahrirlangan"]).default("jarayonda"),
        start_time: z.preprocess((arg) => new Date(arg), z.date()),
        end_time: z.preprocess((arg) => new Date(arg), z.date()),
    })
    .refine((data) => data.end_time > data.start_time, {
        message: "End time must be greater than start time.",
        path: ["end_time"],
    });
