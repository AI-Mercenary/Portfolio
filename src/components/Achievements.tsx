import { GiTrophyCup, GiCricketBat, GiTennisRacket, GiMountainClimbing } from "react-icons/gi";
import { FaSwimmer, FaCode, FaHandHoldingHeart, FaBiking, FaRunning, FaBookReader, FaMicroscope } from "react-icons/fa";
import { MdSportsEsports } from "react-icons/md";
import { FadeIn, SectionLabel, AchCard, Chip } from "./ui";
import { ACHIEVEMENTS, CO_CURRICULARS, INTERESTS } from "../data";

const ICONS = [<GiTrophyCup size={24} key={0} />, <GiTrophyCup size={24} key={1} />, <GiTrophyCup size={24} key={2} />];

const INTEREST_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  GiCricketBat, GiTennisRacket, GiMountainClimbing,
  FaSwimmer, FaCode, FaHandHoldingHeart, FaBiking, FaRunning, FaBookReader, FaMicroscope,
  MdSportsEsports
};

export function Achievements() {
  return (
    <section id="achievements" className="py-28" style={{ background: "#0D0D0D" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-start justify-between gap-4 relative">
          <SectionLabel title="ACHIEVEMENTS" subtitle="Awards and milestones" light accent="#E8192C" />
          {/* Positioned exactly at the right side (where the cursor was) and increased in size */}
          <img src="/icons/spidey.png" alt="Spider-Man" className="hidden md:block w-80 md:w-96 lg:w-[480px] object-contain flex-shrink-0"
            style={{ marginTop: "-80px", marginRight: "2%", opacity: 0.95 }} />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.07} className="h-full"><AchCard icon={ICONS[i % ICONS.length]} {...a} accent="#E8192C" /></FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3} className="mt-10">
          <p className="text-[10px] uppercase tracking-[3px] mb-3" style={{ color: "#999", fontFamily: "var(--font-mono)" }}>
            Leadership &amp; Co-Curriculars
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {CO_CURRICULARS.map(c => (
              <span key={c} className="hov text-xs md:text-sm px-4 py-2 border uppercase tracking-wider font-bold transition-all duration-150"
                style={{ borderColor: "#E8192C55", color: "#E8192C", background: "#E8192C11", fontFamily: "var(--font-barlow)", letterSpacing: "1px" }}>
                {c}
              </span>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[3px] mb-3" style={{ color: "#999", fontFamily: "var(--font-mono)" }}>
            Interests
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {INTERESTS.map((i, index) => {
              const Icon = INTEREST_ICONS[i.icon];
              // Alternating subtle HUD colors for the icons to make them pop while keeping text white
              const iconColor = index % 2 === 0 ? "#0ABFFF" : "#FFD700";
              return <Chip key={i.label} label={i.label} icon={Icon ? <Icon size={16} color={iconColor} /> : undefined} dark />;
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
