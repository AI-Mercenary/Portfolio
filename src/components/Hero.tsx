import { motion, type Variants } from "framer-motion";
import { BrandIcon } from "./icons";
import { PROFILE } from "../data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden" style={{ background: "#FFFFFF", paddingTop: 72 }}>
      <img src="/icons/web-pattern.svg" alt="" aria-hidden="true"
        className="absolute -top-24 -left-24 w-[520px] h-[520px] pointer-events-none select-none"
        style={{ opacity: 0.035, zIndex: 0 }} />
      <div className="relative z-10 flex flex-col justify-center px-5 md:px-16 lg:px-24 py-20 w-full lg:w-[52%]">
        <motion.div className="flex flex-col gap-6" variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <h1 className="font-black leading-none"
              style={{ fontFamily: "var(--font-rajdhani)", fontSize: "clamp(52px, 7vw, 88px)", color: "#0D0D0D" }}>
              {PROFILE.name}<br /><span style={{ color: "#E8192C" }}>{PROFILE.surname}</span>
            </h1>
          </motion.div>

          <motion.p variants={item} className="text-xl font-bold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-barlow)", color: "#555555" }}>
            {PROFILE.role}
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-6 max-w-lg mt-2">
            <p className="text-sm md:text-base leading-relaxed"
              style={{ color: "#555", fontFamily: "var(--font-inter)" }}>
              {PROFILE.bio}
            </p>
            
            <div className="relative p-5 mt-4 rounded-xl border-2" 
              style={{ 
                borderColor: "rgba(232, 25, 44, 0.3)",
                background: "rgba(232, 25, 44, 0.03)" 
              }}>
              <div className="absolute -top-5 -left-2 bg-white px-2 text-5xl leading-none font-serif" style={{ color: "#E8192C" }}>“</div>
              <p className="text-sm md:text-base font-bold italic relative z-10 px-2 pt-1"
                style={{ color: "#b01020", fontFamily: "var(--font-inter)" }}>
                {PROFILE.quote}
              </p>
              <div className="absolute -bottom-8 -right-2 bg-white px-2 text-5xl leading-none font-serif" style={{ color: "#E8192C" }}>”</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Right dark panel — clean diagonal cut ── */}
      <div className="hidden lg:flex absolute top-0 right-0 bottom-0 w-[52%] items-center justify-end pr-10 cursor-white"
        style={{
          background: "linear-gradient(160deg, #E8192C 0%, #b01020 55%, #8B0000 100%)",
          clipPath: "polygon(7% 0, 100% 0, 100% 100%, 0% 100%)",
        }}>
        
        {/* The spider-man mask image overlapping the red background */}
        <img src="/icons/bg1.png" alt="Spider-Man Mask" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none mix-blend-multiply"
          style={{ opacity: 0.35, filter: "grayscale(100%) contrast(150%)" }} />

        <div className="absolute bottom-0 right-0 w-32 h-24 z-10" style={{ background: "#0D0D0D" }} />
        <div className="absolute bottom-0 right-32 w-0 h-0 z-10"
          style={{ borderBottom: "96px solid #0D0D0D", borderLeft: "64px solid transparent" }} />
      </div>
    </section>
  );
}
