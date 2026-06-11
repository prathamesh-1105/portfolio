import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import prathameshPhoto from "@assets/prathamesh_nobg.png";

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.3 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha >= 1) { s.alpha = 1; s.twinkleDir = -1; }
        if (s.alpha <= 0.1) { s.alpha = 0.1; s.twinkleDir = 1; }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha.toFixed(2)})`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }} />;
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-500, 500], [5, -5]);
  const rotateY = useTransform(mouseX, [-500, 500], [-5, 5]);
  const imgX = useTransform(mouseX, [-500, 500], [-12, 12]);
  const imgY = useTransform(mouseY, [-500, 500], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-background">
      {/* CSS starfield */}
      <StarCanvas />

      {/* Nebula gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-[80px]" />
      </div>

      {/* Space grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-1 pointer-events-none" />

      {/* RIGHT: Photo — absolutely placed, anchored to bottom-right, grows upward */}
      <motion.div
        className="absolute bottom-0 right-0 z-5 pointer-events-none"
        style={{ x: imgX, y: imgY }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
      >
        <img
          src={prathameshPhoto}
          alt="Prathamesh Kambli"
          className="relative z-10 w-auto select-none block"
          style={{
            height: "118vh",
            maxHeight: "118vh",
            objectFit: "contain",
            objectPosition: "bottom",
            maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 80%, transparent 100%), linear-gradient(to top, black 75%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 80%, transparent 100%), linear-gradient(to top, black 75%, transparent 100%)",
            WebkitMaskComposite: "source-in",
          }}
          draggable={false}
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 min-h-screen flex items-center">
        {/* LEFT: Content — only takes left half */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-mono tracking-widest uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Status: Universe Initialized
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-sans tracking-tight text-white mb-4 leading-none">
              PRATHAMESH
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradientShift_4s_linear_infinite]">
                KAMBLI
              </span>
            </h1>

            <h2 className="text-lg sm:text-2xl text-white/50 font-light tracking-wide mb-4">
              AI Engineer & Product Builder
            </h2>

            <p className="text-white/40 text-base max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              Turning ideas into intelligent digital experiences.
              <span className="block mt-1 text-sm text-white/25">Exploring the intersection of AI, design, engineering, and innovation.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                href="#journey"
                onClick={(e) => { e.preventDefault(); document.querySelector("#journey")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-full text-sm tracking-wide shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all cursor-pointer"
                data-testid="button-explore"
              >
                Explore My Universe
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-transparent border border-white/20 text-white/70 font-semibold rounded-full text-sm tracking-wide hover:border-white/40 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
                data-testid="button-work"
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <span className="text-[9px] font-mono tracking-[0.3em] text-white">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
