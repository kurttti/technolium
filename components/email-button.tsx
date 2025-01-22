"use client"

import { Mail } from "lucide-react"

interface EmailButtonProps {
  email?: string
  className?: string
  variant?: "primary" | "secondary"
}

export function EmailButton({ email = "info@technolium.ru", className = "", variant = "primary" }: EmailButtonProps) {
  const handleClick = () => {
    window.location.href = `mailto:info@technolium.ru`
  }

  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center justify-center gap-2
        ${
          variant === "primary"
            ? "bg-[#1E4FCD] text-white hover:bg-[#1733A5]"
            : "border border-[#1E4FCD] text-[#1E4FCD] hover:bg-[#1E4FCD] hover:text-white"
        }
        px-6 py-2 rounded-none transition-colors
        ${className}
      `}
    >
      <Mail className="w-5 h-5" />
      <span>Отправить письмо</span>
    </button>
  )
}

