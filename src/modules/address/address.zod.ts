import z from "zod";
import { Category } from "../../generated/prisma/index.js";

export const addressSchema = z.object({

    id: z.number().positive(),
    name: z.string(),
    image_url: z.string(),
    category: z.enum(Category)
});

export const updateAddressSchema = addressSchema.partial();