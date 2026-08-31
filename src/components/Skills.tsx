import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiC,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiFastapi, SiHtml5, SiCss,
  SiLangchain, SiTensorflow, SiOpencv, SiGooglegemini, SiClaude, SiPytorch, SiPandas, SiNumpy,
  SiGooglecloud, SiDocker, SiFirebase, SiMongodb, SiMysql, SiSupabase, SiVercel,
  SiGit, SiGithub, SiPostman, SiStreamlit, SiAtlassian,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  TbApi, TbDatabase, TbDatabaseSearch, TbBrain, TbFileSearch, TbLanguage, TbEye, TbPrompt,
  TbSettingsAutomation, TbRobot, TbInfinity, TbSparkles, TbCloud,
  TbBrandVscode, TbMessageChatbot, TbRocket, TbTerminal2,
} from "react-icons/tb";
import { motion } from "framer-motion";
import { FadeIn, SectionLabel } from "./ui";

type Skill = { label: string; Icon: React.ComponentType<{ className?: string }> };

// Best 5 Spider-Man themes for dark bg contrast
// Miles Morales      → #E8192C  red
// Spider-Man 2099    → #00BFFF  electric blue
// Gwen Stacy         → #FF6B9D  hot pink
// Spider-Punk        → #FFD700  yellow
// Scarlet Spider     → #DC143C  deep crimson + #3B82F6 blue

const CATEGORIES: { label: string; accent: string; skills: Skill[] }[] = [
  {
    label: "Languages",
    accent: "#E8192C",
    skills: [
      { label: "Python",     Icon: SiPython },
      { label: "JavaScript", Icon: SiJavascript },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Java",       Icon: FaJava },
      { label: "C",          Icon: SiC },
      { label: "C++",        Icon: SiCplusplus },
      { label: "SQL",        Icon: TbDatabase },
    ],
  },
  {
    label: "Web & Backend",
    accent: "#00BFFF",
    skills: [
      { label: "React.js",    Icon: SiReact },
      { label: "Next.js",     Icon: SiNextdotjs },
      { label: "Node.js",     Icon: SiNodedotjs },
      { label: "Express.js",  Icon: SiExpress },
      { label: "FastAPI",     Icon: SiFastapi },
      { label: "REST APIs",   Icon: TbApi },
      { label: "HTML5",       Icon: SiHtml5 },
      { label: "CSS3",        Icon: SiCss },
    ],
  },
  {
    label: "AI & ML",
    accent: "#FF6B9D",
    skills: [
      { label: "LLMs",               Icon: TbBrain },
      { label: "RAG",                Icon: TbFileSearch },
      { label: "Agentic AI",         Icon: TbRobot },
      { label: "Vector DB",          Icon: TbDatabaseSearch },
      { label: "LangChain",          Icon: SiLangchain },
      { label: "LangGraph",          Icon: TbMessageChatbot },
      { label: "TensorFlow",         Icon: SiTensorflow },
      { label: "OpenCV",             Icon: SiOpencv },
      { label: "PyTorch",            Icon: SiPytorch },
      { label: "Pandas",             Icon: SiPandas },
      { label: "NumPy",              Icon: SiNumpy },
      { label: "NLP",                Icon: TbLanguage },
      { label: "Computer Vision",    Icon: TbEye },
      { label: "Prompt Engineering", Icon: TbPrompt },
      { label: "Machine Learning",   Icon: TbSettingsAutomation },
      { label: "OpenAI",             Icon: TbSparkles },
      { label: "Gemini",             Icon: SiGooglegemini },
      { label: "Claude",             Icon: SiClaude },
    ],
  },
  {
    label: "Cloud & DevOps",
    accent: "#FFD700",
    skills: [
      { label: "AWS",      Icon: TbCloud },
      { label: "GCP",      Icon: SiGooglecloud },
      { label: "Docker",   Icon: SiDocker },
      { label: "CI/CD",    Icon: TbInfinity },
      { label: "Firebase", Icon: SiFirebase },
      { label: "MongoDB",  Icon: SiMongodb },
      { label: "MySQL",    Icon: SiMysql },
      { label: "Supabase", Icon: SiSupabase },
      { label: "Vercel",   Icon: SiVercel },
    ],
  },
  {
    label: "Tools",
    accent: "#DC143C",
    skills: [
      { label: "Git",         Icon: SiGit },
      { label: "GitHub",      Icon: SiGithub },
      { label: "Postman",     Icon: SiPostman },
      { label: "Streamlit",   Icon: SiStreamlit },
      { label: "VS Code",     Icon: TbBrandVscode },
      { label: "Atlassian",   Icon: SiAtlassian },
      { label: "Antigravity", Icon: TbRocket },
      { label: "Claude Code", Icon: TbTerminal2 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden"
      style={{ background: "#FFFFFF" }}>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-14">
          <div className="hidden md:flex w-full md:w-1/2 justify-start flex-shrink-0">
            <img src="/icons/sp3.svg" alt="" className="w-48 lg:w-[250px] object-contain drop-shadow-xl" 
              style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))", marginLeft: "-10px", marginTop: "-10px" }} />
          </div>
          <div className="w-full md:w-1/2 md:pr-12 lg:pr-24">
            <SectionLabel 
              title="SKILLS" 
              subtitle="Technical stack and core competencies" 
              align="right" 
              icon={<img src="/icons/spider-multi.svg" alt="" className="w-10 md:w-12" />} 
            />
          </div>
        </div>

        <div className="flex flex-col gap-14">
          {CATEGORIES.map((cat, catIdx) => (
            <FadeIn key={cat.label} delay={catIdx * 0.07}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 rounded-full" style={{ background: cat.accent }} />
                <div>
                  <p className="text-lg font-black uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-barlow)", lineHeight: 1.2, color: "#0D0D0D" }}>
                    {cat.label}
                  </p>
                </div>
                <div className="flex-1 h-px ml-2" style={{ background: cat.accent + "30" }} />
              </div>

              {/* Skill pills — icon left, label right, thin colored border */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(({ label, Icon }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.06, borderColor: cat.accent }}
                    className="flex items-center gap-2 cursor-default"
                    style={{
                      border: `1px solid ${cat.accent}`,
                      borderRadius: 4,
                      padding: "7px 14px",
                      background: "transparent",
                    }}>
                    <Icon className="text-[18px] shrink-0" style={{ color: cat.accent } as React.CSSProperties} />
                    <span className="text-[13px] font-semibold whitespace-nowrap"
                      style={{ color: "#0D0D0D", fontFamily: "var(--font-barlow)", letterSpacing: "0.03em" }}>
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
