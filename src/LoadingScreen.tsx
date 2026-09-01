import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress from 0 to 100
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 800);
        }, 600); // short delay after hitting 100%
      }
      setProgress(currentProgress);
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Format progress to be exactly 3 digits e.g. "014"
  const formattedProgress = progress.toString().padStart(3, "0");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ background: "#0a0d14" }} // Dark blue/black background
        >
          {/* Subtle dot grid background */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{
              backgroundImage: "radial-gradient(#2a4066 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }} 
          />

          <div className="relative flex flex-col items-center justify-center">
            
            {/* The HUD Rings Container */}
            <div className="relative flex items-center justify-center w-80 h-80 md:w-[450px] md:h-[450px]">
              
              {/* Outer Blue Tech Ring */}
              <motion.svg className="absolute w-full h-full opacity-60" viewBox="0 0 100 100"
                animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
                <circle cx="50" cy="50" r="48" fill="none" stroke="#106b99" strokeWidth="0.5" strokeDasharray="2 4" />
                <circle cx="50" cy="50" r="46" fill="none" stroke="#106b99" strokeWidth="0.2" />
                {/* Tech crosses/markers */}
                <path d="M 40 2 L 60 2 M 40 98 L 60 98 M 2 40 L 2 60 M 98 40 L 98 60" stroke="#106b99" strokeWidth="1" strokeDasharray="1 3" />
              </motion.svg>

              {/* Red Ring 1 (Outer solid dashes) */}
              <motion.svg className="absolute w-[90%] h-[90%]" viewBox="0 0 100 100"
                style={{ filter: "drop-shadow(0 0 6px rgba(232,25,44,0.6))" }}
                animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                <circle cx="50" cy="50" r="48" fill="none" stroke="#E8192C" strokeWidth="1.5" strokeDasharray="30 15 10 15 40 20" strokeLinecap="round" />
                <circle cx="50" cy="50" r="46" fill="none" stroke="#E8192C" strokeWidth="0.5" strokeDasharray="5 10" />
              </motion.svg>

              {/* Red Ring 2 (Middle thick arcs) */}
              <motion.svg className="absolute w-[80%] h-[80%]" viewBox="0 0 100 100"
                style={{ filter: "drop-shadow(0 0 8px rgba(232,25,44,0.8))" }}
                animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                <circle cx="50" cy="50" r="48" fill="none" stroke="#E8192C" strokeWidth="2.5" strokeDasharray="80 40 60 40" strokeLinecap="round" />
              </motion.svg>

              {/* Red Ring 3 (Inner thin continuous with gap) */}
              <motion.svg className="absolute w-[70%] h-[70%]" viewBox="0 0 100 100"
                style={{ filter: "drop-shadow(0 0 4px rgba(232,25,44,0.5))" }}
                animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <circle cx="50" cy="50" r="48" fill="none" stroke="#E8192C" strokeWidth="1" strokeDasharray="120 20" strokeLinecap="round" />
              </motion.svg>

              {/* Center Glow */}
              <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-[#106b99] rounded-full blur-[40px] opacity-40 mix-blend-screen" />

              {/* Center Spider-Man Head */}
              <motion.div 
                className="relative z-10 flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-[3px] border-black bg-black"
                style={{ boxShadow: "0 0 20px rgba(0,0,0,0.8), inset 0 0 15px rgba(232,25,44,0.3)" }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Fallback to glyph if ultimate-spiderman.png isn't exactly matching, but let's try ultimate-spiderman.png first */}
                <img src="/icons/34957-2-ultimate-spiderman.png" alt="Spider-Man" className="w-[120%] h-[120%] object-cover object-center" 
                  onError={(e) => { e.currentTarget.src = "/icons/spider-glyph.svg"; e.currentTarget.className = "w-[60%] h-[60%] object-contain" }} />
              </motion.div>
              
            </div>

            {/* Percentage Text */}
            <motion.div 
              className="absolute bottom-16 md:bottom-24 z-20 flex gap-2 font-mono text-xl md:text-2xl font-bold tracking-[0.3em]"
              style={{ color: "#29b6f6", textShadow: "0 0 8px rgba(41,182,246,0.6)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>{formattedProgress.split('')[0]}</span>
              <span>{formattedProgress.split('')[1]}</span>
              <span>{formattedProgress.split('')[2]}</span>
              <span>%</span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
