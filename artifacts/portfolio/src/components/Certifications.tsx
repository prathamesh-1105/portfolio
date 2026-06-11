import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CERTS = [
  { id: "genai", name: "GenAI Powered Data Analytics", issuer: "Coursera", year: "2024" },
  { id: "ux", name: "Introduction to UX Design", issuer: "Google", year: "2024" },
  { id: "python", name: "Python Programming", issuer: "Coursera", year: "2023" },
  { id: "java", name: "Java Programming", issuer: "Udemy", year: "2023" },
  { id: "powerbi", name: "Power BI", issuer: "Microsoft", year: "2024" },
  { id: "webdev", name: "HTML / CSS / JavaScript", issuer: "freeCodeCamp", year: "2023" },
  { id: "git", name: "Git & GitHub", issuer: "GitHub", year: "2023" },
];

export function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certs" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/4 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-secondary/70 mb-4">SECTION 08</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">
            CERTIFICATIONS
          </h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">ACHIEVEMENT MODULES UNLOCKED</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="relative p-5 rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm group hover:border-secondary/40 hover:bg-secondary/4 transition-all duration-400 overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              data-testid={`card-cert-${cert.id}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-xs">◈</span>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-widest text-white/30">{cert.issuer} · {cert.year}</p>
                </div>
              </div>

              <h3 className="text-white/80 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                {cert.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
