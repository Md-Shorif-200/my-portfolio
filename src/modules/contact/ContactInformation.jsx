import { FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";

const contactInfo = [
  {
    id: 1,
    icon: FaMailBulk,
    title: "mdshorifuddin463@gmail.com",
    subtitle: "Send me an email anytime",
    link: "mailto:mdshorifuddin463@gmail.com",
  },
  {
    id: 2,
    icon: MdAddIcCall,
    title: "+88 01972-144240",
    subtitle: "Call me for urgent matters",
    link: "tel:+8801972144240",
  },
  {
    id: 3,
    icon: FaLocationDot,
    title: "Noakhali, Chattogram",
    subtitle: "Bangladesh",
  },
];

const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-6">
      {contactInfo.map((item) => {
        const Icon = item.icon;

        const content = (
          <div className="flex items-start gap-4 group">
            <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 group-hover:bg-emerald-500 flex items-center justify-center text-white transition-colors duration-300">
              <Icon className="text-lg" />
            </div>
            <div>
              <p className="text-white font-semibold text-base leading-tight">
                {item.title}
              </p>
              <p className="text-white/60 text-sm mt-1">{item.subtitle}</p>
            </div>
          </div>
        );

        return item.link ? (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg"
          >
            {content}
          </a>
        ) : (
          <div key={item.id}>{content}</div>
        );
      })}
    </div>
  );
};

export default ContactInformation;