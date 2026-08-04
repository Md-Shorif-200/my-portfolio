// ─── Feature item ──────────────────────────────────────────────────────────────
export const FeatureItem = ({ title, feature }) => (
  <div className="flex gap-3 p-3 rounded-xl hover:bg-black/[0.02] transition-colors">
    <div className="mt-1.5 shrink-0">
      <div className="w-1.5 h-1.5 rounded-full bg-black/25" />
    </div>
    <div>
      {title && (
        <p className="text-sm font-semibold text-black/80 leading-snug">
          {title}
        </p>
      )}
      {feature && (
        <p className="text-[13px] leading-relaxed text-black/50 mt-0.5">
          {feature}
        </p>
      )}
    </div>
  </div>
);