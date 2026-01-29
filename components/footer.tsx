'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { translations } from '@/lib/translations'

const socialLinks = [
  { icon: Github, href: 'https://github.com/szrkDni', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dániel-szarka-800375301', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:example@email.com', label: 'Email' },
]

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-foreground/60"
          >
            © {new Date().getFullYear()} Portfolio. {t.footer.rights}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground/70 hover:text-foreground"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}











