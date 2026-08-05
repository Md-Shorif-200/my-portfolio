// ─── Small reusable section wrapper ───────────────────────────────────────────
const Section = ({ title, children }) => (
  <section className="mt-10 first:mt-0">
    <div className="flex items-center gap-4 mb-5">
      <h2 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-emerald-500 shrink-0">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/40 via-emerald-500/20 to-transparent" />
    </div>
    <div className="space-y-4">{children}</div>
  </section>
);

export default Section