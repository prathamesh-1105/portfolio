import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MILESTONES = [
  {
    year: "2026",
    title: "Become AI Engineer",
    desc: "Graduate with honors in AI & Data Science. Land a role building intelligent systems that matter.",
  },
  {
    year: "2027",
    title: "Build Innovative Products",
    desc: "Ship multiple products that solve real problems — from AI tools to consumer apps with thousands of users.",
  },
  {
    year: "2028",
    title: "Launch Startup",
    desc: "Found a technology company at the intersection of AI, design, and human experience.",
  },
  {
    year: "2030",
    title: "Create Technology That Impacts Lives",
    desc: "Build systems that reach millions — healthcare, education, cultural preservation. Technology with soul.",
  },
];

export function Mission2030() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary/70 mb-4">SECTION 10</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">MISSION 2030</h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">THE INTERSTELLAR ROADMAP</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                className="relative flex gap-8 sm:gap-12 items-start group"
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.18 }}
                data-testid={`card-mission-${m.year}`}
              >
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full border-2 border-primary bg-primary/20 relative z-10 group-hover:bg-primary transition-colors duration-300">
                    <span className="absolute -inset-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                  </div>
                </div>

                <div className="flex-1 p-6 rounded-2xl border border-white/8 bg-white/2 backdrop-blur-sm group-hover:border-primary/25 transition-colors duration-400">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-primary text-xl font-bold">{m.year}</span>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{m.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
