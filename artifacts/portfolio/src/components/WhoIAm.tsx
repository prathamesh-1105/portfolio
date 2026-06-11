import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import prathameshPhoto from "@assets/DSC_0488_1781183171217.jpg";

const ROLES = [
  "AI & Data Science Student",
  "Product Builder",
  "Web Developer",
  "Designer",
  "Innovator",
  "Problem Solver",
  "Lifelong Learner",
];

const CARDS = [
  { title: "BUILDER", desc: "Turning complex ideas into real, working digital products from concept to deployment.", glow: "from-primary/20" },
  { title: "INNOVATOR", desc: "Constantly exploring the frontier of AI, design, and engineering to craft what hasn't existed yet.", glow: "from-secondary/20" },
  { title: "CREATOR", desc: "Whether it's code, art, or music — creation is a way of life, not a job description.", glow: "from-primary/10" },
];

export function WhoIAm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/3 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-secondary/70 mb-4">SECTION 02</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">
            WHO I AM
          </h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">THE STORY BEHIND THE ENGINEER</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <motion.p
              className="text-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I am <span className="text-primary font-semibold">Prathamesh Kambli</span> — a B.E. Computer Engineering student specializing in AI & Data Science, with a passion for building technology that creates real impact.
            </motion.p>
            <motion.p
              className="text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              I don't just write code — I architect experiences. Every project I undertake is a mission: understand the problem deeply, design boldly, engineer precisely, and ship something that matters.
            </motion.p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="font-mono text-xs tracking-[0.2em] text-white/30 mb-4">KNOWN AS</p>
              <div className="flex flex-wrap gap-2">
                {ROLES.map((role, i) => (
                  <motion.span
                    key={role}
                    className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-white/70 text-sm font-mono backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96">
              <img
                src={prathameshPhoto}
                alt="Prathamesh Kambli"
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  filter: "saturate(0.7) contrast(1.1) brightness(0.9)",
                  boxShadow: "0 0 60px rgba(17,51,71,0.3), 0 0 120px rgba(168,85,247,0.15)",
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-secondary/30 via-transparent to-primary/20 mix-blend-screen pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-full blur-sm animate-[spin_20s_linear_infinite]" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className={`relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${card.glow} to-transparent backdrop-blur-sm overflow-hidden group hover:border-primary/30 transition-colors`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
              data-testid={`card-about-${card.title.toLowerCase()}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl pointer-events-none" />
              <h3 className="font-mono text-xs tracking-[0.2em] text-primary mb-3">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
