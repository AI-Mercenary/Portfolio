import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SpiderGlyph, GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { NAV_LINKS, PROFILE, SOCIALS } from "../data";

export function Footer() {
  const socialLinks = [
    { icon: <GithubIcon size={17} />, href: SOCIALS.github },
    { icon: <LinkedinIcon size={17} />, href: SOCIALS.linkedin },
    { icon: <XIcon size={17} />, href: SOCIALS.x },
  ];

  const cols = [
    { head: "Navigate", links: NAV_LINKS.map(l => ({ label: l.label, href: l.href })) },
    {
      head: "Connect", links: [
        { label: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: <Mail size={13} /> },
        { label: PROFILE.phone, href: `tel:${PROFILE.phone}`, icon: <Phone size={13} /> },
      ]
    },
  ];

  return (
    <footer className="relative border-t overflow-hidden" style={{ background: "#fff", borderColor: "#E5E5E5" }}>
      <motion.img src="/icons/spider-silhouette.svg" alt="" aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-80 h-80 pointer-events-none select-none"
        style={{ opacity: 0.045, transformOrigin: "center" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }} />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <img src="/icons/icon.png" alt="Icon" className="w-10 h-10 object-contain" />
            </div>
            <p className="text-sm leading-relaxed font-medium" style={{ color: "#0D0D0D", fontFamily: "var(--font-inter)", maxWidth: 220 }}>
              AI Engineer &amp; Full-Stack Developer. Building intelligent systems with precision and craft.
            </p>
            <div className="flex gap-3 mt-1">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="hov transition-colors duration-150"
                  style={{ color: "#0D0D0D" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#E8192C"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#0D0D0D"}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              <h4 className="text-sm font-black uppercase tracking-widest"
                style={{ fontFamily: "var(--font-barlow)", color: "#0D0D0D", letterSpacing: "3px" }}>
                {col.head}
              </h4>
              <div className="flex flex-col gap-2">
                {col.links.map((l: any, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {l.icon && <span style={{ color: "#E8192C" }}>{l.icon}</span>}
                    {l.href?.startsWith("#") ? (
                      <button className="text-base font-medium hov cursor-pointer transition-colors duration-150 text-left"
                        style={{ color: "#0D0D0D", fontFamily: "var(--font-inter)" }}
                        onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#E8192C"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#0D0D0D"}>
                        {l.label}
                      </button>
                    ) : l.href ? (
                      <a className="text-base font-medium hov cursor-pointer transition-colors duration-150"
                        href={l.href}
                        style={{ color: "#0D0D0D", fontFamily: "var(--font-inter)" }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#E8192C"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#0D0D0D"}>
                        {l.label}
                      </a>
                    ) : (
                      <span className="text-base font-medium" style={{ color: "#0D0D0D", fontFamily: "var(--font-inter)" }}>{l.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t flex items-center justify-center" style={{ borderColor: "#F0F0F0" }}>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0D0D0D", fontFamily: "var(--font-mono)" }}>
            © 2026 · {PROFILE.name} {PROFILE.surname}
          </span>
        </div>
      </div>
    </footer>
  );
}
