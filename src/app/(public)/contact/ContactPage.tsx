"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Building2, CheckCircle2, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { type EnquirySchema, enquirySchema } from "@/schema/ContactEnquiry";
import { collectionFont as contactFont } from "@/components/products/fonts";
import { contactBranches, contactEmail } from "./contact-data";
import styles from "./contact.module.css";

type SubmissionStatus =
  | { type: "idle" }
  | { type: "success" }
  | { type: "error"; message: string };

export default function ContactPage() {
  const [submission, setSubmission] = useState<SubmissionStatus>({ type: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquirySchema>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { customer_name: "", email: "", phone: "", message: "" },
    shouldFocusError: true,
  });

  const onSubmit = async (data: EnquirySchema) => {
    setSubmission({ type: "idle" });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmission({
          type: "error",
          message: typeof result.message === "string" ? result.message : "Error! Please try again",
        });
        return;
      }

      reset();
      setSubmission({ type: "success" });
    } catch {
      setSubmission({ type: "error", message: "Error in submitting form. Please try again." });
    }
  };

  return (
    <main id="contact" className={`${styles.page} ${contactFont.className}`}>
      <div className={styles.container}>
        <section className={styles.hero} aria-labelledby="contact-title">
          <span className={styles.eyebrow}>Get In Touch</span>
          <h1 id="contact-title">Contact Us</h1>
          <p>Have questions? We&apos;re here to help. Reach out to us anytime.</p>
        </section>

        <div className={styles.contactCards}>
          <section className={styles.contactCard} aria-labelledby="visit-title">
            <span className={styles.contactIcon}><MapPin size={23} aria-hidden="true" /></span>
            <h2 id="visit-title">Visit Us</h2>
            <address>
              27HR+PMF, Pugal Rd,<br />
              Bangla Nagar, Bikaner,<br />
              Rajasthan 334004, India
            </address>
            <a className={styles.cardFooter} href="#our-centers">
              Bikaner facility &amp; retail <ArrowRight size={14} aria-hidden="true" />
            </a>
          </section>

          <section className={styles.contactCard} aria-labelledby="call-title">
            <span className={styles.contactIcon}><Phone size={23} aria-hidden="true" /></span>
            <h2 id="call-title">Call Us</h2>
            <div className={styles.contactLinks}>
              {contactBranches.map((branch) => (
                <a key={branch.id} href={`tel:+91${branch.phone}`} aria-label={`Call ${branch.name}: ${branch.displayPhone}`}>
                  {branch.displayPhone}
                </a>
              ))}
            </div>
            <p className={styles.cardFooter}>Wholesale &amp; retail enquiries</p>
          </section>

          <section className={styles.contactCard} aria-labelledby="email-title">
            <span className={styles.contactIcon}><Mail size={23} aria-hidden="true" /></span>
            <h2 id="email-title">Email Us</h2>
            <a className={styles.emailLink} href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <p className={styles.responseTime}>We&apos;ll respond within 24 hours</p>
            <p className={styles.cardFooter}>Direct inquiries desk</p>
          </section>
        </div>

        <div className={styles.communicationGrid}>
          <section className={styles.formPanel} aria-labelledby="message-title">
            <p className={styles.sectionEyebrow}>Direct communication</p>
            <h2 id="message-title">Send Us a Message</h2>
            <p id="form-instructions" className={styles.panelDescription}>
              Enquire about retail packs, wholesale supply, or visiting our locations. All fields are required.
            </p>

            <div role="status" aria-live="polite" aria-atomic="true">
              {isSubmitting && <p className={styles.srOnly}>Sending your message.</p>}
              {submission.type === "success" && (
                <div className={styles.successMessage}>
                  <CheckCircle2 size={23} aria-hidden="true" />
                  <div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  </div>
                </div>
              )}
            </div>
            <div role="alert" aria-atomic="true">
              {submission.type === "error" && <p className={styles.submitError}>{submission.message}</p>}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate aria-labelledby="message-title" aria-describedby="form-instructions" aria-busy={isSubmitting}>
              <fieldset className={styles.formFields} disabled={isSubmitting}>
                <legend className={styles.srOnly}>Your contact enquiry</legend>
                <div className={styles.field}>
                  <label htmlFor="contact-name">Your Name <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    required
                    aria-invalid={Boolean(errors.customer_name)}
                    aria-describedby={errors.customer_name ? "contact-name-error" : undefined}
                    {...register("customer_name")}
                  />
                  {errors.customer_name && <p id="contact-name-error" className={styles.fieldError} role="alert">{errors.customer_name.message}</p>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email">Email Address <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    placeholder="your@email.com"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    {...register("email")}
                  />
                  {errors.email && <p id="contact-email-error" className={styles.fieldError} role="alert">{errors.email.message}</p>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-phone">Contact Number <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="8005714740"
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={`contact-phone-hint${errors.phone ? " contact-phone-error" : ""}`}
                    {...register("phone")}
                  />
                  <p id="contact-phone-hint" className={styles.fieldHint}>Enter a 10-digit number without the country code.</p>
                  {errors.phone && <p id="contact-phone-error" className={styles.fieldError} role="alert">{errors.phone.message}</p>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    required
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    {...register("message")}
                  />
                  {errors.message && <p id="contact-message-error" className={styles.fieldError} role="alert">{errors.message.message}</p>}
                </div>

                <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending... <LoaderCircle size={18} className={styles.spinner} aria-hidden="true" /></>
                  ) : (
                    <>Send Message <Send size={18} aria-hidden="true" /></>
                  )}
                </button>
              </fieldset>
            </form>
          </section>

          <section className={styles.branchesPanel} aria-labelledby="branches-title">
            <div className={styles.branchesHeading}>
              <div>
                <h2 id="branches-title">We Are Present At</h2>
                <p>Direct trading &amp; wholesale outlets</p>
              </div>
              <span className={styles.branchIcon}><Building2 size={20} aria-hidden="true" /></span>
            </div>
            <div className={styles.branchList}>
              {contactBranches.map((branch) => (
                <article key={branch.id} className={styles.branch} aria-labelledby={`${branch.id}-branch-title`}>
                  <div className={styles.branchTitle}>
                    <h3 id={`${branch.id}-branch-title`}>{branch.heading}</h3>
                    <span className={styles.branchBadge}>{branch.city}</span>
                  </div>
                  <p className={styles.detailLabel}>Address</p>
                  <address>{branch.address}</address>
                  <div className={styles.branchContact}>
                    <div>
                      <p className={styles.detailLabel}>Contact</p>
                      <a href={`tel:+91${branch.phone}`} className={styles.branchNumber}>{branch.phone}</a>
                    </div>
                    <a href={`tel:+91${branch.phone}`} className={styles.smallButton} aria-label={`Call ${branch.name} in ${branch.city}`}>
                      <Phone size={13} aria-hidden="true" /> {branch.id === "bikaner" ? "Call Store" : "Call Branch"}
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <a className={styles.branchesNote} href="#our-centers">
              <MapPin size={17} aria-hidden="true" />
              Find our Bikaner and Nokha locations on Google Maps.
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </section>
        </div>

        <section id="our-centers" className={styles.locations} aria-labelledby="centers-title">
          <div className={styles.locationsHeading}>
            <p className={styles.sectionEyebrow}>Locate our hubs</p>
            <h2 id="centers-title">Find Our Centers</h2>
            <p>Visit us in Bikaner and Nokha.</p>
          </div>
          <div className={styles.mapGrid}>
            {contactBranches.map((branch) => (
              <article key={branch.id} className={styles.mapCard} aria-labelledby={`${branch.id}-map-title`}>
                <div className={styles.mapHeading}>
                  <div>
                    <h3 id={`${branch.id}-map-title`}>{branch.name}</h3>
                    <p id={`${branch.id}-map-address`}>{branch.address}</p>
                  </div>
                  <a className={styles.smallButton} href={branch.mapHref} target="_blank" rel="noopener noreferrer" aria-label={`Open ${branch.name}, ${branch.city} in Google Maps (new tab)`}>
                    Open map <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="360"
                  className={styles.map}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={branch.mapTitle}
                  aria-describedby={`${branch.id}-map-address`}
                />
                <div className={styles.mapFooter}>
                  <span>{branch.id === "bikaner" ? "Rajasthan 334004, India" : "Nokha, Bikaner, Rajasthan"}</span>
                  <a href={`tel:+91${branch.phone}`} aria-label={`Call ${branch.name}: ${branch.phone}`}>Tel: {branch.phone}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.wholesale} aria-labelledby="wholesale-title">
          <div>
            <p className={styles.wholesaleEyebrow}>Wholesale &amp; retail enquiries</p>
            <h2 id="wholesale-title">Looking for Loose Tea &amp; Personalized Packaging?</h2>
            <p>Contact us for wholesale, retail, and bulk tea supply.</p>
          </div>
          <div className={styles.wholesaleActions}>
            <a className={styles.dialButton} href="tel:+918005714740">
              <Phone size={17} aria-hidden="true" /> Dial +91 80057 14740
            </a>
            <Link className={styles.wholesaleButton} href="/#wholesale">Wholesale enquiry <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
