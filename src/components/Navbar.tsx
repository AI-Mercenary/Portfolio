import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SpiderGlyph, GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { NAV_LINKS, SOCIALS } from "../data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setActive(href); setMobile(false);
  };

  const socialLinks = [
    { icon: <GithubIcon size={23} />,   dc: "#FFFFFF",  hc: "#0D0D0D", href: SOCIALS.github },
    { icon: <LinkedinIcon size={23} />, dc: "#FFFFFF",  hc: "#0D0D0D", href: SOCIALS.linkedin },
    { icon: <XIcon size={23} />,        dc: "#FFFFFF",  hc: "#0D0D0D", href: SOCIALS.x },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
        animate={{ height: scrolled ? 56 : 72 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "#E8192C",
          borderBottom: `2px solid ${scrolled ? "#C11524" : "transparent"}`,
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none",
          transition: "box-shadow 0.3s",
        }}>
        <button className="hov flex items-center justify-center rounded-lg transition-transform duration-150 hover:scale-110"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
          {/* spider-svgrepo-com (1).svg — solid black */}
          <svg width={34} height={34} viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFFFFF">
              <path d="M280.349,94.146c-9.864,0-17.86-7.997-17.86-17.86V47.014c0-9.864,7.997-17.86,17.86-17.86s17.86,7.997,17.86,17.86v29.272C298.21,86.151,290.213,94.146,280.349,94.146z"/>
              <path d="M307.352,208.49c-6.695,0-13.112-3.782-16.161-10.235c-4.214-8.918-0.399-19.566,8.519-23.779l83.502-39.453V17.86c0-9.864,7.997-17.86,17.86-17.86c9.864,0,17.86,7.997,17.86,17.86v128.477c0,6.908-3.984,13.198-10.23,16.149l-93.733,44.286C312.505,207.937,309.907,208.49,307.352,208.49z"/>
              <path d="M387.5,512c-9.864,0-17.86-7.997-17.86-17.86v-149.78c0-9.864,7.997-17.86,17.86-17.86s17.86,7.997,17.86,17.86v149.78C405.361,504.003,397.364,512,387.5,512z"/>
              <path d="M317.199,244.453c-3.282-9.303,1.599-19.504,10.901-22.785l138.935-49.015V17.86c0-9.864,7.997-17.86,17.86-17.86s17.86,7.997,17.86,17.86v167.43c0,7.573-4.776,14.323-11.919,16.844l-150.854,53.219C330.68,258.635,320.48,253.753,317.199,244.453z"/>
              <path d="M484.897,511.634c-9.864,0-17.86-7.997-17.86-17.86V338.982l-98.408-34.715c-9.303-3.282-14.184-13.482-10.901-22.785c3.282-9.303,13.483-14.182,22.785-10.901l110.326,38.92c7.142,2.52,11.919,9.27,11.919,16.844v167.43C502.757,503.639,494.76,511.634,484.897,511.634z"/>
              <path d="M231.65,94.146c-9.864,0-17.86-7.997-17.86-17.86V47.014c0-9.864,7.997-17.86,17.86-17.86c9.864,0,17.86,7.997,17.86,17.86v29.272C249.51,86.151,241.513,94.146,231.65,94.146z"/>
              <path d="M204.647,208.49c-2.556,0-5.153-0.552-7.617-1.716l-93.733-44.286c-6.246-2.952-10.23-9.241-10.23-16.149V17.86c0-9.864,7.997-17.86,17.86-17.86s17.86,7.997,17.86,17.86v117.162l83.502,39.453c8.918,4.214,12.733,14.86,8.519,23.779C217.759,204.708,211.341,208.49,204.647,208.49z"/>
              <path d="M124.499,512c-9.864,0-17.86-7.997-17.86-17.86v-149.78c0-9.864,7.997-17.86,17.86-17.86s17.86,7.997,17.86,17.86v149.78C142.359,504.003,134.362,512,124.499,512z"/>
              <path d="M172.015,255.353L21.16,202.134c-7.143-2.52-11.919-9.27-11.919-16.844V17.86C9.242,7.997,17.238,0,27.102,0s17.86,7.997,17.86,17.86v154.792l138.935,49.015c9.303,3.282,14.184,13.482,10.901,22.785C191.518,253.753,181.319,258.635,172.015,255.353z"/>
              <path d="M27.102,511.634c-9.864,0-17.86-7.997-17.86-17.86v-167.43c0-7.573,4.777-14.323,11.919-16.844l110.326-38.92c9.304-3.282,19.504,1.6,22.785,10.901c3.282,9.303-1.599,19.504-10.901,22.785l-98.408,34.715v154.792C44.963,503.639,36.966,511.634,27.102,511.634z"/>
              <path d="M315.663,207.447c17.593-16.153,28.643-39.325,28.643-65.035c0-48.694-39.615-88.308-88.308-88.308S167.69,93.72,167.69,142.412c0,25.71,11.051,48.882,28.643,65.035c-52.746,23.075-89.696,75.756-89.696,136.912c0,82.358,67.003,149.36,149.361,149.36s149.361-67.002,149.361-149.36C405.361,283.203,368.408,230.521,315.663,207.447z"/>
            </g>
          </svg>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <button key={l.label}
              className="hov flex items-center gap-1.5 text-[16px] uppercase tracking-widest font-bold pb-0.5 border-b-2 transition-all duration-150"
              style={{
                fontFamily: "var(--font-barlow)",
                color: "#0D0D0D",
                borderBottomColor: active === l.href ? "#0D0D0D" : "transparent",
              }}
              onClick={() => go(l.href)}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#0D0D0D"; }}>
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className="hov w-9 h-9 flex items-center justify-center transition-colors duration-150"
                style={{ color: s.dc }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = s.hc}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = s.dc}>
                {s.icon}
              </a>
            ))}
          </div>
          <button className="lg:hidden hov p-1.5" style={{ color: "#FFFFFF" }}
            onClick={() => setMobile(!mobile)}>
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobile && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-[72px]"
            style={{ background: "#E8192C" }}
            initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }} transition={{ duration: 0.3 }}>
            <div className="flex flex-col p-6 gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.button key={l.label}
                  initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hov flex items-center gap-3 py-4 border-b text-2xl font-black uppercase text-left"
                  style={{ fontFamily: "var(--font-rajdhani)", color: "#0D0D0D", borderColor: "#C11524" }}
                  onClick={() => go(l.href)}>
                  {l.label}
                </motion.button>
              ))}
            </div>
            <div className="flex gap-4 px-6 mt-4">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{ color: "#FFFFFF" }}>{s.icon}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
