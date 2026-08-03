"use client";
import { useState } from "react";
import { Download, X } from "lucide-react";
import {   Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle, } from "../../../components/ui/dialog";


const RESUME_URL =
  "https://res.cloudinary.com/dxg4xodmg/image/upload/v1785770820/Shorif_Frontend_Developer_Resume_w0r89p.pdf";

function ResumePreviewModal({
  resumeUrl = RESUME_URL,
  fileName = "Shorif_Uddin_Resume.pdf",
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Browser-এর default PDF toolbar/sidebar লুকিয়ে শুধু resume content দেখানোর জন্য
  const cleanPreviewUrl = `${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`;

  const handleDownload = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = fileName;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-600 hover:-translate-y-0.5"
      >
        View / Download Resume
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          showCloseButton={false}
          className="flex h-[88vh] w-[92vw] max-w-4xl flex-col gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-2xl sm:rounded-2xl"
        >
          {/* Header */}
          <DialogHeader className="flex-row items-center justify-between space-y-0 border-b border-gray-100 bg-white px-5 py-3.5">
            <DialogTitle className="text-sm font-semibold text-gray-800">
              Resume Preview
            </DialogTitle>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-emerald-600"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </DialogHeader>

          {/* PDF Preview — শুধু resume-টাই দেখাবে, browser toolbar/sidebar ছাড়া */}
          <div className="relative flex-1 bg-gray-100">
            <iframe
              src={cleanPreviewUrl}
              title="Resume Preview"
              className="h-full w-full border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ResumePreviewModal;