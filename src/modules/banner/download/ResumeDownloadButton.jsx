"use client";

const RESUME_URL =
  "https://res.cloudinary.com/dxg4xodmg/image/upload/v1785770820/Shorif_Frontend_Developer_Resume_w0r89p.pdf";

function ResumeDownloadButton({
  resumeUrl = RESUME_URL,
  fileName = "Shorif_Uddin_Resume.pdf",
}) {
  const handleClick = () => {
    // ১) নতুন ট্যাবে preview খুলুন
    window.open(resumeUrl, "_blank", "noopener,noreferrer");

    // ২) একই সাথে silently download trigger করুন
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-600 hover:-translate-y-0.5"
    >
      Download Resume
    </button>
  );
}

export default ResumeDownloadButton;