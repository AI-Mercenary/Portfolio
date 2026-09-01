import { FadeIn, SectionLabel, ProjectCard } from "./ui";
import { PROJECTS, SOCIALS } from "../data";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden" style={{ background: "#1A1025" }}>
      {/* Swinging upside-down lil.svg */}
      <motion.div
        className="absolute -top-4 right-0 md:right-8 lg:right-12 z-0"
        style={{ transformOrigin: "top center" }}
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
        <img src="/icons/lil.svg" alt="Spider-Man" className="w-28 md:w-44 opacity-95" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <SectionLabel title="PROJECTS" subtitle="Featured engineering work and applications" align="center" light accent="#FFD700" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14 mb-10">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <ProjectCard title={p.title} desc={p.desc} img={p.img} link={p.link} live={(p as any).live} icon={p.icon} accent="#FFD700" dark />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="flex justify-center">
          <a href={SOCIALS.github} target="_blank" rel="noreferrer"
            className="hov px-6 py-2.5 rounded-full border-2 font-semibold text-sm transition-colors duration-300 hover:bg-[#86efac22] hover:text-[#86efac] hover:border-[#86efac]"
            style={{ borderColor: "#FFD70066", color: "#FFD700", fontFamily: "var(--font-barlow)" }}>
            SEE MORE ON GITHUB
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
