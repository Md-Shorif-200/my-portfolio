"use client";

import { contactFormAction } from "@/app/action/contactFormAction";
import PrimaryButton from "@/components/common/PrimaryButton";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const inputStyle =
  "w-full px-4 py-3 sm:py-3.5 rounded-xl border border-ds-primary/10 bg-ds-background text-ds-primary placeholder:text-ds-primary/35 focus:outline-none focus:ring-2 focus:ring-ds-primary/80 focus:border-ds-primary transition-all duration-200 text-sm sm:text-base";

const formItemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const formContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

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
    <motion.form
      variants={formContainerVariants}
      action={formAction}
      className="w-full flex flex-col gap-4 h-full min-w-0 bg-ds-background border border-ds-primary/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300"
    >
      <motion.div variants={formItemVariants}>
        <h2 className="text-ds-primary text-xs font-semibold uppercase tracking-widest mb-1">
          Send a Message
        </h2>

        <p className="text-ds-primary/40 text-sm">
          Fill out the form below and I&rsquo;ll get back to you shortly.
        </p>
      </motion.div>

      <motion.div
        variants={formItemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
      </motion.div>

      <motion.div variants={formItemVariants}>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          pattern="^\\+?[0-9-]{7,20}$"
          inputMode="tel"
          title="Enter a valid phone number (digits, optional + and - only)"
          className={inputStyle}
          required
        />
      </motion.div>

      <motion.div
        variants={formItemVariants}
        className="flex-1 flex"
      >
        <textarea
          name="message"
          placeholder="Tell me about your project, ideas, or just say hello!"
          className={`${inputStyle} resize-none flex-1 min-h-[120px] sm:min-h-[140px]`}
          maxLength={2000}
          required
        />
      </motion.div>

      <motion.div
        variants={formItemVariants}
        className="flex justify-end pt-1"
      >
        <PrimaryButton
          type="submit"
          disabled={isPending}
          icon={isPending ? ImSpinner9 : Send}
          content={isPending ? "Processing..." : "Send Message"}
          isSubmitting={isPending}
        />
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;