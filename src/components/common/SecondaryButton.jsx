import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SecondaryButton = ({
  href,
  content,
  icon: Icon = ArrowUpRight,
  targetBlank,
  isDownloadable,
  onClick,
  type = "button",
  isSubmitting="",
  disabled = false,
}) => {
  const baseClasses =
    "group relative inline-flex items-center gap-2 overflow-hidden border border-ds-primary rounded-full bg-transfarent hover:bg-ds-primary px-6 py-3 text-sm font-semibold text-ds-primary  hover:text-ds-secondary transition-all duration-300 hover:gap-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const buttonContent = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      {content}
      <Icon
        size={14}
        className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isSubmitting ? "animate-spin" :" "}`}
      />
    </>
  );

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
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={baseClasses}
      >
        {buttonContent}
      </button>
    </div>
  );
};

export default SecondaryButton;