"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Github, Linkedin, FacebookIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Container from "../../components/Container";
import ResumePreviewModal from "./ResumePreviewModal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NAME = "SHORIF UDDIN RIFAT";

const ROLES = ["Full-Stack Developer", "Frontend Engineer", "Tech Enthusiast"];

// Tech-orbit rings (right-side decorative animation)
const ORBIT_OUTER = ["React", "Next.js", "Node.js", "MongoDB"];
const ORBIT_INNER = ["Express.js", "Tailwind CSS", "GSAP", "REST APIs"];

// Social links shown under the hero CTAs.
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Md-Shorif-200",
    icon: <Github className="h-4 w-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sharifweb200/",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/shorif.web.dev",
    icon: <FacebookIcon className="h-4 w-4" />,
  },
];

// Elements that GSAP reveals start hidden, so there is no flash before hydration.
const HIDDEN = { opacity: 0 };

export default function Banner() {
  const rootRef = useRef(null);
  const roleRef = useRef(null);
  const canvasRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleExploreClick = (e) => {
    e.preventDefault();
    const id = "featured_project";

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    router.push(`/#${id}`);
  };

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          fine: "(hover: hover) and (pointer: fine)",
        },
        (context) => {
          const { motion, fine } = context.conditions;

          /* ---------- Reduced motion: show the final state, no animation ---------- */
          if (!motion) {
            gsap.set(q("[data-reveal]"), { opacity: 1 });
            return;
          }

          const cleanups = [];
          let introDone = false;

          const roleEl = roleRef.current;
          if (roleEl) roleEl.textContent = "";

          /* ---------- 1. Ambient loops ---------- */
          gsap.to(q(".hero-orb-one"), {
            x: 50,
            y: -30,
            scale: 1.12,
            duration: 6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
          gsap.to(q(".hero-orb-two"), {
            x: -40,
            y: 35,
            scale: 1.15,
            duration: 7,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
          gsap.fromTo(
            q(".hero-grid"),
            { backgroundPosition: "0px 0px" },
            {
              backgroundPosition: "28px 28px",
              duration: 12,
              ease: "none",
              repeat: -1,
            },
          );

          /* ---------- Tech-stack orbit (right side, always visible) ---------- */
          gsap.to(q(".hero-tech-ring-outer"), {
            rotation: 360,
            duration: 48,
            ease: "none",
            repeat: -1,
          });
          gsap.to(q(".hero-tech-badge-outer"), {
            rotation: -360,
            duration: 48,
            ease: "none",
            repeat: -1,
          });
          gsap.to(q(".hero-tech-ring-inner"), {
            rotation: -360,
            duration: 30,
            ease: "none",
            repeat: -1,
          });
          gsap.to(q(".hero-tech-badge-inner"), {
            rotation: 360,
            duration: 30,
            ease: "none",
            repeat: -1,
          });
          gsap.to(q(".hero-tech-badge-outer, .hero-tech-badge-inner"), {
            opacity: 0.5,
            duration: 2.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: { each: 0.35, from: "random" },
          });
          gsap.fromTo(
            q(".hero-ping"),
            { scale: 1, opacity: 0.55 },
            {
              scale: 2.2,
              opacity: 0,
              duration: 1.8,
              ease: "power2.out",
              repeat: -1,
            },
          );

          /* ---------- Availability badge: pulsing dot ---------- */
          gsap.fromTo(
            q(".hero-badge-ping"),
            { scale: 1, opacity: 0.6 },
            {
              scale: 2.4,
              opacity: 0,
              duration: 1.6,
              ease: "power2.out",
              repeat: -1,
            },
          );

          /* ---------- Scroll-down indicator: gentle bounce ---------- */
          gsap.to(q(".hero-scroll-indicator-icon"), {
            y: 6,
            duration: 1,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });

          gsap.to(q(".hero-caret"), {
            opacity: 0,
            duration: 0.5,
            ease: "steps(1)",
            repeat: -1,
            yoyo: true,
          });

          /* ---------- 2. Typewriter (type, hold, erase, next role) ---------- */
          const typer = gsap.timeline({ repeat: -1, paused: true });
          ROLES.forEach((role) => {
            const s = { n: 0 };
            const write = () => {
              if (roleEl) roleEl.textContent = role.slice(0, s.n);
            };
            typer
              .fromTo(
                s,
                { n: 0 },
                {
                  n: role.length,
                  duration: role.length * 0.07,
                  ease: "none",
                  snap: { n: 1 },
                  onUpdate: write,
                },
              )
              .to({}, { duration: 1.5 })
              .to(s, {
                n: 0,
                duration: role.length * 0.035,
                ease: "none",
                snap: { n: 1 },
                onUpdate: write,
              })
              .to({}, { duration: 0.25 });
          });

          /* ---------- 3. Scroll-linked exit (parallax) ---------- */
          gsap
            .timeline({
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "bottom top",
                scrub: 0.8,
              },
            })
            .to(
              q(".hero-content"),
              { y: -90, opacity: 0.15, scale: 0.96, ease: "none" },
              0,
            )
            .to(q(".hero-canvas"), { y: 70, ease: "none" }, 0)
            .to(q(".hero-grid"), { y: 120, ease: "none" }, 0)
            .to(
              q(".hero-scroll-indicator"),
              { opacity: 0, y: 10, ease: "none" },
              0,
            );

          /* ---------- 4. Master intro timeline ---------- */
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.from(
            q(".hero-orb-one, .hero-orb-two"),
            { opacity: 0, duration: 1.6 },
            "-=0.6",
          )
            .fromTo(
              q(".hero-eyebrow"),
              { y: 24, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7 },
              "<",
            )
            .fromTo(
              q(".hero-letter"),
              {
                yPercent: 120,
                opacity: 0,
                rotateX: -80,
                transformPerspective: 800,
              },
              {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                transformPerspective: 800,
                duration: 1,
                stagger: 0.04,
                ease: "back.out(1.4)",
              },
              "-=0.3",
            )
            .fromTo(
              q(".hero-role"),
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7 },
              "-=0.6",
            )
            .add(() => typer.play(), "<0.3")
            .fromTo(
              q(".hero-copy"),
              { y: 24, opacity: 0, filter: "blur(10px)" },
              { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
              "-=0.4",
            )
            .fromTo(
              q(".hero-action"),
              { y: 24, opacity: 0, scale: 0.92 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                stagger: 0.12,
                ease: "back.out(1.6)",
              },
              "-=0.5",
            )
            .fromTo(
              q(".hero-social"),
              { y: 16, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
              "-=0.3",
            )
            .fromTo(
              q(".hero-scroll-indicator"),
              { opacity: 0 },
              { opacity: 1, duration: 0.6 },
              "-=0.2",
            )
            .add(() => {
              introDone = true;
            });

          /* ---------- 5. Particle network (canvas driven by gsap.ticker) ---------- */
          const canvas = canvasRef.current;
          const ctx = canvas ? canvas.getContext("2d") : null;
          const pointer = { x: -9999, y: -9999 };

          if (canvas && ctx) {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            let w = 0;
            let h = 0;
            let pts = [];
            let color = "#888";
            let frame = 0;
            let visible = true;

            const readColor = () => {
              const c = getComputedStyle(root)
                .getPropertyValue("--ds-dot-color")
                .trim();
              color = c || "#888";
            };

            const build = () => {
              const r = root.getBoundingClientRect();
              w = r.width;
              h = r.height;
              canvas.width = w * dpr;
              canvas.height = h * dpr;
              ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
              const n = Math.round(Math.min(80, Math.max(24, w / 20)));
              pts = Array.from({ length: n }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.4 + 0.6,
              }));
            };

            const draw = () => {
              if (!visible) return;
              frame += 1;
              if (frame % 120 === 1) readColor();
              const dt = gsap.ticker.deltaRatio();

              ctx.clearRect(0, 0, w, h);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.lineWidth = 1;

              for (let i = 0; i < pts.length; i++) {
                const p = pts[i];
                p.x += p.vx * dt;
                p.y += p.vy * dt;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                const dxp = pointer.x - p.x;
                const dyp = pointer.y - p.y;
                const dp = Math.hypot(dxp, dyp);
                if (dp < 170) {
                  p.x += dxp * 0.004 * dt;
                  p.y += dyp * 0.004 * dt;
                  ctx.globalAlpha = (1 - dp / 170) * 0.6;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(pointer.x, pointer.y);
                  ctx.stroke();
                }

                ctx.globalAlpha = 0.7;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < pts.length; j++) {
                  const o = pts[j];
                  const d = Math.hypot(p.x - o.x, p.y - o.y);
                  if (d < 120) {
                    ctx.globalAlpha = (1 - d / 120) * 0.35;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(o.x, o.y);
                    ctx.stroke();
                  }
                }
              }
              ctx.globalAlpha = 1;
            };

            build();
            gsap.ticker.add(draw);
            window.addEventListener("resize", build);

            ScrollTrigger.create({
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              onToggle: (self) => {
                visible = self.isActive;
              },
            });

            cleanups.push(() => {
              gsap.ticker.remove(draw);
              window.removeEventListener("resize", build);
            });
          }

          /* ---------- 6. Pointer interactions (mouse / trackpad only) ---------- */
          if (fine) {
            // Depth layers (orbs, tech-orbit) drift with the pointer
            const layers = q(".hero-layer").map((el) => ({
              depth: Number(el.dataset.depth || 20),
              xTo: gsap.quickTo(el, "x", { duration: 1, ease: "power3" }),
              yTo: gsap.quickTo(el, "y", { duration: 1, ease: "power3" }),
            }));

            // Soft spotlight that follows the cursor
            const spot = q(".hero-spot")[0];
            const spotX = spot
              ? gsap.quickTo(spot, "x", { duration: 0.7, ease: "power3" })
              : null;
            const spotY = spot
              ? gsap.quickTo(spot, "y", { duration: 0.7, ease: "power3" })
              : null;
            if (spot) gsap.set(spot, { xPercent: -50, yPercent: -50 });

            // Name letters are pushed away from the cursor
            const title = q(".hero-title")[0];
            // NOTE: "scale" is split into scaleX + scaleY (fixes
            // "scale not eligible for reset" warning)
            const letters = q(".hero-letter").map((el) => ({
              el,
              x: gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" }),
              y: gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" }),
              sx: gsap.quickTo(el, "scaleX", { duration: 0.6, ease: "power3" }),
              sy: gsap.quickTo(el, "scaleY", { duration: 0.6, ease: "power3" }),
            }));
            let wasNear = false;

            const resetLetters = () => {
              letters.forEach((l) => {
                l.x(0);
                l.y(0);
                l.sx(1);
                l.sy(1);
              });
              wasNear = false;
            };

            const repel = (cx, cy) => {
              if (!introDone || !title) return;
              const tb = title.getBoundingClientRect();
              const near =
                cx > tb.left - 140 &&
                cx < tb.right + 140 &&
                cy > tb.top - 140 &&
                cy < tb.bottom + 140;

              if (!near) {
                if (wasNear) resetLetters();
                return;
              }
              wasNear = true;

              letters.forEach((l) => {
                const b = l.el.getBoundingClientRect();
                const ox = gsap.getProperty(l.el, "x");
                const oy = gsap.getProperty(l.el, "y");
                const lx = b.left + b.width / 2 - ox;
                const ly = b.top + b.height / 2 - oy;
                const dx = lx - cx;
                const dy = ly - cy;
                const d = Math.hypot(dx, dy) || 1;
                const f = Math.max(0, 1 - d / 150);
                l.x((dx / d) * f * 26);
                l.y((dy / d) * f * 26 - f * 10);
                l.sx(1 + f * 0.18);
                l.sy(1 + f * 0.18);
              });
            };

            const onMove = (e) => {
              const r = root.getBoundingClientRect();
              const lx = e.clientX - r.left;
              const ly = e.clientY - r.top;
              pointer.x = lx;
              pointer.y = ly;
              if (spotX && spotY) {
                spotX(lx);
                spotY(ly);
              }

              const nx = lx / r.width - 0.5;
              const ny = ly / r.height - 0.5;
              layers.forEach((l) => {
                l.xTo(nx * l.depth);
                l.yTo(ny * l.depth);
              });

              repel(e.clientX, e.clientY);
            };

            const onEnter = () => {
              if (spot) gsap.to(spot, { opacity: 0.9, duration: 0.6 });
            };
            const onLeave = () => {
              pointer.x = -9999;
              pointer.y = -9999;
              if (spot) gsap.to(spot, { opacity: 0, duration: 0.6 });
              layers.forEach((l) => {
                l.xTo(0);
                l.yTo(0);
              });
              resetLetters();
            };

            root.addEventListener("pointermove", onMove);
            root.addEventListener("pointerenter", onEnter);
            root.addEventListener("pointerleave", onLeave);
            cleanups.push(() => {
              root.removeEventListener("pointermove", onMove);
              root.removeEventListener("pointerenter", onEnter);
              root.removeEventListener("pointerleave", onLeave);
            });

            // Magnetic buttons
            q(".hero-action").forEach((el) => {
              const move = (e) => {
                if (!introDone) return;
                const b = el.getBoundingClientRect();
                const dx = e.clientX - (b.left + b.width / 2);
                const dy = e.clientY - (b.top + b.height / 2);
                gsap.to(el, {
                  x: dx * 0.25,
                  y: dy * 0.35,
                  duration: 0.4,
                  ease: "power3.out",
                  overwrite: "auto",
                });
              };
              const enter = () => {
                if (!introDone) return;
                gsap.to(el, {
                  scale: 1.04,
                  duration: 0.3,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              };
              const leave = () => {
                if (!introDone) return;
                gsap.to(el, {
                  x: 0,
                  y: 0,
                  scale: 1,
                  duration: 0.9,
                  ease: "elastic.out(1, 0.4)",
                  overwrite: "auto",
                });
              };
              el.addEventListener("pointermove", move);
              el.addEventListener("pointerenter", enter);
              el.addEventListener("pointerleave", leave);
              cleanups.push(() => {
                el.removeEventListener("pointermove", move);
                el.removeEventListener("pointerenter", enter);
                el.removeEventListener("pointerleave", leave);
              });
            });
          }

          return () => {
            cleanups.forEach((fn) => fn());
            gsap.killTweensOf([
              ...q(".hero-letter"),
              ...q(".hero-action"),
              ...q(".hero-social"),
              ...q(".hero-spot"),
            ]);
          };
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="
      relative isolate flex min-h-[600px] 
      flex-col justify-center overflow-hidden
      pt-24
      bg-[radial-gradient(ellipse_zat_50%_0%,rgba(59,130,246,0.07),transparent_60%)]
    
      
    "
    >
      {/* Background: grid */}
      <div
        className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--ds-dot-color) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      />

      {/* Background: particle network */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="hero-canvas pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
      />

      {/* Background: cursor spotlight */}
      <div
        aria-hidden="true"
        className="hero-spot pointer-events-none absolute left-0 top-0 -z-10 h-[420px] w-[420px] rounded-full opacity-0 blur-[90px]"
        style={{ background: "var(--ds-radial-glow)" }}
      />

      {/* Background: ambient glows (outer = pointer depth, inner = loop) */}
      <div
        data-depth="40"
        className="hero-layer pointer-events-none absolute -left-32 top-10 -z-10"
      >
        <div
          className="hero-orb-one h-72 w-72 rounded-full blur-[100px] sm:h-96 sm:w-96"
          style={{ background: "var(--ds-radial-glow)" }}
        />
      </div>

      <div
        data-depth="-30"
        className="hero-layer pointer-events-none absolute -right-32 bottom-0 -z-10"
      >
        <div
          className="hero-orb-two h-72 w-72 rounded-full blur-[100px] sm:h-96 sm:w-96"
          style={{ background: "var(--ds-radial-glow)" }}
        />
      </div>

      {/* Background: tech stack orbit (always-on, professional, tech-themed) */}
      <div
        data-depth="-55"
        aria-hidden="true"
        className="hero-layer pointer-events-none absolute right-[6%] top-[8%] -z-10 hidden h-[300px] w-[300px] md:block lg:right-[10%] lg:h-[360px] lg:w-[360px]"
      >
        {/* Center hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <span className="hero-ping absolute inset-0 rounded-2xl border border-ds-primary/50" />
            <span className="absolute inset-0 rounded-2xl border border-ds-border bg-ds-background/70 backdrop-blur-sm" />
            <span className="relative text-base font-bold text-ds-primary">
              {"</>"}
            </span>
          </div>
        </div>

        {/* Outer ring: core stack */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hero-tech-ring-outer relative h-[240px] w-[240px] rounded-full border border-dashed border-ds-border/50 lg:h-[290px] lg:w-[290px]">
            {ORBIT_OUTER.map((tech, i) => {
              const angle = (360 / ORBIT_OUTER.length) * i;
              return (
                <div
                  key={tech}
                  className="absolute left-1/2 top-1/2 h-0 w-0"
                  style={{
                    transform: `rotate(${angle}deg) translateX(120px) rotate(${-angle}deg)`,
                  }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2">
                    <span className="hero-tech-badge-outer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-ds-border bg-ds-background/85 px-3 py-1.5 text-[11px] font-semibold text-ds-primary shadow-sm backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ds-primary" />
                      {tech}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inner ring: supporting stack */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hero-tech-ring-inner relative h-[140px] w-[140px] rounded-full border border-ds-border/40">
            {ORBIT_INNER.map((tech, i) => {
              const angle = (360 / ORBIT_INNER.length) * i + 45;
              return (
                <div
                  key={tech}
                  className="absolute left-1/2 top-1/2 h-0 w-0"
                  style={{
                    transform: `rotate(${angle}deg) translateX(70px) rotate(${-angle}deg)`,
                  }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2">
                    <span className="hero-tech-badge-inner inline-flex items-center whitespace-nowrap rounded-full border border-ds-border/70 bg-ds-background/70 px-2.5 py-1 text-[10px] font-medium text-ds-primary/80 backdrop-blur-sm">
                      {tech}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Container>
        <div className="hero-content mx-auto w-full max-w-6xl">
          {/* Availability badge */}
          <div className="mb-5 flex justify-center sm:justify-start">
            <div
              data-reveal
              style={HIDDEN}
              className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-ds-border bg-ds-background/70 px-4 py-1.5 text-xs font-semibold text-ds-primary backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="hero-badge-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for freelance &amp; full-time roles
            </div>
          </div>

          {/* Name: letters react to the cursor */}
          <h1
            aria-label={NAME}
            className="hero-title mb-4 max-w-5xl text-center text-5xl font-black leading-[0.98] tracking-[-0.055em] text-ds-text sm:text-left sm:text-7xl lg:text-[90px] xl:text-[104px]"
          >
            {NAME.split(" ").map((word) => (
              <span
                key={word}
                className="mr-[0.22em] inline-block whitespace-nowrap"
              >
                {word.split("").map((letter, i) => (
                  <span
                    key={`${letter}-${i}`}
                    aria-hidden="true"
                    data-reveal
                    className="hero-letter inline-block will-change-transform"
                    style={{ opacity: 0, transformOrigin: "50% 100%" }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Role */}
          <div className=" flex  flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <div
              data-reveal
              style={HIDDEN}
              className="hero-role flex min-h-9 items-center text-xl font-bold tracking-tight text-ds-primary sm:text-3xl "
              aria-label={ROLES.join(", ")}
            >
              <span ref={roleRef}>{ROLES[0]}</span>
              <span
                aria-hidden="true"
                className="hero-caret ml-1 inline-block h-[1.1em] w-[2px] bg-ds-primary"
              />
            </div>
          </div>

          <p
            data-reveal
            style={HIDDEN}
            className="hero-copy mt-3 mx-auto mb-6 max-w-2xl text-center text-[15px]  text-ds-primary/65 sm:mx-0 sm:text-left leading-6"
          >
            I build modern web applications with a focus on clean code,
            maintainable architecture, responsive interfaces and meaningful user
            experiences.
          </p>

          {/* Actions (magnetic) */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <div
              data-reveal
              style={HIDDEN}
              className="hero-action rounded-xl bg-ds-primary text-ds-background shadow-lg shadow-black/10"
            >
              <ResumePreviewModal />
            </div>

            <Link
              href={
                pathname === "/" ? "#featured_project" : "/#featured_project"
              }
              onClick={handleExploreClick}
              data-reveal
              style={HIDDEN}
              className="hero-action inline-flex min-h-12 items-center gap-2 rounded-xl border border-ds-border px-6 py-3 text-sm font-semibold text-ds-primary transition-colors hover:bg-ds-primary/5"
            >
              Explore projects
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Social links */}
          <div className="mb-2 flex items-center justify-center gap-4 sm:justify-start">
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                data-reveal
                style={HIDDEN}
                className="hero-social flex h-10 w-10 items-center justify-center rounded-full border border-ds-border text-ds-primary/70 transition-colors hover:border-ds-primary hover:text-ds-primary"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll-down indicator */}
      <div
        data-reveal
        style={HIDDEN}
        aria-hidden="true"
        className="hero-scroll-indicator pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ds-primary/50 sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <svg
          className="hero-scroll-indicator-icon h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}