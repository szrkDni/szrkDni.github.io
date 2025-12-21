'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { translations } from '@/lib/translations'
import {
  SiKotlin,
  SiPython,
  SiSqlite,
} from 'react-icons/si'
import JavaIcon from './icons/java-icon'
import CSharpIcon from './icons/csharp-icon'

interface TechNode {
  id: string
  name: string
  icon: any
  color: string
  initialX: number
  initialY: number
}

interface NodePosition {
  x: number
  y: number
}

const techNodes: TechNode[] = [
  { id: 'kotlin', name: 'Kotlin', icon: SiKotlin, color: 'from-purple-400 to-purple-600', initialX: 0.15, initialY: 0.25 },
  { id: 'java', name: 'Java', icon: JavaIcon, color: 'from-orange-400 to-orange-600', initialX: 0.85, initialY: 0.25 },
  { id: 'csharp', name: 'C#', icon: CSharpIcon, color: 'from-blue-400 to-blue-600', initialX: 0.15, initialY: 0.75 },
  { id: 'python', name: 'Python', icon: SiPython, color: 'from-yellow-400 to-yellow-600', initialX: 0.85, initialY: 0.75 },
  { id: 'sqlite', name: 'SQLite', icon: SiSqlite, color: 'from-cyan-400 to-cyan-600', initialX: 0.5, initialY: 0.1 },
]

export default function AboutTech() {
  const { language } = useLanguage()
  const t = translations[language]
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 })
  const [nodePositions, setNodePositions] = useState<{ [key: string]: NodePosition }>({})

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        setContainerSize({ width, height })
        setCenterPos({ x: width / 2, y: height / 2 })
        
        // Initialize node positions
        const positions: { [key: string]: NodePosition } = {}
        techNodes.forEach((node) => {
          positions[node.id] = {
            x: node.initialX * width,
            y: node.initialY * height,
          }
        })
        setNodePositions(positions)
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [isInView])

  const constrainToBounds = (x: number, y: number): NodePosition => {
    const nodeSize = 80
    const padding = 20
    return {
      x: Math.max(padding, Math.min(containerSize.width - nodeSize - padding, x)),
      y: Math.max(padding, Math.min(containerSize.height - nodeSize - padding, y)),
    }
  }

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
        </motion.div>

        <div
          ref={containerRef}
          className="relative w-full h-[600px] md:h-[700px] rounded-2xl bg-background/50 backdrop-blur-sm border border-border overflow-hidden"
        >
          {/* SVG for connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {techNodes.map((node, index) => {
              const nodePos = nodePositions[node.id]
              if (!nodePos || !centerPos.x || centerPos.x === 0) return null
              
              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1={centerPos.x}
                  y1={centerPos.y}
                  x2={nodePos.x + 40}
                  y2={nodePos.y + 40}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: 0.6,
                    x2: nodePos.x + 40,
                    y2: nodePos.y + 40,
                  }}
                  transition={{ duration: 0.2 }}
                />
              )
            })}
          </svg>

          {/* Center About Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute z-10"
            style={{
              left: centerPos.x - 160,
              top: centerPos.y - 120,
            }}
          >
            <div className="w-80 md:w-96 p-6 rounded-xl bg-background border-2 border-cyan-500/30 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t.about.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4 text-sm md:text-base">
                {t.about.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Mobile Apps', 'Backend Systems', 'Cloud Computing'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Floating Tech Nodes */}
          {techNodes.map((node, index) => {
            const Icon = node.icon
            const x = useMotionValue(0)
            const y = useMotionValue(0)
            
            const springConfig = { damping: 25, stiffness: 300 }
            const springX = useSpring(x, springConfig)
            const springY = useSpring(y, springConfig)

            useEffect(() => {
              if (nodePositions[node.id]) {
                const pos = nodePositions[node.id]
                x.set(pos.x - 40)
                y.set(pos.y - 40)
              }
            }, [nodePositions[node.id]?.x, nodePositions[node.id]?.y, node.id, x, y])

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                style={{
                  x: springX,
                  y: springY,
                  position: 'absolute',
                  zIndex: 20,
                }}
                drag
                dragConstraints={containerRef}
                dragElastic={0.1}
                onDragEnd={(event, info) => {
                  if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect()
                    const newX = info.point.x - rect.left
                    const newY = info.point.y - rect.top
                    const constrained = constrainToBounds(newX, newY)
                    setNodePositions((prev) => ({
                      ...prev,
                      [node.id]: constrained,
                    }))
                  }
                }}
                whileHover={{ scale: 1.1 }}
                whileDrag={{ scale: 1.15, zIndex: 30 }}
                className="cursor-grab active:cursor-grabbing group"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${node.color} shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow`}>
                  {typeof Icon === 'function' ? (
                    <Icon className="text-white" size={40} />
                  ) : (
                    <Icon className="h-10 w-10 text-white" />
                  )}
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                    {node.name}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
