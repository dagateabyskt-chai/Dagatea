import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { WholesaleEnquirySchema, wholesaleEnquirySchema } from '@/schema/WholesaleEnquiry';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bounce, toast } from 'react-toastify';

export default function WholesaleSection() {
  const defaultFormState: WholesaleEnquirySchema = {
      customer_name: '',
      business_name: '',
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
      resolver: zodResolver(wholesaleEnquirySchema),
      defaultValues: defaultFormState
    });

  const onSubmit = async (data: WholesaleEnquirySchema) => {
    setIsSubmitting(true);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(data),
      };

      const response = await fetch(`/api/send`, requestOptions)
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
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="wholesale" className="py-32 bg-[#fbeacd] dark:bg-[#3f2901] text-[#3f2903] dark:text-[#f4d5a1] relative overflow-auto">
      <div className="max-w-400 mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 dark:bg-[#fbeacd] bg-[#825301]" />
              <span className="text-sm font-semibold tracking-[0.2em] uppercase">
                Partner With Us
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl mb-6 leading-tight">
              Wholesale & Retail Inquiry
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Ready to partner with Rajasthan's most trusted tea supplier? Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" />
                <span>Competitive wholesale pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" />
                <span>Consistent supply chain</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" />
                <span>Quality assurance on every batch</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" />
                <span>Flexible packaging options</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#825301]/5 dark:bg-[#fbeacd]/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-[#3f2903] dark:border-[#f6eee0]"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-3xl text-foreground mb-4">
                  Thank You!
                </h3>
                <p className="font-paragraph">
                  Your inquiry has been submitted successfully. We'll contact you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#98650e] dark:border-[#f6eee0]/60 rounded-2xl focus:outline-none transition-colors"
                    placeholder="Enter your full name"
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
                  <label className="block text-sm font-medium mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#98650e] dark:border-[#f6eee0]/60 rounded-2xl focus:outline-none transition-colors"
                    placeholder="Your business name"
                    {...register("business_name", {
                      required: {
                        value: true,
                        message: "Business Name is required"
                      }
                    })}
                  />
                {errors.business_name && <div className='text-red-600'>{errors.business_name.message as React.ReactNode || "Please Enter Valid Input"}</div>}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-[#98650e] dark:border-[#f6eee0]/60 rounded-2xl focus:outline-none transition-colors"
                      placeholder="8005714740"
                      {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone Number is required"
                      }
                    })}
                    />
                    {errors.phone && <div className='text-red-600'>{errors.phone.message as React.ReactNode || "Please Enter Valid Input"}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-[#98650e] dark:border-[#f6eee0]/60 rounded-2xl focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required"
                      }
                    })}
                    />
                    {errors.email && <div className='text-red-600'>{errors.email.message as React.ReactNode || "Please Enter Valid Input"}</div>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Requirements *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#98650e] dark:border-[#f6eee0]/60 rounded-2xl focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements (quantity, type, delivery location, etc.)"
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Requirements are required"
                      }
                    })}
                  />
                {errors.message && <div className='text-red-600'>{errors.message.message as React.ReactNode || "Please Enter Valid Input"}</div>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-amber-900 dark:border-[#f6eee0]/60 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
