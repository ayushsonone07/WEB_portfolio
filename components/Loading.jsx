"use client";
import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.6,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setProgress(Math.round(v)),
    });
    return () => controls.stop();
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-mono text-sm font-semibold tracking-[0.18em] text-white/40 uppercase mb-10"
      >
        ayushsonone07<span className="text-white/70">.dev</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-64 sm:w-80 h-px bg-white/10 relative"
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-white origin-left"
          style={{ width: `${progress}%` }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_4px_rgba(255,255,255,0.6)]"
          style={{ left: `${progress}%` }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-mono text-xs text-white/30 tracking-widest mt-5 tabular-nums"
      >
        {String(progress).padStart(3, "0")}%
      </motion.p>
    </div>
  );
}
