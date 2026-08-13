"use client";
import { useState } from "react";
import { Download, X, Loader2, DownloadIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import PrimaryButton from "../../components/common/PrimaryButton";

const RESUME_URL =
  "https://res.cloudinary.com/dxg4xodmg/image/upload/v1786628803/Shorif_Web_Developer_Resume_dw2url.pdf";

function ResumePreviewModal({
  resumeUrl = RESUME_URL,
  fileName = "Shorif_Uddin_Resume.pdf",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Browser-এর default PDF toolbar/sidebar লুকিয়ে শুধু resume content দেখানোর জন্য
  const cleanPreviewUrl = `${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`;

  const handleDownload = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isDownloading) return;
    setIsDownloading(true);

    try {
      // Cross-origin URL-এ সরাসরি <a download> কাজ করে না,
      // তাই fetch করে blob বানিয়ে local URL দিয়ে download ট্রিগার করা হচ্ছে
      const response = await fetch(resumeUrl);
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // মেমরি ক্লিন-আপ
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      // fetch ব্যর্থ হলে fallback হিসেবে নতুন ট্যাবে ওপেন করে দেওয়া হচ্ছে
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      

        <div>
          <PrimaryButton   content="Download Resume" icon={DownloadIcon}  onClick={() => setIsOpen(true)} />
        </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          showCloseButton={false}
          className="flex h-[88vh] w-[calc(100%-2rem)] max-w-[830px] flex-col gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-2xl sm:rounded-2xl"
        >
          {/* Header */}
          <DialogHeader className="flex-row items-center justify-between space-y-0 border-b border-ds-border bg-ds-background px-5 py-3.5">
            <DialogTitle className="text-sm font-semibold text-ds-primary">
              Resume Preview
            </DialogTitle>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-medium text-ds-secondary transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isDownloading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Download className="h-3.5 w-3.5" />
                )}
                {isDownloading ? "Downloading..." : "Download"}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </DialogHeader>

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
