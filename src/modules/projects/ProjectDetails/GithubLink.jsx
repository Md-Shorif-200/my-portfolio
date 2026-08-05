import { Github } from "lucide-react";
import Link from "next/link";

// ─── GitHub link button ────────────────────────────────────────────────────────
const GithubLink = ({ href, label }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2
      text-sm font-medium text-black/60
      border border-black/10 rounded-xl
      px-4 py-2.5
      bg-white
      hover:bg-black hover:text-white hover:border-black
      transition-all duration-200
    "
  >
    <Github size={15} />
    {label}
  </Link>
);

export default  GithubLink