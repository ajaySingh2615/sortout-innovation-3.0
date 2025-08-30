"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

/* Data (same as before) */
const services = [
  {
    id: 1,
    title: "Corporate/Portfolio Websites",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    features: [
      "Website Maintenance & Updates",
      "Performance Optimization",
      "Security Monitoring",
      "Backup & Recovery",
    ],
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L13.09 8.26L19 7L17.74 13.26L22 15L15.74 16.26L17 22L10.74 20.74L9 23L7.26 16.74L1 15L7.26 13.74L6 7L12.26 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Maintenance & Support",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    features: [
      "24/7 Technical Support",
      "Regular System Updates",
      "Bug Fixes & Patches",
      "Performance Monitoring",
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Branding & Creative Design",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    features: [
      "Logo & Brand Identity",
      "Marketing Materials",
      "Creative Campaigns",
      "Brand Guidelines",
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Website Design (UI/UX)",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Responsive Design",
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9l-5.09 1.74L19 17l-7-3-7 3 2.09-6.26L2 9l6.91-.74L12 2z" />
      </svg>
    ),
  },
];

/* Carousel config */
const VISIBLE_CARDS = 4;
const PAUSE_MS = 3000;
const NORMAL_ANIM_MS = 450;
const SLOW_ANIM_MS = 1400;

