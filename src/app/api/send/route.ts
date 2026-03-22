/* Resend email sender */

import { Resend } from 'resend';
import { enquirySchema } from "@/schema/ContactEnquiry";
import { wholesaleEnquirySchema } from "@/schema/WholesaleEnquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const isWholesale = typeof data.business_name === "string" && data.business_name.trim() !== "";
        const validData = !isWholesale ? enquirySchema.safeParse(data) : wholesaleEnquirySchema.safeParse(data);

        if (!validData.success) {
            return Response.json(
                {
                    success: false,
                    errors: validData.error.flatten(),
                    message: "Data not found or incorrect"
                },
                { status: 400 }
            );
        }

        const { customer_name, email, phone, message, business_name = "" } = validData.data;

        // to: ['dagakrishna70@gmail.com'],
        // from: 'Enquiry <onboarding@vcji.webdev.in>', // change later to your domain
        // to: ['vchandak2006@gmail.com'],

        const newEnquiry = await resend.emails.send({
            from: 'Enquiry <onboarding@resend.dev>', // change later to your domain
            to: ['dagateabyskt@gmail.com'],
            subject: `New Enquiry from ${customer_name}`,
            html: `
                <h2>New Product Enquiry</h2>
                <p><strong>Name:</strong> ${customer_name}</p>
                <p><strong>Business Name:</strong> ${business_name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });
        if (newEnquiry.error) {
            return Response.json(
                { success: false, message: "Error! Please try again", error: newEnquiry.error },
                { status: 400 }
            );
        }

        // Trigger Google Sheet Webhook
        try {
            await fetch(`${process.env.GOOGLE_WEBHOOK_URL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    customer_name,
                    business_name,
                    email,
                    phone,
                    message,
                    secret: process.env.WEBHOOK_SECRET,
                    date: new Date().toISOString(),
                }),
            });
        } catch (error) {
            console.error("Webhook Failed!", error)
        }

        return Response.json({
            success: true,
            message: "Enquiry sent successfully",
            newEnquiry
        }, { status: 200 });

    } catch (error) {
        console.error("Error occured in sending new enquiry,", error);
        return Response.json({
            success: false,
            message: "Error occured in sending new enquiry"
        }, { status: 500 })
    }
}