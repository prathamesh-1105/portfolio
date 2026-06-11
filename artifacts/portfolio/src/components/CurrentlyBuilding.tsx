import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BUILDS = [
  {
    id: "ai-clone",
    name: "AI CLONE",
    status: "IN DEVELOPMENT",
    description:
      "Personal AI assistant capable of answering questions about Prathamesh, projects, skills, experience, and goals — trained on portfolio content and capable of real conversations.",
    progress: 40,
    tags: ["LLM", "RAG", "TypeScript", "OpenAI"],
  },
  {
    id: "darshan",
    name: "DARSHAN",
    status: "IN DEVELOPMENT",
    description:
      "Temple discovery platform using geolocation, weather integration, and intelligent information systems to help devotees explore and connect with sacred sites.",
    progress: 25,
    tags: ["Geolocation", "Weather API", "React Native", "Maps"],
  },
];

export function CurrentlyBuilding() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="building" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary/70 mb-4">SECTION 05</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">
            CURRENTLY BUILDING
          </h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">ACTIVE CONSTRUCTION ZONE</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {BUILDS.map((build, i) => (
            <motion.div
              key={build.id}
              className="relative p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm overflow-hidden group"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              data-testid={`card-building-${build.id}`}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/8 to-secondary/8 pointer-events-none" />

              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="w-2 h-2 rounded-full bg-primary absolute" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-primary">{build.status}</span>
              </div>

              <h3 className="text-xl font-bold font-sans text-white mb-3">{build.name}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{build.description}</p>

              <div className="mb-4">
                <div className="flex justify-between font-mono text-[10px] text-white/30 mb-2">
                  <span>BUILD PROGRESS</span>
                  <span>{build.progress}%</span>
                </div>
                <div className="h-[2px] w-full bg-white/8 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${build.progress}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {build.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-[10px] font-mono text-primary/70 border border-primary/15 bg-primary/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
