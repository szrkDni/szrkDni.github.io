'use client'

interface OpenCVIconProps {
  className?: string
  size?: number
}

export default function OpenCVIcon({ className = '', size = 40 }: OpenCVIconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64 10L10 30v68l54 20 54-20V30L64 10zm0 8.5l42 15.5v57L64 106 22 91.5V34l42-15.5z" />
      <path d="M64 20L20 36v56l44 16 44-16V36L64 20zm0 8l36 13v46L64 100 28 87V41l36-13z" />
      <circle cx="64" cy="64" r="8" />
      <path d="M48 48l16 16-16 16M80 48l-16 16 16 16" />
    </svg>
  )
}

