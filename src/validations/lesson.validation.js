import { z } from "zod";
export const lessonSchema = z.object({
    title: z.string().min(1),
    lesson_video: z.string().min(1),
    comment: z.string().optional(),
    rating: z.number(),
    homework_id: z.number(),
});
