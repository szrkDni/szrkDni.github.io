'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CodeSnippet {
  code: string
  language: string
  x: number
  y: number
  delay: number
}

const codeSnippets: Omit<CodeSnippet, 'x' | 'y' | 'delay'>[] = [
  { code: 'const dev = { passion: "coding" }', language: 'JavaScript' },
  { code: 'def solve_problem(): return solution', language: 'Python' },
  { code: 'public Vizard create() { return magic; }', language: 'Java' },
  { code: 'interface Developer { void code(); }', language: 'C#' },
  { code: 'if (bug) { debug() }', language: 'Kotlin' },
  { code: 'while (learning) { improve(); }', language: 'JavaScript' },
  { code: 'async Task build() { return await deploy(); }', language: 'C#' },
  { code: 'stack = ["Gemini", "ChatGPT"]', language: 'Python' },
  { code: 'helloword("print")', language: 'Kotlin' }
]

export default function FloatingCode() {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([])

  useEffect(() => {
    const generateSnippets = () => {
      const newSnippets: CodeSnippet[] = codeSnippets.map((snippet, index) => ({
        ...snippet,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }))
      setSnippets(newSnippets)
    }

    generateSnippets()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snippets.map((snippet, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -100],
            x: [0, Math.sin(index) * 50],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: snippet.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
          }}
          className="absolute"
        >
          <div className="px-3 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-cyan-500/20 shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-foreground/50 ml-2">{snippet.language}</span>
            </div>
            <code className="text-xs text-cyan-400 font-mono whitespace-nowrap">
              {snippet.code}
            </code>
          </div>
        </motion.div>
      ))}
    </div>
  )
}






