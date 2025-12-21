'use client'

interface JetpackComposeIconProps {
  className?: string
  size?: number
}

export default function JetpackComposeIcon({ className = '', size = 40 }: JetpackComposeIconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64 10c-30 0-54 24-54 54s24 54 54 54 54-24 54-54-24-54-54-54zm0 10c24.3 0 44 19.7 44 44S88.3 118 64 118 20 98.3 20 74 39.7 30 64 30z" />
      <path d="M44 44h40v40H44V44zm4 4v32h32V48H48z" />
      <path d="M52 56h8v8h-8v-8zm16 0h8v8h-8v-8zm-16 16h8v8h-8v-8zm16 0h8v8h-8v-8z" />
    </svg>
  )
}

