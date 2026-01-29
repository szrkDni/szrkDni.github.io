'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language } from '@/lib/translations'

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('hu')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('language') as Language
        if (saved && (saved === 'hu' || saved === 'en')) {
          setLanguage(saved)
        }
      } catch (error) {
        // localStorage might not be available
        console.error('Error accessing localStorage:', error)
      }
    }
  }, [])

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      try {
        localStorage.setItem('language', language)
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'hu' ? 'en' : 'hu'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    // Fallback for SSR/prerendering
    return { language: 'hu' as Language, toggleLanguage: () => {} }
  }
  return context
}











