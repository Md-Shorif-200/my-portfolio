"use client";

import { contactFormAction } from "@/app/action/contactFormAction";
import PrimaryButton from "@/components/common/PrimaryButton";
import { Send } from "lucide-react";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

// one shared style for every input, so they all stay in sync
const inputStyle =
  "w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200";

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
      className="flex flex-col gap-4 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"
      //  data-aos="fade-up"
       >
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
        // data-aos="fade-up"
        // data-aos-delay="100"
      />

      <textarea
        name="message"
        placeholder="Tell me about your project, ideas, or just say hello!"
        className={`${inputStyle} resize-none`}
        rows={5}
        maxLength={2000}
        required
        // data-aos="fade-up"
        // data-aos-delay="200"
      />

      <div className="flex justify-end">
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
