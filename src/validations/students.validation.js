import { z } from "zod";
export const studentsScheme = z.object({
    permission: z.boolean().default(false).optional(),
    user_id: z.number(),
});
