"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

type NotificationToastProps = {
  isOpen: boolean
  onClose: () => void
  message: string
  type?: "success" | "error"
}

export function NotificationToast({ isOpen, onClose, message, type = "success" }: NotificationToastProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: "100%" }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed top-4 right-4 z-[200] max-w-md w-full shadow-2xl"
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`
            rounded-lg p-4 flex items-center justify-between
            ${type === "success" ? "bg-[#4CAF50] text-white" : "bg-[#FF5252] text-white"}
          `}>
            <div className="flex items-center space-x-3">
              {type === "success" && (
                <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              <p className="text-[16px] font-medium pr-4">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
