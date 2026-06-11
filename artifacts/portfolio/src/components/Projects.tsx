import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const PROJECTS = [
  {
    id: "celestial",
    tag: "FLAGSHIP PROJECT",
    name: "CELESTIAL EXPLORER",
    subtitle: "An immersive space exploration experience",
    overview: "A web-based interactive 3D space exploration platform that lets users traverse the solar system, discover celestial bodies, and learn through beautiful data visualization.",
    problem: "Space education is dry, text-heavy, and disconnected from the actual wonder of the cosmos. People understand facts but don't feel the scale or beauty.",
    solution: "An immersive 3D experience powered by WebGL that puts users inside the solar system — orbiting planets, exploring data through interaction, not lecture.",
    features: ["Real-time 3D solar system rendering", "Interactive planet exploration", "Data-rich celestial body profiles", "Orbital mechanics simulation", "Stunning nebula shaders"],
    tech: ["React", "Three.js", "React Three Fiber", "GSAP", "TypeScript"],
    future: "Integration of NASA's live telemetry data, AR mode for mobile, and multi-player exploration sessions.",
    demo: "#",
    github: "#",
    color: "primary",
  },
  {
    id: "quickbite",
    tag: "FOOD-TECH STARTUP",
    name: "QUICKBITE",
    subtitle: "Modern food delivery reimagined",
    overview: "A full-stack food delivery platform featuring real-time tracking, smart restaurant discovery, and a seamless ordering experience.",
    problem: "Existing food apps are cluttered and slow. The ordering experience lacks personality and the tracking is unreliable.",
    solution: "A clean, fast, opinionated food-tech platform that puts speed and UX first — from browsing to bite.",
    features: ["Real-time delivery tracking", "Smart restaurant discovery", "Instant ordering flow", "Loyalty rewards system", "Multi-restaurant cart"],
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    future: "AI-powered meal recommendations, predictive delivery ETAs, and subscription meal planning.",
    demo: "#",
    github: "#",
    color: "secondary",
  },
  {
    id: "kalabhoomi",
    tag: "LIVE DEPLOYED",
    name: "KALABHOOMI",
    subtitle: "A cultural arts discovery platform",
    overview: "A real-world deployed platform celebrating and connecting regional artists, performers, and cultural events across India.",
    problem: "Regional artists and cultural events lack digital visibility — talented performers go unnoticed outside their immediate geography.",
    solution: "A beautifully designed platform that amplifies local cultural voices, connects artists with audiences, and archives cultural heritage.",
    features: ["Artist profile showcase", "Event discovery map", "Cultural event calendar", "Gallery and media showcase", "Community engagement tools"],
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    future: "Live-streaming integration, artist booking system, and cultural heritage archive.",
    demo: "#",
    github: "#",
    color: "primary",
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<"overview" | "solution" | "features" | "future">("overview");

  const tabs = [
    { id: "overview" as const, label: "OVERVIEW" },
    { id: "solution" as const, label: "SOLUTION" },
    { id: "features" as const, label: "FEATURES" },
    { id: "future" as const, label: "FUTURE" },
  ];

  const content: Record<typeof activeTab, React.ReactNode> = {
    overview: <p className="text-white/60 text-sm leading-relaxed">{project.overview}</p>,
    solution: (
      <div className="space-y-3">
        <p className="text-white/40 text-xs font-mono uppercase tracking-wider">Problem</p>
        <p className="text-white/60 text-sm leading-relaxed">{project.problem}</p>
        <p className="text-white/40 text-xs font-mono uppercase tracking-wider mt-4">Solution</p>
        <p className="text-white/60 text-sm leading-relaxed">{project.solution}</p>
      </div>
    ),
    features: (
      <ul className="space-y-2">
        {project.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className="text-primary mt-[2px] text-xs">✦</span>
            <span className="text-white/60 text-sm">{f}</span>
          </li>
        ))}
      </ul>
    ),
    future: <p className="text-white/60 text-sm leading-relaxed italic">{project.future}</p>,
  };

  return (
    <motion.div
      ref={ref}
      className="relative rounded-3xl border border-white/10 bg-white/2 backdrop-blur-sm overflow-hidden group"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.2 }}
      data-testid={`card-project-${project.id}`}
    >
      <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-${project.color === "primary" ? "primary" : "secondary"}/60 to-transparent`} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/3 to-secondary/3 pointer-events-none" />

      <div className="p-8">
        <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary/60">{project.tag}</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mt-1">{project.name}</h3>
            <p className="text-white/40 text-sm mt-1">{project.subtitle}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={project.demo}
              className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-xs font-mono hover:border-primary/50 hover:text-primary transition-all"
              data-testid={`link-demo-${project.id}`}
            >
              LIVE DEMO
            </a>
            <a
              href={project.github}
              className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono hover:bg-primary/20 transition-all"
              data-testid={`link-github-${project.id}`}
            >
              GITHUB
            </a>
          </div>
        </div>

        <div className="flex gap-3 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest transition-all ${
                activeTab === tab.id
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "text-white/30 border border-transparent hover:text-white/60"
              }`}
              data-testid={`tab-${project.id}-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[100px]">{content[activeTab]}</div>

        <div className="mt-6 pt-5 border-t border-white/5">
          <p className="font-mono text-[10px] tracking-widest text-white/25 mb-3">TECH STACK</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-1 rounded text-xs font-mono text-white/50 border border-white/8 bg-white/3">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/4 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-secondary/70 mb-4">SECTION 04</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">FEATURED PROJECTS</h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">MISSIONS LAUNCHED</p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
