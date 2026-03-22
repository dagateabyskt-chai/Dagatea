"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnquirySchema, enquirySchema } from '@/schema/ContactEnquiry';

/* ----- UIs ----- */
import { motion } from 'framer-motion';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const defaultFormState: EnquirySchema = {
    customer_name: '',
    email: '',
    phone: '',
    message: ''
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: defaultFormState
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(data),
      };

      const response = await fetch("/api/send", requestOptions)
      const result = await response.json();
      if (result.success) {
        toast.success(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
        setIsSuccess(true);
      } else {
        toast.error(result.message, { 
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      }
      reset();
    } catch (error: any) {
      console.error("Error in submitting form", error)
      toast.error("Error in submitting form", { position: "top-center", style: { backgroundColor: "red", color: "white" } })
    }


    setIsSubmitting(false);
    reset();

    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-[#f6eee0] dark:bg-[#482f03] text-[#2a2215] dark:text-[#f6eee0] relative overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-bg-[#f6eee0]/30 to-transparent" />

      <div className="max-w-400 mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 dark:bg-[#f6eee0] bg-[#482f03]" />
            <span className="text-primary font-paragraph text-sm font-semibold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-12 dark:bg-[#f6eee0] bg-[#482f03]" />
          </div>
          <h2 className="font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Contact Us
          </h2>
          <p className="font-paragraph text-xl text-[#2a2215]/50 dark:text-[#f6eee0]/50 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 backdrop-blur-md p-8 rounded-3xl border border-[#2a2215]/40 dark:border-[#f6eee0]/50 hover:border-2 transition-colors"
          >
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-2xl mb-4">Visit Us</h3>
            <p className="font-paragraph text-secondary-foreground/70 leading-relaxed">
              27HR+PMF, Pugal Rd,<br />
              Bangla Nagar, Bikaner,<br />
              Rajasthan 334004, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 backdrop-blur-md p-8 rounded-3xl border border-[#2a2215]/40 dark:border-[#f6eee0]/50 hover:border-2 transition-colors"
          >
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-2xl mb-4">Call Us</h3>
            <a
              href="tel:+918005714740"
              className="font-paragraph text-secondary-foreground/70 hover:text-primary transition-colors block mb-2"
            >
              +91 80057 14740
            </a>
            <a
              href="tel:+919024566280"
              className="font-paragraph text-secondary-foreground/70 hover:text-primary transition-colors block mb-2"
            >
              +91 90245 66280
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 backdrop-blur-md p-8 rounded-3xl border border-[#2a2215]/40 dark:border-[#f6eee0]/50 hover:border-2 transition-colors"
          >
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-2xl mb-4">Email Us</h3>
            <a
              href="mailto:dagakrishna70@gmail.com"
              className="font-paragraph text-secondary-foreground/70 hover:text-primary transition-colors block mb-2"
            >
              dagakrishna70@gmail.com
            </a>
            <p className="font-paragraph text-sm text-secondary-foreground/50">
              We'll respond within 24 hours
            </p>
          </motion.div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 hover:border-2 backdrop-blur-md p-8 md:p-12 rounded-3xl border"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 mx-auto mb-6" />
                <h3 className="font-bold text-3xl mb-4">
                  Message Sent!
                </h3>
                <p className="font-medium">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block font-paragraph text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 rounded-2xl focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    {...register("customer_name", {
                      required: {
                        value: true,
                        message: "Name is required"
                      }
                    })}
                  />
                {errors.customer_name && <div className='text-red-600'>{errors.customer_name.message as React.ReactNode || "Please Enter Valid Input"}</div>}
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 rounded-2xl focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required"
                      }
                    })}
                  />
                {errors.email && <div className='text-red-600'>{errors.email.message as React.ReactNode}</div>}
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-medium mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 rounded-2xl focus:outline-none transition-colors"
                    placeholder="What is this about?"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Contact number is required"
                      }
                    })}
                  />
                {errors.phone && <div className='text-red-600'>{errors.phone.message as React.ReactNode}</div>}
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 rounded-2xl focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Message is required"
                      }
                    })}
                  />
                {errors.message && <div className='text-red-600'>{errors.message.message as React.ReactNode}</div>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full font-paragraph font-semibold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#2a2215]/40 dark:border-[#f6eee0]/50 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Our Branches */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 h-full min-h-150 rounded-3xl overflow-hidden border bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 hover:border-2"
          >
            <div className="text-center py-4">
              <h1 className="font-extrabold text-3xl">We Are Present At</h1>
            </div>
            <section className="my-5 py-6 px-4 rounded-2xl border bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 hover:border-2">
              <article className='md:text-lg'>
                <h2 className="pb-2 font-bold text-2xl">Shree Krishna Traders - Bikaner</h2>
                <strong>Address</strong><br />
                <p className="pl-4">Shree Krishna Traders, Near Vishwakarma Mandir, Pugal Road, Bikaner</p>
                <p className="font-bold">Contact</p>
                <p className="pl-4">8005714740</p>
              </article>
            </section>
            <section className="my-5 py-6 px-4 rounded-2xl border bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 hover:border-2">
              <article className='md:text-lg'>
                <h2 className="pb-2 font-bold text-2xl">Daga Tea Traders - Nokha</h2>
                <strong>Address</strong><br />
                <p className="pl-4">Daga tea traders, Near underbridge, Nokha, Bikaner</p>
                <p className="font-bold">Contact </p>
                <p className="pl-4">9024566280</p>
              </article>
            </section>
          </motion.div>
        </div>

        {/* Maps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start py-12">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full min-h-150 rounded-3xl overflow-hidden border  bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 hover:border-2"
          >
            <div className="px-2 py-1 text-bold text-lg text-center dark:bg-[#f6eee0]/20 bg-[#482f03]/20">Shree Krishna Traders</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.8414950161377!2d73.29168630000001!3d28.02932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd006f1ac43f%3A0xb7e132c76f8b802b!2sSHREE%20KRISHNA%20TRADERS!5e0!3m2!1sen!2sin!4v1773828883065!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Krishna Traders Location"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full min-h-150 rounded-3xl overflow-hidden border bg-[#2a2215]/5 dark:bg-[#f6eee0]/5 border-[#2a2215]/40 dark:border-[#f6eee0]/50 hover:border-2"
          >
            <div className="px-2 py-1 text-bold text-lg text-center dark:bg-[#f6eee0]/20 bg-[#482f03]/20">Daga Tea Traders</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.1580516570552!2d73.47495599999999!3d27.557604899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396aa9e6425cf909%3A0xc8cfc3fe0f4b5e23!2z4KSh4KS-4KSX4KS-IOCkn-ClgCDgpJ_gpY3gpLDgpYfgpKHgpLDgpY3gpLg!5e0!3m2!1sen!2sin!4v1773828762446!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Daga Tea Traders Location"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
