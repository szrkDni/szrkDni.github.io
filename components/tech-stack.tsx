'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { translations } from '@/lib/translations'
import {
  SiPython,
  SiKotlin,
  SiSpring,
  SiAndroid,
  SiGit,
} from 'react-icons/si'
import JavaIcon from './icons/java-icon'
import CSharpIcon from './icons/csharp-icon'
import DotNetIcon from './icons/dotnet-icon'
import OpenCVIcon from './icons/opencv-icon'
import JetpackComposeIcon from './icons/jetpack-compose-icon'

const technologies = [
  // Programozási nyelvek
  { name: 'C#', icon: CSharpIcon, color: 'from-blue-400 to-blue-600' },
  { name: 'Java', icon: JavaIcon, color: 'from-orange-400 to-orange-600' },
  { name: 'Python', icon: SiPython, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Kotlin', icon: SiKotlin, color: 'from-purple-400 to-purple-600' },
  // Frameworkök
  { name: 'Spring Boot', icon: SiSpring, color: 'from-green-400 to-green-600' },
  { name: '.NET Core', icon: DotNetIcon, color: 'from-blue-500 to-purple-600' },
  // Egyéb
  { name: 'Android', icon: SiAndroid, color: 'from-green-500 to-green-700' },
  { name: 'OpenCV', icon: OpenCVIcon, color: 'from-cyan-400 to-blue-600' },
  { name: 'Jetpack Compose', icon: JetpackComposeIcon, color: 'from-purple-500 to-cyan-500' },
  { name: 'Git', icon: SiGit, color: 'from-orange-400 to-red-600' },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            const isCustomIcon = tech.name === 'C#' || tech.name === 'Java' || tech.name === '.NET Core' || tech.name === 'OpenCV' || tech.name === 'Jetpack Compose'
            
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
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                      {isCustomIcon ? (
                        <Icon className="text-white" size={32} />
                      ) : (
                        <Icon className="h-8 w-8 text-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors text-center">
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



