import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onOver = (e: MouseEvent) => {
      setHovering(!!(e.target as HTMLElement).closest("button, a, input, textarea, [data-interactive]"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  useEffect(() => {
    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      setTrail((prev) => ({
        x: lerp(prev.x, pos.x, 0.1),
        y: lerp(prev.y, pos.y, 0.1),
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  return (
    <>
      {/* Dot — snaps to cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
        style={{ width: 8, height: 8 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "hsl(217,91%,70%)", boxShadow: "0 0 8px 2px hsl(217,91%,60%)" }}
        />
      </motion.div>

      {/* Ring — lags smoothly behind */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${trail.x - 20}px, ${trail.y - 20}px)`,
          width: 40,
          height: 40,
        }}
      >
        <div
          className="w-full h-full rounded-full border transition-all duration-200"
          style={{
            borderColor: hovering ? "hsl(270,70%,65%)" : "rgba(66,108,132,0.45)",
            transform: `scale(${hovering ? 1.6 : clicking ? 0.7 : 1})`,
            transition: "transform 0.2s ease, border-color 0.2s ease",
            boxShadow: hovering ? "0 0 14px 2px rgba(168,85,247,0.25)" : "none",
          }}
        />
      </div>

      {/* Glow trail */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
        style={{
          width: 120,
          height: 120,
          transform: `translate(${trail.x - 60}px, ${trail.y - 60}px)`,
          background: "radial-gradient(circle, rgba(66,108,132,0.07) 0%, transparent 70%)",
          transition: "transform 0.05s linear",
        }}
      />

      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}
