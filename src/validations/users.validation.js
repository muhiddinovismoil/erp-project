import { z } from "zod";
export const usersScheme = z.object({
    name: z.string().min(5),
    email: z.string().email().min(5),
    password: z.string().min(8),
    date_created: z.preprocess(() => new Date(), z.date()).optional(),
    last_login: z.preprocess(() => new Date(), z.date()).optional(),
    role: z.enum(["student", "teacher", "admin"]).default("student").optional(),
});
