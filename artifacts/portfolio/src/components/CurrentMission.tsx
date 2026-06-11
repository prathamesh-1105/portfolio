import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MISSIONS = [
  { code: "M-01", label: "Building Celestial Explorer", status: "ACTIVE", priority: "HIGH" },
  { code: "M-02", label: "Learning AI Engineering", status: "ACTIVE", priority: "HIGH" },
  { code: "M-03", label: "Exploring Product Development", status: "ACTIVE", priority: "MED" },
  { code: "M-04", label: "Teaching Students", status: "ACTIVE", priority: "MED" },
  { code: "M-05", label: "Participating in Technical Events", status: "ACTIVE", priority: "MED" },
  { code: "M-06", label: "Expanding Technical Skills", status: "ACTIVE", priority: "HIGH" },
];

export function CurrentMission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/4 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-secondary/70 mb-4">SECTION 06</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">CURRENT MISSION</h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">LIVE MISSION CONTROL</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/2 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/8 bg-primary/5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 text-center font-mono text-[10px] tracking-[0.3em] text-white/30">
                MISSION CONTROL — LIVE STATUS
              </div>
              <span className="flex items-center gap-2 font-mono text-[10px] text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                OPERATIONAL
              </span>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="grid grid-cols-4 gap-4 text-[10px] tracking-[0.15em] text-white/25 mb-4 border-b border-white/5 pb-3">
                <span>CODE</span>
                <span className="col-span-2">MISSION</span>
                <span className="text-right">PRIORITY</span>
              </div>

              {MISSIONS.map((m, i) => (
                <motion.div
                  key={m.code}
                  className="grid grid-cols-4 gap-4 py-3 border-b border-white/5 last:border-0 group hover:bg-primary/3 rounded-lg px-1 transition-colors items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  data-testid={`row-mission-${m.code}`}
                >
                  <span className="text-primary/50 text-[10px]">{m.code}</span>
                  <span className="col-span-2 text-white/70 text-xs group-hover:text-white/90 transition-colors">{m.label}</span>
                  <span className={`text-right text-[9px] tracking-widest ${m.priority === "HIGH" ? "text-primary" : "text-white/35"}`}>
                    {m.priority}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
