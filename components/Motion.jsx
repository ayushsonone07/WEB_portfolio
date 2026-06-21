"use client"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Motion() {
  return (
    <motion.span
      {...fadeUp(0.1)}
      className="sm:text-9xl text-7xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block"
    >
      Welcome
    </motion.span>
  )
}

export function Heading() {
  return (
    <motion.h3
      {...fadeUp(0)}
      className="text-2xl lg:text-3xl font-bold text-center text-[#1a1a2e]"
    >
      My Name is Ayush,
    </motion.h3>
  )
}

export function Heading1() {
  return (
    <motion.h3
      {...fadeUp(0.2)}
      className="text-2xl lg:text-5xl font-bold text-center text-[#1a1a2e]"
    >
      to my portfolio.site
    </motion.h3>
  )
}