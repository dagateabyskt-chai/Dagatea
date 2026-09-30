"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, CheckCircle, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { type WholesaleEnquirySchema, wholesaleEnquirySchema } from "@/schema/WholesaleEnquiry";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import HomeReveal from "@/components/home/HomeReveal";
import styles from "@/components/home/home.module.css";

const defaultFormState: WholesaleEnquirySchema = {
  customer_name: "",
  business_name: "",
  email: "",
  phone: "",
  message: "",
};

const benefits = [
  "Competitive wholesale pricing",
  "Consistent supply chain",
  "Quality assurance on every batch",
  "Flexible packaging options",
];

export default function WholesaleSection({ motionEnabled = true }: { motionEnabled?: boolean }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WholesaleEnquirySchema>({
    resolver: zodResolver(wholesaleEnquirySchema),
    defaultValues: defaultFormState,
    shouldFocusError: true,
  });

  const onSubmit = async (data: WholesaleEnquirySchema) => {
    setSubmissionError("");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        const message = typeof result.message === "string" ? result.message : "Error in submitting form";
        setSubmissionError(message);
        toast.error(message, { role: "presentation" });
        return;
      }
      reset();
      setIsSuccess(true);
      toast.success(typeof result.message === "string" ? result.message : "Your inquiry has been submitted successfully.", { role: "presentation" });
    } catch {
      setSubmissionError("Error in submitting form");
      toast.error("Error in submitting form", { role: "presentation" });
    }
  };

  return (
    <section id="wholesale" className={styles.wholesale} aria-labelledby="wholesale-title">
      <div className={`${styles.container} ${styles.wholesaleGrid}`}>
        <HomeReveal enabled={motionEnabled} x={-40} y={0} className={styles.wholesaleCopy}>
          <span className={styles.eyebrow}>Partner With Us</span>
          <h2 id="wholesale-title">Wholesale &amp; Retail Inquiry</h2>
          <p>Ready to partner with Rajasthan&apos;s most trusted tea supplier? Fill out the form and our team will get back to you within 24 hours.</p>
          <ul className={styles.wholesaleBenefits}>
            {benefits.map((benefit) => <li key={benefit}><Check size={17} aria-hidden="true" />{benefit}</li>)}
          </ul>
        </HomeReveal>

        <HomeReveal enabled={motionEnabled} x={40} y={0} className={styles.formCard}>
          <div role="status" aria-live="polite" aria-atomic="true">
            {isSuccess && (
              <motion.div initial={motionEnabled ? { opacity: 0, scale: 0.9 } : false} animate={{ opacity: 1, scale: 1 }} className={styles.successMessage}>
                <CheckCircle size={56} aria-hidden="true" />
                <h3>Thank You!</h3>
                <p>Your inquiry has been submitted successfully. We&apos;ll contact you soon.</p>
                <button type="button" className={styles.secondaryButton} onClick={() => setIsSuccess(false)}>Send another inquiry</button>
              </motion.div>
            )}
          </div>
          {!isSuccess && (
            <form onSubmit={handleSubmit(onSubmit)} className={styles.inquiryForm} aria-labelledby="wholesale-title" aria-busy={isSubmitting} noValidate>
              <div className={styles.formField}>
                <label htmlFor="wholesale-name">Your Name *</label>
                <input id="wholesale-name" type="text" autoComplete="name" required aria-invalid={Boolean(errors.customer_name)} aria-describedby={errors.customer_name ? "wholesale-name-error" : undefined} placeholder="Enter your full name" {...register("customer_name")} />
                {errors.customer_name && <p id="wholesale-name-error" className={styles.fieldError}>{errors.customer_name.message || "Please Enter Valid Input"}</p>}
              </div>
              <div className={styles.formField}>
                <label htmlFor="wholesale-business">Business Name *</label>
                <input id="wholesale-business" type="text" autoComplete="organization" required aria-invalid={Boolean(errors.business_name)} aria-describedby={errors.business_name ? "wholesale-business-error" : undefined} placeholder="Your business name" {...register("business_name")} />
                {errors.business_name && <p id="wholesale-business-error" className={styles.fieldError}>{errors.business_name.message || "Please Enter Valid Input"}</p>}
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="wholesale-phone">Phone Number *</label>
                  <input id="wholesale-phone" type="tel" inputMode="tel" autoComplete="tel-national" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "wholesale-phone-error" : undefined} placeholder="8005714740" {...register("phone")} />
                  {errors.phone && <p id="wholesale-phone-error" className={styles.fieldError}>{errors.phone.message || "Please Enter Valid Input"}</p>}
                </div>
                <div className={styles.formField}>
                  <label htmlFor="wholesale-email">Email Address *</label>
                  <input id="wholesale-email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "wholesale-email-error" : undefined} placeholder="your@email.com" {...register("email")} />
                  {errors.email && <p id="wholesale-email-error" className={styles.fieldError}>{errors.email.message || "Please Enter Valid Input"}</p>}
                </div>
              </div>
              <div className={styles.formField}>
                <label htmlFor="wholesale-message">Your Requirements *</label>
                <textarea id="wholesale-message" rows={5} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "wholesale-message-error" : undefined} placeholder="Tell us about your requirements (quantity, type, delivery location, etc.)" {...register("message")} />
                {errors.message && <p id="wholesale-message-error" className={styles.fieldError}>{errors.message.message || "Please Enter Valid Input"}</p>}
              </div>
              {submissionError && <p className={styles.submissionError} role="alert">{submissionError}</p>}
              <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                {isSubmitting ? <><LoaderCircle size={18} className={styles.spinner} aria-hidden="true" />Submitting...</> : <>Submit Inquiry <Send size={18} aria-hidden="true" /></>}
              </button>
            </form>
          )}
        </HomeReveal>
      </div>
    </section>
  );
}
