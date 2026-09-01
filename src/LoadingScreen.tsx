import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loading screen after a short delay
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade out animation before removing from DOM
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "#0D0D0D" }}
        >
          <div className="relative flex flex-col items-center">
            <motion.img
              src="/icons/spider-glyph.svg"
              alt="Loading..."
              className="w-16 h-16 md:w-24 md:h-24 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ filter: "drop-shadow(0 0 10px rgba(232,25,44,0.6))" }}
            />
            
            <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#E8192C]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            
            <motion.p 
              className="mt-4 text-xs font-bold tracking-widest uppercase text-white opacity-60"
              style={{ fontFamily: "var(--font-barlow)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Initializing...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
