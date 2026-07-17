"use client";

import { contactFormAction } from "@/src/app/action/contactFormAction";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    contactFormAction,
    null
  );

  useEffect(() => {
    if (state === null || state === undefined) return;

    if (state?.acknowledged === true && state?.insertedId) {
      toast.success("Your message has been submitted.", {
        duration: 2000,
        position: "top-right",
      });
    } else {
      toast.error("Something went wrong.");
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 rounded-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" 
         data-aos="fade-up"
              
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="px-3 py-4 rounded-lg bg-surface shadow-sm placeholder:text-soft capitalize focus:outline-none focus:ring-2 focus:ring-primary transition"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="px-3 py-4 rounded-lg bg-surface shadow-sm placeholder:text-soft capitalize focus:outline-none focus:ring-2 focus:ring-primary transition"
          required
        />
      </div>

      {/* ✅ Phone Number (replaced subject) */}
<input
  type="tel"
  name="phone"
  placeholder="Enter Your Phone"
  pattern="^\+?[0-9-]{7,20}$"
  inputMode="tel"
  title="Enter a valid phone number (digits, optional + and - only)"
  className="px-3 py-4 rounded-lg bg-surface shadow-sm placeholder:text-soft focus:outline-none focus:ring-2 focus:ring-primary transition"
  required

     data-aos="fade-up"
                  data-aos-delay="200"


/>




      <textarea
        name="message"
        placeholder="Tell me about your project, ideas, or just say hello!"
        className="px-3 py-4 rounded-lg bg-surface shadow-sm placeholder:text-soft focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
        rows={5}
        maxLength={2000}
        required

           data-aos="fade-up"
                  data-aos-delay="300"
      />

      <button
   data-aos="fade-up"
                  data-aos-delay="400"
disabled={isPending}
        type="submit"
        className="bg-primary hover:bg-primary-hover py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(33,191,115,0.35)] flex justify-center items-center gap-2 cursor-pointer disabled:opacity-70"
      >
        {isPending ? (
          <>
            <ImSpinner9 className="text-lg animate-spin" />
            Processing...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;