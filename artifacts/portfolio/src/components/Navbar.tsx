import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "JOURNEY", href: "#journey" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "AI CLONE", href: "#ai-clone" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="font-mono text-sm tracking-widest text-primary font-bold">
          PK<span className="text-white/30">.</span>
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNav(item.href)}
                className="font-mono text-[10px] tracking-[0.2em] text-white/50 hover:text-primary transition-colors duration-300"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1px] bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-5 h-[1px] bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1px] bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ul className="flex flex-col gap-4 pt-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="font-mono text-xs tracking-widest text-white/60 hover:text-primary transition-colors"
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
