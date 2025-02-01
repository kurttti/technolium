"use client"

import { useState } from "react"
import { ContactFormModal } from "@/components/forms/contact-form-modal"

interface ConditionsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConditionsModal({ isOpen, onClose }: ConditionsModalProps) {
  return (
    <ContactFormModal
      isOpen={isOpen}
      onClose={onClose}
      type="conditions"
      submitButtonProps={{
        className: "w-full bg-[#1E4FCD] text-white py-3 transition-colors",
      }}
    />
  )
}
