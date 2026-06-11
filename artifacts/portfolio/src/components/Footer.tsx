import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} className="relative py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-black" />
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [Math.random() * 0.3 + 0.1, 0.6, Math.random() * 0.3 + 0.1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-8 flex justify-center"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="flex gap-2 items-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-primary"
                  animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>

          <p className="font-mono text-xs tracking-[0.4em] text-white/25 mb-8">
            THE JOURNEY HAS ONLY BEGUN
          </p>

          <h2 className="text-4xl sm:text-6xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 mb-3 tracking-tight">
            PRATHAMESH KAMBLI
          </h2>
          <p className="text-secondary/70 font-mono text-sm tracking-widest mb-2">
            AI Engineer & Product Builder
          </p>
          <p className="text-white/30 text-sm mb-16">
            Turning ideas into intelligent digital experiences.
          </p>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          <p className="font-mono text-[10px] tracking-widest text-white/20">
            &copy; {new Date().getFullYear()} PRATHAMESH KAMBLI — ALL SYSTEMS OPERATIONAL
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
