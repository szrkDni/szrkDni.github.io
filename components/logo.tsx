'use client'

import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-1 font-mono text-lg sm:text-xl md:text-2xl"
    >
      <span className="text-cyan-400 font-normal">&lt;</span>
      <motion.span
        className="text-purple-400 font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        DSz
      </motion.span>
      <span className="text-cyan-400 font-normal">/&gt;</span>
    </motion.div>
  )
}

