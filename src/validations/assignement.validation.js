import { z } from "zod";
export const assignementSchema = z.object({
    course_id: z.number(),
    student_id: z.number(),
    teacher_id: z.number(),
});
