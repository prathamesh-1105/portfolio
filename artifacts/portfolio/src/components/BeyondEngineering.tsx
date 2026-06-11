import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const INTERESTS = [
  {
    id: "art",
    icon: "◎",
    title: "Art & Painting",
    desc: "Expressing ideas through visual art — from abstract canvases to detailed sketches. Art fuels the eye for design that shapes every interface.",
  },
  {
    id: "music",
    icon: "♬",
    title: "Music & Singing",
    desc: "Music teaches rhythm, timing, and flow — the same qualities that make great user experiences. A true engineer listens.",
  },
  {
    id: "teaching",
    icon: "◈",
    title: "Teaching",
    desc: "Knowledge that isn't shared is knowledge wasted. Mentoring students and peers keeps ideas alive and growing beyond one person.",
  },
  {
    id: "tech",
    icon: "✦",
    title: "Technology & Innovation",
    desc: "Staying obsessed with what's next — reading, experimenting, and building prototypes that push boundaries before they become mainstream.",
  },
  {
    id: "social",
    icon: "◇",
    title: "Social Work",
    desc: "Technology should uplift communities. Participating in social initiatives grounds the work in real-world human impact.",
  },
];

export function BeyondEngineering() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beyond" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary/70 mb-4">SECTION 07</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">
            BEYOND ENGINEERING
          </h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">THE HUMAN SIDE</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative p-7 rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm group hover:border-primary/30 hover:bg-primary/4 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              data-testid={`card-beyond-${item.id}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
              </div>

              <span className="block text-primary text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <h3 className="text-white font-semibold text-base mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
