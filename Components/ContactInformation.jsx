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
    <div className="flex flex-col gap-5">
      {contactInfo.map((item) => {
        const Icon = item.icon;

        const CardContent = (
          <div
            className=" w-full flex    rounded-2xl "
          >
            {/* Icon */}
         <div className="w-[20%]  ">
                <div
              className=" w-12 h-12  flex items-center justify-center rounded-full
              bg-white text-black
              group-hover:scale-110 transition-transform duration-300"
            >
              <Icon className="text-xl" />
            </div>
         </div>

            {/* Text */}
            <div className="w-[80%] flex flex-col">
              <p className="text-white font-semibold leading-tight text-base sm:text-lg">
                {item.title}
              </p>
              <p className="text-base text-white/70 ">{item.subtitle}</p>
            </div>
          </div>
        );

        return item.link ? (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none"
          >
            {CardContent}
          </a>
        ) : (
          <div key={item.id}>{CardContent}</div>
        );
      })}
    </div>
  );
};

export default ContactInformation;
