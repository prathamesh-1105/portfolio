import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const LINKS = [
    { label: "EMAIL", value: "prathameshkambli1nov@gmail.com", href: "mailto:prathameshkambli1nov@gmail.com", icon: "✉" },
    { label: "GITHUB", value: "github.com/prathamesh-1105", href: "https://github.com/prathamesh-1105", icon: "⌥" },
    { label: "LINKEDIN", value: "linkedin.com/in/prathamesh-kambli", href: "https://www.linkedin.com/in/prathamesh-kambli", icon: "◉" },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/4 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-secondary/70 mb-4">SECTION 11</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white mb-4">CONTACT</h2>
          <p className="text-white/40 font-mono text-sm tracking-wider">OPEN A COMMUNICATION CHANNEL</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Have a project in mind, a collaboration idea, or just want to say hello?
              The channel is open. Let's build something remarkable together.
            </p>

            <div className="flex flex-col gap-5">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-4 rounded-2xl border border-white/8 bg-white/2 hover:border-primary/30 hover:bg-primary/4 transition-all group"
                  data-testid={`link-contact-${link.label.toLowerCase()}`}
                >
                  <span className="text-xl text-primary/60 group-hover:text-primary transition-colors">{link.icon}</span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-white/30 mb-1">{link.label}</p>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center gap-6 p-8 rounded-3xl border border-primary/20 bg-primary/5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="text-4xl text-primary">✦</span>
                <h3 className="text-xl font-bold text-white">Message Transmitted</h3>
                <p className="text-white/50 text-sm">Signal received. Prathamesh will respond soon.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-sm space-y-5"
              >
                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-white/30 mb-2">NAME</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-primary/40 transition-colors"
                    placeholder="Your name"
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-white/30 mb-2">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-primary/40 transition-colors"
                    placeholder="your@email.com"
                    data-testid="input-contact-email"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-white/30 mb-2">MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-primary/40 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    data-testid="textarea-contact-message"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-primary/20 border border-primary/40 text-primary font-mono text-sm tracking-widest hover:bg-primary/30 transition-colors"
                  data-testid="button-contact-submit"
                >
                  TRANSMIT MESSAGE
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
