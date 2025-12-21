'use client'

import { motion } from 'framer-motion'
import { Code, Download, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { translations } from '@/lib/translations'
import FloatingCode from './floating-code'
import Particles from './particles'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const [imageError, setImageError] = useState(false)

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Background Effects */}
      <Particles count={30} />
      <FloatingCode />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-foreground/70 mb-2"
            >
              {t.hero.greeting}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-foreground/80"
            >
              <span className="bg-gradient-to-r from-cyan-500/80 via-purple-500/80 to-green-500/80 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-8"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToProjects}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    {t.hero.cta}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-background border-2 border-cyan-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    {t.hero.downloadResume}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
              
              
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 bg-background/50 backdrop-blur-sm">
                <div className="relative aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  {!imageError ? (
                    <Image
                      src="/profile.png"
                      alt="Profile"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white">
                        ?
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badges */}
              <motion.a
                href="https://github.com/szrkDni?tab=repositories"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white text-sm font-semibold shadow-lg"
              >
                <Code className="inline h-4 w-4 mr-1" />
                Developer
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/dániel-szarka-800375301"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-4 -left-4 p-3 rounded-full bg-gradient-to-r from-purple-500 to-green-500 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

