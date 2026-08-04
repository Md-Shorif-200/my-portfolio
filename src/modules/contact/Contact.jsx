import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <main className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-14" >
          <p className="text-emerald-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Let’s Shape <span className="text-emerald-500">Your Next</span> Big Idea
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Your ideas deserve more than imagination — let’s build them into reality.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: info card */}
          <div
            // data-aos="fade-up"
            // data-aos-delay="150"
            className="md:w-2/5 bg-black rounded-2xl px-6 py-10"
          >
            <ContactInformation />

            <div className="mt-10 pt-8 border-t border-white/10">
              <h2 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
                Let’s Connect
              </h2>
              <div className="flex gap-3">
                <Link
                  href="https://web.facebook.com/shorif.web.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center text-white transition-colors duration-300"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/md-shorif-375533275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center text-white transition-colors duration-300"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com/Md-Shorif-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center text-white transition-colors duration-300"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:w-3/5" 
          // data-aos="fade-up" data-aos-delay="200"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}