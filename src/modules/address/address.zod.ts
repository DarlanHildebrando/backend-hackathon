import z from "zod";
import { category } from "./address.module";

export const addressSchema = z.object({

    id: z.number().positive(),
    name: z.string(),
    category: z.enum(category)
});

export const updateAddressSchema = addressSchema.partial();