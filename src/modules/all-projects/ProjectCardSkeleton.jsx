const ProjectCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
      {/* Image placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      <div className="p-5 space-y-4">
        {/* Title + subtitle */}
        <div className="space-y-2">
          <div className="h-5 w-2/3 rounded-md bg-neutral-200 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
          <div className="h-3.5 w-4/5 rounded-md bg-neutral-150 bg-neutral-200/70 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        </div>

        {/* Tag pills */}
        <div className="flex gap-2">
          {[16, 20, 14].map((w, i) => (
            <div
              key={i}
              style={{ width: `${w * 4}px` }}
              className="h-6 rounded-full bg-neutral-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1">
          <div className="h-10 flex-1 rounded-xl bg-neutral-200 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
          <div className="h-10 flex-1 rounded-xl bg-neutral-200 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;