import Link from "next/link";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contactInfo = [
  {
    id: 1,
    icon: FaMailBulk,
    color: "#EA4335",
    title: "mdshorifuddin463@gmail.com",
    subtitle: "Send me an email anytime",
    link: "mailto:mdshorifuddin463@gmail.com",
  },
  {
    id: 2,
    icon: FaWhatsapp,
    color: "#25D366",
    title: "+88 01972-144240",
    subtitle: "Chat with me on WhatsApp",
    link: "https://wa.me/8801972144240",
  },
  {
    id: 3,
    icon: FaLocationDot,
    color: "#EA4335",
    title: "Noakhali, Chattogram",
    subtitle: "Bangladesh",
  },
];

const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-2 min-w-0 shadow-xs border border-gray-100 p-3 sm:p-4 rounded-xl">
      {contactInfo.map((item) => {
        const Icon = item.icon;

        const content = (
          <div className="flex items-start gap-3 sm:gap-4 group p-3 -mx-3 rounded-xl hover:bg-black/[0.03] transition-colors duration-200">
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: `${item.color}14` }}
            >
              <Icon className="text-base sm:text-lg" style={{ color: item.color }} />
            </div>
            <div className="pt-0.5 min-w-0">
              <p className="text-black font-semibold text-sm sm:text-[15px] leading-tight break-words">
                {item.title}
              </p>
              <p className="text-black/45 text-xs sm:text-sm mt-1">{item.subtitle}</p>
            </div>
          </div>
        );

        return item.link ? (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-xl"
          >
            {content}
          </Link>
        ) : (
          <div key={item.id}>{content}</div>
        );
      })}
    </div>
  );
};

export default ContactInformation;