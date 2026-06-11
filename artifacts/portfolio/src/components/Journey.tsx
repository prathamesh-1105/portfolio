import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MILESTONES = [
  { year: "2020", label: "Completed SSC", icon: "✦", future: false },
  { year: "2022", label: "Completed HSC", icon: "✦", future: false },
  { year: "2023", label: "Started B.E. Computer Engineering\n(AI & Data Science)", icon: "✦", future: false },
  { year: "2024", label: "Explored Web Development and UI/UX", icon: "✦", future: false },
  { year: "2025", label: "Building AI and Product Development Skills", icon: "✦", future: false },
  { year: "2027", label: "Future AI Engineer & Product Creator", icon: "◈", future: true },
];

function Milestone({ m, index }: { m: typeof MILESTONES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"} md:gap-16`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <div className={`inline-block ${m.future ? "text-secondary" : "text-primary"} font-mono text-2xl md:text-4xl font-bold mb-2`}>
          {m.year}
        </div>
        <p className={`text-white/70 text-sm md:text-base leading-relaxed whitespace-pre-line`}>
          {m.label}
        </p>
      </div>

      <div className="relative flex-shrink-0">
        <div className={`w-4 h-4 rounded-full border-2 ${m.future ? "border-secondary bg-secondary/20" : "border-primary bg-primary/20"} relative z-10`}>
          {m.future && (
            <span className={`absolute -inset-2 rounded-full bg-secondary/20 animate-ping`} />
          )}
        </div>
      </div>

      <div className="flex-1" />
    </motion.div>
  );
}

export function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary/70 mb-4">SECTION 01</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">
            MY JOURNEY
          </h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">CHARTING THE MISSION TIMELINE</p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-[1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="flex flex-col gap-14">
            {MILESTONES.map((m, i) => (
              <Milestone key={m.year} m={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
