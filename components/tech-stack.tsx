'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { translations } from '@/lib/translations'
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  
} from 'react-icons/si'

const technologies = [
  { name: 'Python', icon: SiPython, color: 'from-yellow-400 to-yellow-600' },
  { name: 'C++', icon: SiCplusplus, color: 'from-blue-400 to-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-400 to-blue-600' },
  { name: 'React', icon: SiReact, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-400 to-gray-600' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'from-green-400 to-green-600' },
  { name: 'Docker', icon: SiDocker, color: 'from-blue-400 to-blue-600' },
  { name: 'Git', icon: SiGit, color: 'from-orange-400 to-orange-600' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-blue-400 to-blue-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'from-green-400 to-green-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-400 to-cyan-600' },
]

export default function TechStack() {
  const { language } = useLanguage()
  const t = translations[language]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="tech"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t.tech.title}
            </span>
          </h2>
          <p className="text-lg text-foreground/70">{t.tech.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-xl bg-background border border-border hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

