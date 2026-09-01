import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, Compass, Briefcase } from "lucide-react";
import { BrandIcon } from "./icons";

export function FadeIn({ children, delay = 0, y = 32, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function SectionDivider({ from, to }: { from: string; to: string }) {
  return (
    <div className="w-full h-24 z-0 relative"
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        marginTop: "-1px",
        marginBottom: "-1px"
      }}
    />
  );
}

/** Wraps a whole section with a scroll-triggered fade+slide-up reveal. */
export function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className}
      initial={{ opacity: 0, y: 72 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}


export function SectionLabel({ eyebrow, title, subtitle, light = false, align = "left", accent = "#E8192C", icon }:
  { eyebrow?: string; title: string; subtitle?: string; light?: boolean; align?: "left" | "center" | "right"; accent?: string; icon?: React.ReactNode }) {
  const al = align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start";
  return (
    <FadeIn className={`flex flex-col gap-2 ${al}`}>
      {/* Eyebrow removed per user request */}
      <div className="flex items-center gap-3">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <h2 className="text-5xl md:text-6xl font-black leading-none"
          style={{ fontFamily: "var(--font-rajdhani)", color: light ? "#fff" : "#0D0D0D", letterSpacing: "1px" }}>
          {title}
        </h2>
      </div>
      <div className="h-1 w-14 mt-1" style={{ background: accent }} />
      {subtitle && (
        <p className="mt-2 text-base leading-relaxed max-w-lg"
          style={{ color: light ? "#aab" : "#6B6B6B", fontFamily: "var(--font-inter)" }}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}

export function RedBtn({ children, outline = false, onClick, href, download, accent = "#E8192C" }:
  { children: React.ReactNode; outline?: boolean; onClick?: () => void; href?: string; download?: boolean; accent?: string }) {
  const style: React.CSSProperties = {
    height: 50,
    background: outline ? `${accent}00` : accent,
    color: outline ? accent : "#fff",
    border: `2px solid ${accent}`,
    fontFamily: "var(--font-barlow)",
    letterSpacing: "2px",
  };
  const cls = "hov flex items-center gap-2 px-7 text-sm font-bold uppercase tracking-widest" + (outline ? "" : " cursor-white");
  const hoverBg = outline ? `${accent}14` : accent; // Simplified hover for custom accents
  if (href) {
    return (
      <motion.a href={href} download={download} onClick={onClick} className={cls} style={style}
        whileHover={{ scale: 1.03, opacity: outline ? 1 : 0.9, background: hoverBg }}
        whileTap={{ scale: 0.97 }}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button onClick={onClick} className={cls} style={style}
      whileHover={{ scale: 1.03, opacity: outline ? 1 : 0.9, background: hoverBg }}
      whileTap={{ scale: 0.97 }}>
      {children}
    </motion.button>
  );
}

export function Chip({ label, icon, dark = false }: { label: string; icon?: React.ReactNode; dark?: boolean }) {
  return (
    <span className="flex items-center gap-2 text-xs px-3 py-1.5 border uppercase tracking-widest"
      style={{
        fontFamily: "var(--font-mono)",
        background: dark ? "rgba(255,255,255,0.07)" : "#F5F5F5",
        borderColor: dark ? "rgba(255,255,255,0.15)" : "#E0E0E0",
        color: dark ? "#aab" : "#555",
      }}>
      {icon && <span className="text-[14px]">{icon}</span>}
      {label}
    </span>
  );
}

export function ProgressRing({ pct, color = "#E8192C" }: { pct: number; color?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const r = 28;
  const circ = 2 * Math.PI * r;
  return (
    <div ref={ref} className="relative w-16 h-16 flex items-center justify-center">
      <svg width="64" height="64" className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#E8E8E8" strokeWidth="4" />
        <motion.circle cx="32" cy="32" r={r} fill="none" stroke={color} strokeWidth="4"
          strokeLinecap="round" strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={inView ? { strokeDashoffset: circ - (pct / 100) * circ } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }} />
      </svg>
      <span className="absolute text-xs font-bold" style={{ color, fontFamily: "var(--font-mono)" }}>{pct}%</span>
    </div>
  );
}

export function SkillCard({ name, pct, icon, brand, color = "#E8192C" }:
  { name: string; pct: number; icon: string; brand?: string; color?: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="hov flex flex-col items-center gap-3 p-5 border transition-all duration-300"
      style={{
        background: hov ? "#fff" : "#FAFAFA",
        borderColor: hov ? color : "#E5E5E5",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? `0 8px 24px ${color}22` : "none",
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <ProgressRing pct={pct} color={color} />
      {brand ? (
        <span className="h-8 flex items-center transition-colors duration-300" style={{ color: hov ? color : "#3A3A3A" }}>
          <BrandIcon name={brand} size={30} />
        </span>
      ) : (
        <span className="text-3xl h-8 flex items-center">{icon}</span>
      )}
      <span className="text-sm font-bold tracking-wide text-center"
        style={{ fontFamily: "var(--font-barlow)", color: "#0D0D0D" }}>{name}</span>
    </div>
  );
}

export function TimelineNode({ title, org, date, desc, chips, logo, defaultOpen = false, light = false, accent = "#E8192C" }:
  { title: string; org: string; date: string; desc: string; chips?: string[]; logo?: string | null; defaultOpen?: boolean; light?: boolean; accent?: string }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <FadeIn>
      <div className="flex gap-5">
        <div className="flex flex-col items-center flex-shrink-0 pt-1">
          <button className="hov w-5 h-5 rounded-full border-2 flex items-center justify-center"
            style={{ background: light ? "#1A1F35" : "#fff", borderColor: accent, boxShadow: `0 0 0 3px ${accent}22` }}
            onClick={() => setOpen(!open)}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
          </button>
          <div className="w-px flex-1 mt-1.5" style={{ background: light ? `${accent}33` : `${accent}22` }} />
        </div>
        <div className="flex-1 pb-10">
          <button className="w-full text-left hov" onClick={() => setOpen(!open)}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {logo && (
                  <img src={logo} alt={org} className="w-9 h-9 object-contain flex-shrink-0"
                    style={{ background: light ? "#fff" : "transparent", borderRadius: 4 }} />
                )}
                <div>
                  <div className="font-bold text-base" style={{ fontFamily: "var(--font-barlow)", color: light ? "#F0F0F8" : "#0D0D0D" }}>
                    {title}
                  </div>
                  <div className="text-sm font-semibold mt-0.5" style={{ color: accent }}>{org}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-mono tracking-wide" style={{ color: "#999" }}>{date}</span>
                <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronRight size={14} color="#999" />
                </motion.span>
              </div>
            </div>
          </button>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: "hidden" }}>
                <div className="mt-3 p-4 border-l-2" style={{ borderColor: accent, background: light ? "rgba(255,255,255,0.04)" : "#F9F9F9" }}>
                  <p className="text-sm leading-relaxed" style={{ color: light ? "#aab" : "#555" }}>{desc}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </FadeIn>
  );
}

export function ExperienceCard({ company, role, duration, logoSrc, points, light = false, accent = "#E8192C" }:
  { company: string; role: string; duration: string; logoSrc: string | null; points: string[]; light?: boolean; accent?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.01 }}
      className="w-full rounded-lg border p-4 lg:p-5 flex flex-row gap-3 lg:gap-4 shadow-sm"
      style={{ background: light ? "#1A1F35" : "#fff", borderColor: light ? "rgba(255,255,255,0.1)" : "#E5E5E5" }}>
      <div className="shrink-0 flex items-start">
        <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-xl flex items-center justify-center overflow-hidden border"
          style={{ background: light ? "#fff" : "#F8F8F8", borderColor: light ? "rgba(255,255,255,0.15)" : "#E5E5E5" }}>
          {logoSrc ? (
            <img src={logoSrc} alt={company} className="object-contain w-full h-full" />
          ) : (
            <Briefcase size={26} className="text-neutral-400" />
          )}
        </div>
      </div>
      <div className="flex flex-col text-left min-w-0">
        <h3 className="font-semibold text-base lg:text-lg break-words"
          style={{ fontFamily: "var(--font-barlow)", color: light ? "#F0F0F8" : "#0D0D0D" }}>{company}</h3>
        <p className="text-sm lg:text-base" style={{ color: accent }}>{role}</p>
        <p className="text-xs lg:text-sm mb-3" style={{ color: light ? "#7880A0" : "#999" }}>{duration}</p>
        <ul className="list-disc pl-4 space-y-2 text-[11px] lg:text-sm" style={{ color: light ? "#aab" : "#555" }}>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function AchCard({ icon, title, platform, date, accent = "#E8192C" }: { icon: React.ReactNode; title: string; platform: string; date: string; accent?: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="hov flex gap-4 p-5 border-l-4 border transition-all duration-200 h-full"
      style={{
        borderLeftColor: accent,
        borderTopColor: hov ? `${accent}88` : "#E5E5E5",
        borderRightColor: hov ? `${accent}88` : "#E5E5E5",
        borderBottomColor: hov ? `${accent}88` : "#E5E5E5",
        background: hov ? "#FFEFEF" : "#FAFAFA",
        transform: hov ? "translateX(4px)" : "none",
        transition: "all 0.2s",
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div className="mt-0.5 flex-shrink-0" style={{ color: accent }}>{icon}</div>
      <div>
        <div className="font-bold text-sm" style={{ fontFamily: "var(--font-barlow)", color: "#0D0D0D" }}>{title}</div>
        <div className="text-[10px] tracking-widest mt-0.5 font-mono" style={{ color: accent }}>{platform}</div>
        <div className="text-xs mt-0.5" style={{ color: "#999" }}>{date}</div>
      </div>
    </div>
  );
}

export function ProjectCard({ title, desc, img, link, live, icon, accent = "#E8192C", dark = false }:
  { title: string; desc: string; img: string | null; link: string; live?: string; icon?: string; accent?: string; dark?: boolean }) {
  return (
    <div
      className="hov relative overflow-hidden rounded-lg shadow-lg border h-full w-full flex flex-col transition-transform duration-200"
      style={{ borderColor: dark ? `${accent}44` : "#E5E5E5" }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}>
      <div className="relative w-full shrink-0 flex items-center justify-center" style={{ height: 180, background: "#0D0D0D" }}>
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-cover" />
        ) : icon === "compass" ? (
          <Compass size={44} className="text-neutral-500" />
        ) : null}
      </div>
      <div className="relative p-4 flex-1 flex flex-col" style={{ background: dark ? "#1A1025" : "#fff", borderTop: `2px solid ${accent}` }}>
        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-rajdhani)", color: dark ? "#F0F0F8" : "#0D0D0D" }}>{title}</h3>
        <p className="text-xs font-medium leading-relaxed mb-4 flex-1" style={{ color: dark ? "#aab" : "#777" }}>{desc}</p>
        
        <div className="flex items-center gap-4 mt-auto pt-4 border-t" style={{ borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
          <a href={link} target="_blank" rel="noreferrer" className="hov flex items-center gap-2 text-xs font-bold tracking-wider hover:text-white transition-colors cursor-white" style={{ color: accent, fontFamily: "var(--font-barlow)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GITHUB
          </a>
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="hov flex items-center gap-1.5 text-[11px] font-bold tracking-wider transition-colors ml-auto px-3 py-1.5 rounded-full cursor-white" style={{ color: dark ? "#1A1025" : "#fff", background: accent, fontFamily: "var(--font-barlow)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              {live.includes('releases') ? 'DOWNLOAD APK' : 'LIVE DEMO'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
