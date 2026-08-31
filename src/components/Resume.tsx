import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { FadeIn, SectionLabel, RedBtn } from "./ui";
import { SpiderGlyph } from "./icons";
import { PROFILE } from "../data";

export function Resume() {
  return (
    <section id="resume" className="py-28 relative overflow-hidden" style={{ background: "#1E293B" }}>
      <div className="max-w-2xl mx-auto px-6 md:px-10 text-center relative z-10 flex flex-col items-center">
        
        {/* Custom Header so the red line is at the very bottom for Spider-Man to grip */}
        <FadeIn className="flex flex-col items-center text-center -mt-8">
          <h2 className="text-5xl md:text-6xl font-black leading-none"
            style={{ fontFamily: "var(--font-rajdhani)", color: "#fff", letterSpacing: "1px" }}>
            RESUME
          </h2>
          <p className="mt-2 text-base leading-relaxed max-w-lg"
            style={{ color: "#aab", fontFamily: "var(--font-inter)" }}>
            Full professional profile and history
          </p>
          <div className="h-1 w-14 mt-6 mb-0" style={{ background: "#E8192C", zIndex: 30, position: "relative" }} />
        </FadeIn>
        
        <FadeIn delay={0.15} className="relative flex flex-col items-center w-full">
          
          {/* Detailed SVG: Split into Static Top and Swinging Bottom */}
          {/* Scaled down to ~80%: w=130px, h=314px. Split at h=128px. */}
          <div className="relative w-[130px] h-[314px] flex-shrink-0 mb-[200px]" style={{ marginTop: "-6px", zIndex: 10 }}>
            
            {/* STATIC SPIDER-MAN (Top ~40% of the image) */}
            <div className="absolute top-0 left-0 w-full h-[128px] overflow-hidden z-20">
              <img 
                src="/icons/spiderman_lower_web_animated.svg" 
                alt="Spider-Man" 
                className="absolute top-0 left-0 w-[130px] h-[314px] max-w-none object-cover"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }}
              />
            </div>
            
            {/* SWINGING WEB (Bottom ~60% of the image) */}
            <motion.div 
              className="absolute top-[128px] left-0 w-full overflow-visible z-10 flex flex-col items-center"
              style={{ transformOrigin: "top center" }}
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-full h-[186px] flex-shrink-0 overflow-hidden">
                <img 
                  src="/icons/spiderman_lower_web_animated.svg" 
                  alt="Swinging Web" 
                  className="absolute left-0 w-[130px] h-[314px] max-w-none object-cover"
                  style={{ top: "-128px", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }}
                />
              </div>

              {/* The Resume Card attached to the end of the swinging web */}
              <div className="relative border-2 p-5 flex flex-col items-center gap-3 w-[320px] md:w-[380px] rounded-3xl"
                style={{ 
                  marginTop: "-12px", // pull up slightly to overlap the web tip
                  borderColor: "#3B82F6", 
                  background: "#1E293B",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                }}>
                <h3 className="text-2xl font-black tracking-widest" style={{ fontFamily: "var(--font-rajdhani)", color: "#F0F0F8" }}>
                  MY_PROFILE
                </h3>
                <p className="text-[8px] tracking-[3px] uppercase text-center" style={{ color: "#999", fontFamily: "var(--font-mono)" }}>
                  Resume · Sampath Varma Datla
                </p>
                <div className="w-full h-px" style={{ background: "#E8192C22" }} />
                <div className="flex flex-row flex-wrap justify-center gap-3 w-full items-center">
                  <RedBtn href={PROFILE.resume} download accent="#E8192C"><Download size={15} /> PDF</RedBtn>
                  <RedBtn outline href={PROFILE.resume} accent="#3B82F6"><ExternalLink size={15} /> VIEW</RedBtn>
                </div>
              </div>
            </motion.div>
            
          </div>
          
        </FadeIn>
      </div>
    </section>
  );
}
