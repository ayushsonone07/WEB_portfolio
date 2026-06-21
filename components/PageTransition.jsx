"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }) {
  const pathname = usePathname()

  return (
    <>
      {/* ── SLIDE WIPE OVERLAY ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + "-overlay"}
          className="fixed inset-0 z-[9999] pointer-events-none origin-left"
          style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)" }}
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: [1, 1, 0],
            originX: ["0%", "0%", "100%"],
          }}
          transition={{
            duration: 0.9,
            times: [0, 0.45, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      </AnimatePresence>

      {/* ── PAGE CONTENT FADE ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{
            duration: 0.45,
            delay: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}