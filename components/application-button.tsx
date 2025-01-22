"use client"

import { useState } from "react"
import { ApplicationModal } from "./application-modal"

interface ApplicationButtonProps {
  className?: string
  variant?: "primary" | "secondary"
}

export function ApplicationButton({ className = "", variant = "primary" }: ApplicationButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${
          variant === "primary"
            ? "bg-[#1E4FCD] text-white hover:bg-[#1733A5]"
            : "bg-white text-[#1E4FCD] hover:bg-gray-100"
        } px-8 py-3 transition-colors ${className}`}
      >
        Оставить заявку
      </button>
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

