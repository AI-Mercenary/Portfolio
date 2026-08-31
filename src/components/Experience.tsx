import { motion } from "framer-motion";
import { SectionLabel, ExperienceCard } from "./ui";
import { EXPERIENCE } from "../data";

export function Experience() {
  return (
    <section id="experience" className="py-28" style={{ background: "#0A0F24" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionLabel title="EXPERIENCE" subtitle="Professional trajectory and roles" light align="center" accent="#00FFFF" />

        <div className="relative w-full mt-14">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, #00FFFF99, rgba(255,255,255,0.12), transparent)" }} />

          <div className="flex flex-col items-center gap-y-6 lg:grid lg:items-stretch lg:grid-cols-2 lg:gap-x-0 lg:gap-y-8">
            {EXPERIENCE.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div key={exp.company + exp.duration}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ gridRow: index + 1, gridColumn: isLeft ? 1 : 2 }}
                  className={`relative w-full max-w-[600px] lg:max-w-full lg:w-full ${isLeft ? "lg:justify-self-end lg:pr-10" : "lg:justify-self-start lg:pl-10"}`}>
                  <span className={`hidden lg:block absolute top-[22px] h-[2px] w-10 ${isLeft ? "right-0" : "left-0"}`}
                    style={{ background: "#00FFFF99" }} />
                  <span className={`hidden lg:block absolute top-[16px] w-3 h-3 rounded-full ring-4 border-2 ${isLeft ? "lg:left-auto lg:right-[-6px]" : "lg:left-[-6px]"}`}
                    style={{ background: "#00FFFF", borderColor: "#0A0F24", boxShadow: "0 0 0 4px #00FFFF22" }} />
                  
                  {/* Floating Spider Image on the empty side */}
                  {index < 4 && (
                    <img 
                      src={`/icons/spider_hero_${index + 1}.svg`} 
                      alt="Spider-Man Pose" 
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-56 h-56 object-contain z-0 opacity-80 ${isLeft ? "right-[-320px] scale-x-[-1]" : "left-[-320px]"}`}
                      style={{ pointerEvents: "none", filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.2))" }}
                    />
                  )}
                  
                  <div className="relative z-10">
                    <ExperienceCard company={exp.company} role={exp.role} duration={exp.duration} logoSrc={exp.logoSrc} points={exp.points} light accent="#00FFFF" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
