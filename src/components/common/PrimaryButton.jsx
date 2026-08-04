import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PrimaryButton = ({
  href,
  content,
  icon: Icon = ArrowUpRight,
  targetBlank,
  isDownloadable,
  onClick, 
}) => {
  const baseClasses =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] cursor-pointer";

  const buttonContent = (
    <>
      {/* Shimmer sweep */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      {content}

      <Icon
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </>
  );

  // যদি href থাকে তবে Link হিসেবে কাজ করবে, না থাকলে button হিসেবে কাজ করবে
  if (href) {
    return (
      <div>
        <Link
          href={href}
          target={targetBlank ? "_blank" : "_self"}
          rel={targetBlank ? "noopener noreferrer" : undefined}
          download={isDownloadable ? true : undefined}
          className={baseClasses}
        >
          {buttonContent}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <button type="button" onClick={onClick} className={baseClasses}>
        {buttonContent}
      </button>
    </div>
  );
};

export default PrimaryButton;