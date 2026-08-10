import { FaCode, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-neutral-950 dark:to-black overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 dark:via-emerald-500 to-transparent" />

      {/* Animated background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[100px] bg-emerald-500/10 dark:bg-emerald-500/[0.07] blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-3" data-aos="fade-up">
        {/* Name & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          {/* Name with icon */}
          <div className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 dark:border-emerald-500/15 group-hover:bg-emerald-500/20 transition-all duration-300">
              <FaCode className="text-emerald-400 text-xs" />
            </div>
            <span className="text-white font-semibold tracking-wide text-sm capitalize">
              Shorif Uddin
            </span>
          </div>

          {/* Divider */}
          <span className="hidden sm:inline text-slate-600 dark:text-neutral-700 text-xs">|</span>

          {/* Copyright */}
          <p className="text-slate-400 dark:text-neutral-500 text-xs tracking-wider">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300 dark:text-neutral-400">All Rights Reserved</span>
          </p>
        </div>

        {/* Divider line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-600 dark:via-neutral-700 to-transparent" />

        {/* Quote */}
        <div className="flex items-center gap-2">
          <FaHeart className="text-emerald-400/60 text-[10px] animate-pulse" />
          <p className="text-slate-400 dark:text-neutral-500 text-xs italic tracking-widest font-light">
            Alhamdulillah for everything.
          </p>
          <FaHeart className="text-emerald-400/60 text-[10px] animate-pulse" />
        </div>
      </div>

      {/* Decorative bottom dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        <span className="w-1 h-1 rounded-full bg-emerald-500/30" />
        <span className="w-1 h-1 rounded-full bg-emerald-500/60" />
        <span className="w-1 h-1 rounded-full bg-emerald-500/30" />
      </div>
    </footer>
  );
}