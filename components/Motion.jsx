"use client"
import React from 'react'
import { motion } from "framer-motion"

export default function Motion(){
  return (
        <motion.span
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="sm:text-9xl text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent z-0"
        >
            Welcome
        </motion.span>
  )
}

export function Heading1(){
    return(
        <motion.h3
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="text-2xl from-zinc-700 font-bold text-center lg:text-5xl"
        >
           to my portfolio.site
        </motion.h3>
    )
}

export function Heading(){
    return(
        <motion.h3
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="text-2xl from-zinc-700 font-bold text-center lg:text-3xl"
        >
           My Name is Ayush,
        </motion.h3>
    )
}