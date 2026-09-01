"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/LoadingScreen";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Resume } from "@/components/Resume";
import { Footer } from "@/components/Footer";
import { SectionReveal } from "@/components/ui";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loaded]);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease-in", pointerEvents: loaded ? "auto" : "none" }}>
        <Cursor />
        <Navbar />
        {/* Hero has its own entrance — no SectionReveal needed */}
        <Hero />
        <SectionReveal>
          <Experience />
        </SectionReveal>
        <SectionReveal>
          <Skills />
        </SectionReveal>
        <SectionReveal>
          <Projects />
        </SectionReveal>
        <SectionReveal>
          <Achievements />
        </SectionReveal>
        <SectionReveal>
          <Education />
        </SectionReveal>
        <SectionReveal>
          <Resume />
        </SectionReveal>
        <Footer />
      </div>
    </>
  );
}
