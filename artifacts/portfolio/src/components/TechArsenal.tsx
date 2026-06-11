import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

const SKILLS = [
  {
    category: "PROGRAMMING",
    color: "primary",
    items: ["Python", "Java", "C++", "JavaScript"],
  },
  {
    category: "WEB DEV",
    color: "secondary",
    items: ["HTML", "CSS", "Responsive Design"],
  },
  {
    category: "AI & DATA",
    color: "primary",
    items: ["AI Tools", "Data Analytics", "Power BI"],
  },
  {
    category: "PLATFORMS & TOOLS",
    color: "secondary",
    items: ["Git", "GitHub", "Figma", "VS Code", "Postman", "Vercel"],
  },
];

const RADAR_DATA = [
  { skill: "Python", A: 85 },
  { skill: "JavaScript", A: 75 },
  { skill: "AI Tools", A: 80 },
  { skill: "UI/UX", A: 70 },
  { skill: "Data Analytics", A: 75 },
  { skill: "Web Dev", A: 80 },
];

export function TechArsenal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary/70 mb-4">SECTION 03</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">TECH ARSENAL</h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">THE COMMAND CENTER</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="grid sm:grid-cols-2 gap-5">
            {SKILLS.map((group, gi) => (
              <motion.div
                key={group.category}
                className="p-5 rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm group hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.12 }}
                data-testid={`card-skill-${group.category.toLowerCase().replace(/[^a-z]/g, "-")}`}
              >
                <p className="font-mono text-[10px] tracking-[0.25em] text-primary/60 mb-4">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      className="px-2 py-1 text-xs rounded border border-white/10 bg-white/5 text-white/70 font-mono hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gi * 0.12 + ii * 0.06 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/30 mb-6">SKILL RADAR</p>
            <div className="w-full max-w-sm h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={RADAR_DATA}>
                  <PolarGrid stroke="rgba(255,255,255,0.08)" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11, fontFamily: "Space Mono" }}
                  />
                  <Radar
                    name="Prathamesh"
                    dataKey="A"
                    stroke="hsl(217,91%,60%)"
                    fill="hsl(217,91%,60%)"
                    fillOpacity={0.2}
                    strokeWidth={1.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
