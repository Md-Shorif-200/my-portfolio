/* count থাকলে GSAP সংখ্যাটি 0 থেকে count-up করবে।
   আগের stats এর সব data এখানে আছে। Remote entry টি আবার চালু করতে comment তুলে দিন। */
const stats = [
  {
    count: 2,
    suffix: "+",
    unit: "Years",
    label: "Experience",
    desc: "Professional web development",
  },
  {
    count: 5,
    suffix: "+",
    unit: "Projects",
    label: "Real World",
    desc: "Production-ready applications",
  },
  {
    text: "Clean Code",
    label: "Always",
    desc: "Readable & maintainable code",
  },
  // {
  //   text: "Remote",
  //   label: "Friendly",
  //   desc: "Available globally, anytime",
  // },
];

export default function BannerStats() {
  return (
    <div className="relative">
      {/* উপরের রেখা, load এ বাঁ থেকে ডানে আঁকা হয় */}
      <span className="stat-rule absolute top-0 left-0 h-px w-full bg-[color:var(--line)]" />

      <dl className="grid grid-cols-1 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`stat-item group relative py-6 sm:py-8 ${
              i > 0 ? "sm:border-l sm:pl-8 border-[color:var(--line)]" : ""
            }`}
          >
            <dt className="flex items-baseline gap-2 text-4xl sm:text-5xl font-bold leading-none">
              {s.count !== undefined ? (
                <>
                  <span>
                    <span className="count tabular-nums" data-count={s.count}>
                      {s.count}
                    </span>
                    <span className="text-[color:var(--accent)]">{s.suffix}</span>
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-[color:var(--muted)]">
                    {s.unit}
                  </span>
                </>
              ) : (
                <span>{s.text}</span>
              )}
            </dt>
            <dd className="mt-3">
              <span className="block text-base font-semibold">{s.label}</span>
              <span className="block text-sm text-[color:var(--muted)]">{s.desc}</span>
            </dd>

            {/* hover করলে উপরে accent রেখা বাড়ে */}
            <span className="absolute top-0 left-0 h-[2px] w-0 bg-[color:var(--accent)] transition-[width] duration-500 ease-out group-hover:w-full" />
          </div>
        ))}
      </dl>
    </div>
  );
}