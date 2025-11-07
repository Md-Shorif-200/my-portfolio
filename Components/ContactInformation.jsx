import { FaAddressBook, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";



const ContactInformation = () => {
  const infoClasses =
    "flex items-center gap-4 p-4 bg-[#0B1120] rounded-2xl border border-[#1A2235] hover:border-[#55E6A5] hover:shadow-[0_0_15px_#55E6A580] transition-all duration-300 cursor-pointer";

  const iconClasses =
    "h-10 w-10 text-[#55E6A5] bg-[#121826] p-2 rounded-xl flex-shrink-0";

  return (
    <div className="flex flex-col gap-5">
      {/* Email */}
      <a
        href="mailto:mdshorifuddin463@gmail.com"
        className={infoClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMailBulk className={iconClasses} />
        <div>
          <p className="text-sm text-gray-400">Send mail to</p>
          <p className="font-semibold text-white">mdshorifuddin463@gmail.com</p>
          <p className="text-xs opacity-80 text-gray-400">
            Send me an email anytime
          </p>
        </div>
      </a>

      {/* Phone */}
      <a href="tel:+8801972144240" className={infoClasses}>
        <MdAddIcCall className={iconClasses} />
        <div>
          <p className="text-sm text-gray-400">Call or text</p>
          <p className="font-semibold text-white">+88 01972-144240</p>
          <p className="text-xs opacity-80 text-gray-400">
            Call me for urgent matters
          </p>
        </div>
      </a>

      {/* Location */}
      <div className={infoClasses}>
        <FaLocationDot className={iconClasses} />
        <div>
          <p className="text-sm text-gray-400">Location</p>
          <p className="font-semibold text-white">Noakhali, Chattogram</p>
          <p className="text-xs opacity-80 text-gray-400">Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
