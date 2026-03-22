import * as z from "zod";

export const enquirySchema = z.object({
    customer_name: z.string().trim().min(3, "Name is required"),
    email: z.email(),
    phone: z.string().trim().regex(/^[0-9]{10}$/, "Invalid phone number"),
    message: z.string().trim().nonempty()
}); 

export type EnquirySchema = z.infer<typeof enquirySchema>