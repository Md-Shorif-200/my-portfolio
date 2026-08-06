"use client";

import { contactFormAction } from "@/app/action/contactFormAction";
import PrimaryButton from "@/components/common/PrimaryButton";
import { Send } from "lucide-react";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const inputStyle =
  "w-full px-4 py-3 sm:py-3.5 rounded-xl border border-black/10 bg-white text-black placeholder:text-black/35 focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-black transition-all duration-200 text-sm sm:text-base";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    contactFormAction,
    null,
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
      className="w-full flex flex-col gap-4 h-full min-w-0 bg-white border border-black/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300"
    >
      <div>
        <h2 className="text-black text-xs font-semibold uppercase tracking-widest mb-1">
          Send a Message
        </h2>
        <p className="text-black/40 text-sm">
          Fill out the form below and I&rsquo;ll get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className={inputStyle}
          required
        />
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Enter your phone"
        pattern="^\+?[0-9-]{7,20}$"
        inputMode="tel"
        title="Enter a valid phone number (digits, optional + and - only)"
        className={inputStyle}
        required
      />

      <textarea
        name="message"
        placeholder="Tell me about your project, ideas, or just say hello!"
        className={`${inputStyle} resize-none flex-1 min-h-[120px] sm:min-h-[140px]`}
        maxLength={2000}
        required
      />

      <div className="flex justify-end pt-1">
        <PrimaryButton
          type="submit"
          disabled={isPending}
          icon={isPending ? ImSpinner9 : Send}
          content={isPending ? "Processing..." : "Send Message"}
          isSubmitting={isPending}
        />
      </div>
    </form>
  );
};

export default ContactForm;