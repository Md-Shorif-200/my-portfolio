import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import Container from "@/components/Container";

const socials = [
  { icon: FaFacebook, href: "https://web.facebook.com/shorif.web.dev", label: "Facebook" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/md-shorif-375533275/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Md-Shorif-200", label: "GitHub" },
];

export default function Contact() {
  return (
    <main className="w-full bg-white my-12 md:my-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 px-2">
          <div className=" ">
            <span className="text-black font-semibold text-xs tracking-widest uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black tracking-tight leading-tight mt-2">
            Let&rsquo;s Shape Your Next Big Idea
          </h1>
          <p className="text-black/50 mt-4 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            Your ideas deserve more than imagination — let&rsquo;s build them into reality.
          </p>
        </div>

        {/* Content — equal height via grid items-stretch */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-stretch">
          {/* Left: info card */}
          <div className="md:col-span-2 flex flex-col h-full min-w-0 bg-white border border-black/10 rounded-2xl px-5 py-7 sm:px-6 sm:py-8 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <ContactInformation />

            <div className="mt-8 md:mt-auto md:pt-8">
              <h2 className="text-black text-xs font-semibold uppercase tracking-widest mb-4">
                Let&rsquo;s Connect
              </h2>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 shrink-0 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon className="text-base" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3 flex flex-col h-full min-w-0">
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}