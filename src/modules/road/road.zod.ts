import z from "zod";

export const roadSchema = z.object({

    attempted_coins: z.number().positive(),
    check: z.boolean()
});

export const updateRoadSchema = roadSchema.partial();