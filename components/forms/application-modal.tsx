"use client"

import { useState } from "react"
import { ContactFormModal } from "@/components/forms/contact-form-modal"

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  courseInfo?: {
    title: string
    price: string
    duration: string
  }
}

export function ApplicationModal({ isOpen, onClose, courseInfo }: ApplicationModalProps) {
  return (
    <ContactFormModal
      isOpen={isOpen}
      onClose={onClose}
      type="application"
      courseInfo={courseInfo}
      submitButtonProps={{
        className: "w-full bg-[#1E4FCD] text-white py-3 transition-colors",
      }}
    />
  )
}
