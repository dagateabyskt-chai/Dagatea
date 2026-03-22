import * as z from "zod";

export const wholesaleEnquirySchema = z.object({
    customer_name: z.string().trim().min(3, "Name is required"),
    business_name: z.string().trim().min(3, "Business Name is required").optional(),
    phone: z.string().trim().regex(/^[0-9]{10}$/, "Invalid phone number"),
    email: z.email(),
    message: z.string().trim().nonempty()
}); 

export type WholesaleEnquirySchema = z.infer<typeof wholesaleEnquirySchema>