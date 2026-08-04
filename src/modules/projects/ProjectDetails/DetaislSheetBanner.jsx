import Image from "next/image";


import {

  SheetHeader,
  SheetTitle,
} from "../../../../components/ui/sheet";

const DetaislSheetBanner = ({project}) => {
  return (
     <>
      {project?.image ? (
               <>
                 {/* ── Hero image with title overlay ── */}
               <div className="relative w-full h-52 sm:h-60 overflow-hidden shrink-0">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover object-top"
    sizes="(max-width: 640px) 100vw, 512px"
    priority
  />

  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

  {/* Subtle top vignette for badges readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

  {/* Badges */}
  {(project?.category || project?.isLive) && (
    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
      {/* Category badge */}
      {project?.category && (
        <span
          className="
            inline-flex items-center gap-1.5
            text-[10px] font-bold tracking-wider uppercase
            bg-white/95 text-neutral-700
            px-3 py-1 rounded-full
            border border-black/[0.08]
            shadow-[0_2px_12px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.05)]
            backdrop-blur-md
            ring-1 ring-white/80
          "
        >
          {project.category}
        </span>
      )}

      {/* Live Project badge */}
      {project.isLive && (
        <div
          className="z-10 flex items-center gap-1.5 rounded-full
            text-[10px] font-semibold tracking-widest uppercase
            border border-emerald-100 bg-white px-3 py-1
            shadow-[0_4px_20px_rgba(16,185,129,0.15)]
            backdrop-blur-sm transition-all duration-500 ease-out"
        >
          {/* Animated dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          </span>

          {/* Label */}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-[10px] font-bold uppercase tracking-widest text-transparent">
            Live Project
          </span>
        </div>
      )}
    </div>
  )}

  {/* Title overlay at bottom of image */}
  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
    <SheetHeader className="text-left space-y-0">
      <SheetTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold capitalize text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
        {project.title}
      </SheetTitle>
      {project?.subTitle && (
        <p className="text-sm lg:text-base font-medium capitalize text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
          {project.subTitle}
        </p>
      )}
    </SheetHeader>
  </div>
</div>
               </>
             ) : (
               /* ── Fallback header when no image ── */
               <div className="px-6 sm:px-7 pt-8 pb-4 bg-white border-b border-black/6 shrink-0">
                 {" "}
                 <SheetHeader className="text-left space-y-0">
                   {project?.category && (
                     <span
                       className="
                         inline-block w-fit
                         text-[10px] font-bold tracking-widest uppercase
                         text-black/40 mb-2
                       "
                     >
                       {project.category}
                     </span>
                   )}
                   <SheetTitle className="text-2xl sm:text-3xl font-bold capitalize text-black">
                     {project.title}
                   </SheetTitle>
                   {project?.subTitle && (
                     <p className="text-sm font-medium capitalize text-black/50 mt-1">
                       {project.subTitle}
                     </p>
                   )}
                 </SheetHeader>
               </div>
             )}
     </>
  )
}

export default DetaislSheetBanner