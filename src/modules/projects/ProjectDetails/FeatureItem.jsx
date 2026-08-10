// ─── Feature item ──────────────────────────────────────────────────────────────
export const FeatureItem = ({ title, feature }) => (
  <div className="flex gap-3 p-3 rounded-xl hover:bg-ds-primary/[0.02] transition-colors">
    <div className="mt-1.5 shrink-0">
      <div className="w-1.5 h-1.5 rounded-full bg-ds-primary/25" />
    </div>
    <div>
      {title && (
        <p className="text-sm font-semibold text-ds-pribg-ds-primary/80 leading-snug">
          {title}
        </p>
      )}
      {feature && (
        <p className="text-[13px] leading-relaxed text-ds-pribg-ds-primary/50 mt-0.5">
          {feature}
        </p>
      )}
    </div>
  </div>
);