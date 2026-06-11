import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="w-full max-w-md px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm tracking-[0.3em] text-primary"
          >
            INITIALIZING PRATHAMESH UNIVERSE
          </motion.div>

          <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>

          <div className="flex justify-between font-mono text-xs text-white/50">
            <span>SYS.BOOT</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
          
          <div className="text-left font-mono text-[10px] text-primary/40 h-24 overflow-hidden flex flex-col justify-end">
             <motion.div animate={{ y: [0, -10] }} transition={{ repeat: Infinity, duration: 1 }}>
               <div>&gt; Loading neural pathways...</div>
               {progress > 20 && <div>&gt; Synthesizing starfields...</div>}
               {progress > 50 && <div>&gt; Establishing orbital trajectories...</div>}
               {progress > 80 && <div>&gt; Calibrating creative engines...</div>}
               {progress === 100 && <div className="text-secondary">&gt; UNIVERSE READY</div>}
             </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
