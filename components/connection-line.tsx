'use client'

import { motion } from 'framer-motion'

interface ConnectionLineProps {
  x1: number
  y1: number
  x2: number
  y2: number
  delay?: number
}

export default function ConnectionLine({ x1, y1, x2, y2, delay = 0 }: ConnectionLineProps) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="url(#lineGradient)"
      strokeWidth="2"
      strokeDasharray="5,5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: 1, 
        opacity: 0.6,
      }}
      transition={{ duration: 0.5, delay }}
    />
  )
}



