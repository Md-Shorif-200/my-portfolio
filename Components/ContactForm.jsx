"use client";
import { contactFormAction } from "@/app/action/contactFormAction";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";


const ContactForm = () => {


  const [state,formAction,isPending] = useActionState(contactFormAction,null)

    useEffect(() => {
      if (state === null || state === undefined) return;
      
        if(state?.acknowledged == true && state?.insertedId){
       toast.success('Your Message has been submited.',{duration : 2000,position : "top-right"})
     }else{
      toast.error("something is wrong.")
     }
    },[state])

    
   


  return (
    <form
    action={formAction}
      className="flex flex-col gap-4 bg-[#0B1120] p-6 rounded-2xl border border-[#1A2235]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
       
          className="p-3 rounded-lg bg-[#121826] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55E6A5] transition"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="your email"
        
          className="p-3 rounded-lg bg-[#121826] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55E6A5] transition"
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="What's this about?"
      
        className="p-3 rounded-lg bg-[#121826] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55E6A5] transition"
        required
      />

      <textarea
        name="message"
        placeholder="Tell me about your project, ideas, or just say hello!"
       
        className="p-3 rounded-lg bg-[#121826] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#55E6A5] transition resize-none"
        rows={5}
        maxLength={2000}
        required
      />

      <button
        disabled={isPending}
        type="submit"
        className="bg-[#55E6A5] hover:bg-[#4AD296] py-3 rounded-lg font-semibold text-[#02050A] transition-all duration-300 hover:shadow-[0_0_15px_#55E6A580] flex justify-center items-center gap-2"
      >
         {
           isPending ?
           
           <>
    <ImSpinner9 className="text-lg animate-spin"/> Processing... 
           </> : "Send Message"
         }
      </button>
    </form>
  );
};

export default ContactForm;
