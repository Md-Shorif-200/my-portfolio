const HighlightText = ({ children, className = "", variant = "word" }) => {
  const baseClasses = "relative inline-block font-bold text-ds-primary mx-[2px]";

  const variantClasses =
    variant === "line"
      ? "before:absolute before:bottom-0 before:left-0 before:h-[0.18rem] before:w-full before:rounded-full before:bg-ds-primary/25 before:content-['']"
      : "";

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default HighlightText;
