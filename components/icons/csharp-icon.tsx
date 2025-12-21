'use client'

interface CSharpIconProps {
  className?: string
  size?: number
}

export default function CSharpIcon({ className = '', size = 40 }: CSharpIconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7L12.6 30.7c-1.7 1-2.6 3-2.6 5.1v55.7c0 2.1.9 4.1 2.6 5.1l44.3 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48.3-27.9c1.7-1 2.6-3 2.6-5.1V35.8c0-2.1-.9-4.1-2.6-5.1zM64 88.5c-14.3 0-25.9-11.6-25.9-25.9S49.7 36.7 64 36.7s25.9 11.6 25.9 25.9S78.3 88.5 64 88.5zm0-45.9c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z" />
      <path d="M64 50.1c-1.4 0-2.5 1.1-2.5 2.5v15.3c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V52.6c0-1.4-1.1-2.5-2.5-2.5z" />
      <path d="M64 75.6c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" />
    </svg>
  )
}

