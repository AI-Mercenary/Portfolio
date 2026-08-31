import { SectionLabel, TimelineNode } from "./ui";
import { EDUCATION } from "../data";

export function Education() {
  return (
    <section id="education" className="py-28" style={{ background: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative">
        <img src="/icons/icon.svg" alt="Education decoration" className="absolute top-0 -right-2 w-16 h-16 md:right-10 md:w-24 md:h-24 pointer-events-none object-contain" />
        <SectionLabel title="EDUCATION" subtitle="Academic background and foundations" accent="#FF6B9D" />
        <div className="mt-14 relative z-10">
          {EDUCATION.map((e, i) => (
            <TimelineNode key={e.title} title={e.title} org={e.org} date={e.date} desc={e.desc}
              chips={e.chips} logo={e.logo} defaultOpen={i === 0} accent="#FF6B9D" />
          ))}
        </div>
      </div>
    </section>
  );
}
