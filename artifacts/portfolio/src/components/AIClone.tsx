import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const SUGGESTED = [
  "Who is Prathamesh?",
  "What technologies does he know?",
  "Tell me about Celestial Explorer.",
  "What are his future goals?",
  "What projects has he built?",
];

type Message = { role: "user" | "ai"; text: string };

const KB: Record<string, string> = {
  "who is prathamesh": "Prathamesh Kambli is a B.E. Computer Engineering student specializing in AI & Data Science. He is an AI Engineer and Product Builder passionate about turning complex ideas into intelligent digital experiences. Beyond engineering, he paints, sings, teaches, and contributes to social causes.",
  "what technologies does he know": "Prathamesh works across: Programming (Python, Java, C++, JavaScript), Web Development (HTML, CSS, Responsive Design), AI & Data (AI Tools, Data Analytics, Power BI), and Platforms & Tools (Git, GitHub, Figma, VS Code, Postman, Vercel).",
  "tell me about celestial explorer": "Celestial Explorer is Prathamesh's flagship project — an immersive 3D solar system exploration platform built with React, Three.js, React Three Fiber, and GSAP. It turns dry space data into a visceral, interactive experience. The future vision includes live NASA telemetry, AR mode, and multiplayer exploration.",
  "what are his future goals": "Mission 2030: Become a professional AI Engineer, build innovative products that matter, launch a technology startup, and create tools that positively impact millions of lives. Every project today is a step toward that mission.",
  "what projects has he built": "Prathamesh has built three major projects:\n1. Celestial Explorer — a 3D space exploration platform (flagship)\n2. QuickBite — a full-stack food delivery app with real-time tracking\n3. Kalabhoomi — a live cultural arts platform connecting regional artists with audiences",
};

function matchResponse(input: string): string {
  const normalized = input.toLowerCase().trim();
  for (const [key, val] of Object.entries(KB)) {
    if (normalized.includes(key.split(" ")[0]) || key.split(" ").some((w) => normalized.includes(w))) {
      return val;
    }
  }
  return "I'm Prathamesh's AI Clone — still learning! Try asking about his projects, skills, or future goals. I know quite a bit about Celestial Explorer too.";
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-primary"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export function AIClone() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "AI CLONE v1.0 online. I am Prathamesh's digital representative. Ask me anything about him — his projects, skills, or mission." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = (text?: string) => {
    const query = (text || input).trim();
    if (!query) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "ai", text: matchResponse(query) }]);
    }, 1200 + Math.random() * 800);
  };

  return (
    <section id="ai-clone" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary/70 mb-4">SECTION 09</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">ASK MY AI CLONE</h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">JARVIS INTERFACE — ONLINE</p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="rounded-3xl border border-primary/20 bg-black/40 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.1)]">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-primary/5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary/70">AI CLONE — PRATHAMESH KAMBLI v1.0</span>
            </div>

            <div className="h-80 overflow-y-auto p-6 flex flex-col gap-4 scroll-smooth" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(99,102,241,0.2) transparent" }}>
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {msg.role === "ai" && (
                      <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary text-xs font-bold">
                        AI
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.role === "ai"
                          ? "bg-white/5 text-white/80 border border-white/8"
                          : "bg-primary/20 text-white border border-primary/30"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {typing && (
                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold">AI</div>
                    <div className="bg-white/5 border border-white/8 rounded-2xl">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="px-4 pb-4">
              <p className="font-mono text-[10px] text-white/25 mb-3 tracking-wider">SUGGESTED QUERIES</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="px-3 py-1.5 rounded-full text-xs font-mono text-white/40 border border-white/10 hover:border-primary/40 hover:text-primary/80 transition-all"
                    data-testid={`button-ai-suggestion`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask anything about Prathamesh..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 font-mono focus:outline-none focus:border-primary/40 transition-colors"
                  data-testid="input-ai-clone"
                />
                <button
                  onClick={() => handleSend()}
                  className="px-5 py-3 rounded-xl bg-primary/20 border border-primary/30 text-primary font-mono text-xs hover:bg-primary/30 transition-colors"
                  data-testid="button-ai-send"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
