import { z } from "zod";
export const coursesScheme = z.object({
    name: z.string().min(1),
    desc: z.string().min(1),
    start_time: z.preprocess(() => new Date(), z.date()).optional(),
    end_time: z.preprocess(() => new Date(), z.date()).optional(),
});
