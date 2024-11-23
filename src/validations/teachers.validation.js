import { z } from "zod";
export const teachersScheme = z.object({
    user_id: z.number(),
});
