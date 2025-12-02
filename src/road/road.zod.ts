import z from "zod";

export const roadSchema = z.object({

    days: z.number().positive(),
    attempted_coins: z.number().positive()
});

export const updateRoadSchema = roadSchema.partial();