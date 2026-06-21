"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const overlayVariants = {
  initial: { scaleX: 0, originX: 1 },
  enter: { scaleX: 1, originX: 1 },
  exit: { scaleX: 0, originX: 0 },
}

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentPath, setCurrentPath] = useState(pathname)

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentPath(pathname)
        setIsTransitioning(false)
      }, 600)
    }
  }, [pathname, currentPath])

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="overlay-enter"
            variants={overlayVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 bg-black z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}