import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hov, setHov] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [onRedBg, setOnRedBg] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as Element;
      setHov(!!target.closest("a,button,[role=button],.hov"));
      setOnRedBg(!!target.closest(".cursor-white"));
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  if (isMobile) return null;

  const onNav = pos.y < 72;
  const color = (onNav || onRedBg) ? "#FFFFFF" : "#E8192C";

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x - (hov ? 22 : 14), y: pos.y - (hov ? 22 : 14),
          width: hov ? 44 : 28, height: hov ? 44 : 28,
          scale: clicked ? 0.75 : 1,
          backgroundColor: color,
        }}
        style={{
          maskImage: "url('/icons/web-pattern.svg')",
          WebkitMaskImage: "url('/icons/web-pattern.svg')",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
        transition={{ type: "spring", stiffness: 600, damping: 40, mass: 0.25 }} />
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none"
        style={{ width: 6, height: 6 }}
        animate={{ x: pos.x - 3, y: pos.y - 3, background: color }}
        transition={{ type: "spring", stiffness: 900, damping: 30 }} />
    </>
  );
}