const ServicesSection = () => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [cardW, setCardW] = useState(320);
  const [tx, setTx] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  // NEW: animation speed that we can slow while hovered
  const [animMs, setAnimMs] = useState(NORMAL_ANIM_MS);
  const animMsRef = useRef(NORMAL_ANIM_MS);

  const idxRef = useRef(0);
  const stepRef = useRef(340);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    animMsRef.current = animMs;
  }, [animMs]);

  const measure = () => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const styles = getComputedStyle(track);
    let gap = parseFloat((styles as any).gap || styles.columnGap || "24");
    if (!isFinite(gap)) gap = 24;

    const vw = viewport.clientWidth;
    const newCardW = Math.max(
      240,
      Math.floor((vw - gap * (VISIBLE_CARDS - 1)) / VISIBLE_CARDS)
    );

    setCardW(newCardW);
    stepRef.current = newCardW + gap;
    setWithTransition(false);
    setTx(-(idxRef.current * stepRef.current));
  };

  const stepOnce = () => {
    const step = stepRef.current;
    const nextIdx = idxRef.current + 1;

    setWithTransition(true);
    setTx(-(nextIdx * step));

    if (nextIdx === services.length) {
      setTimeout(() => {
        setWithTransition(false);
        setTx(0);
        idxRef.current = 0;
      }, animMsRef.current + 20);
    } else {
      idxRef.current = nextIdx;
    }

    // schedule next step using current (maybe slowed) duration
    timerRef.current = setTimeout(stepOnce, PAUSE_MS + animMsRef.current);
  };

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(measure);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const start = setTimeout(() => {
      measure();
      timerRef.current = setTimeout(stepOnce, PAUSE_MS);
    }, 150);
    return () => {
      clearTimeout(start);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    // pause auto-advance
    if (timerRef.current) clearTimeout(timerRef.current);
    // slow any upcoming transitions
    setAnimMs(SLOW_ANIM_MS);
  };

  const handleMouseLeave = () => {
    // restore speed and resume after normal pause
    setAnimMs(NORMAL_ANIM_MS);
    timerRef.current = setTimeout(stepOnce, PAUSE_MS);
  };

  const trackStyle: React.CSSProperties = {
    transform: `translateX(${Math.abs(tx) < 0.5 ? 0 : tx}px)`,
    transition: withTransition
      ? `transform ${animMs}ms cubic-bezier(.2,.7,.2,1)`
      : "none",
    willChange: "transform",
  };

  return (
    <section className="relative overflow-hidden bg-[#F6EFE6]">
      <div className="mx-auto px-6 md:px-10 py-20 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-wide text-[#6B7280] uppercase mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] max-w-4xl mx-auto">
            Empower Your Business With Innovative Digital Services
          </h2>
        </div>

        {/* Viewport with exactly 4 cards */}
        <div className="relative w-screen -ml-6 md:-ml-10 -mr-6 md:-mr-10">
          <div className="max-w-[calc(100vw-48px)] md:max-w-[calc(100vw-80px)] mx-auto px-6 md:px-10">
            <div
              ref={viewportRef}
              className="overflow-hidden w-full edge-fade py-2"
            >
              <div
                ref={trackRef}
                className="flex gap-8 items-stretch"
                style={trackStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {services.map((s) => (
                  <Card key={s.id} service={s} width={cardW} />
                ))}
                {services.map((s) => (
                  <Card
                    key={`dup-${s.id}`}
                    service={s}
                    width={cardW}
                    ariaHidden
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scoped helpers */}
      <style jsx>{`
        .edge-fade {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 64px,
            black calc(100% - 64px),
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 64px,
            black calc(100% - 64px),
            transparent 100%
          );
        }
        .clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

/* CARD — your approved layout */
function Card({
  service,
  width,
  ariaHidden = false,
}: {
  service: (typeof services)[number];
  width: number;
  ariaHidden?: boolean;
}) {
  return (
    <div
      data-card="true"
      aria-hidden={ariaHidden || undefined}
      style={
        {
          width,
          ["--notch-offset" as any]: "6.5rem",
          ["--notch-diam" as any]: "68px",
          ["--brand" as any]: "#dc2626",
          ["--page" as any]: "#F6EFE6",
        } as React.CSSProperties
      }
      className="
        group relative flex-shrink-0 rounded-[26px] bg-white
        shadow-[0_10px_28px_rgba(0,0,0,0.06)]
        transition-colors duration-300
        hover:bg-[var(--brand)]
        before:content-[''] before:absolute
        before:bottom-[-12px] before:right-[var(--notch-offset)]
        before:w-[var(--notch-diam)] before:h-[var(--notch-diam)]
        before:rounded-full before:bg-[var(--page)]
        before:shadow-[0_-1px_0_rgba(0,0,0,0.04)]"
    >
      {/* Floating + button (outside, bottom-right) */}
      <button
        aria-label="Add"
        className="absolute -bottom-1 right-28 z-10 w-12 h-12 rounded-full
                   bg-[var(--brand)] text-white grid place-content-center
                   shadow-lg transition duration-300
                   group-hover:bg-white group-hover:text-[var(--brand)] group-hover:scale-105"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v12M6 12h12"
          />
        </svg>
      </button>

      {/* Grid layout for consistent vertical rhythm */}
      <div className="grid grid-rows-[auto_auto_1fr_auto] gap-7 p-8 min-h-[640px] text-slate-700 group-hover:text-white">
        {/* Title */}
        <h4 className="clamp-2 leading-tight text-[26px] font-semibold text-[#1f2937] transition-colors duration-300 group-hover:!text-white">
          {service.title}
        </h4>

        {/* Image with badge — image zooms on hover, stays color */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full aspect-[16/9] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute -translate-y-1/2 left-5 bottom-0 w-12 h-12 rounded-full bg-[var(--brand)] text-white ring-2 ring-white grid place-content-center">
            {service.icon}
          </div>
        </div>

        {/* Features — bullets and text flip to white on hover */}
        <ul className="space-y-4 text-[16px] leading-7">
          {service.features.map((f, i) => (
            <li
              key={i}
              className="list-disc list-inside text-slate-600 group-hover:text-white
                         marker:text-slate-400 group-hover:marker:text-white"
            >
              {f}
            </li>
          ))}
        </ul>

        {/* Bottom divider + MORE aligned right */}
        <div className="mt-auto">
          <div className="h-px w-full bg-neutral-200/80 group-hover:bg-white/25 mb-4 transition-colors" />
          <div className="flex items-center justify-end">
            <a
              href="#"
              className="text-xs font-semibold tracking-wide text-slate-400 group-hover:text-white underline-offset-4 hover:underline uppercase"
            >
              MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
