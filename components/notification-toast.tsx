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
          className="fixed top-4 right-0 sm:right-4 z-[200] w-full sm:max-w-[400px] mx-auto px-4 sm:px-0"
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`
            rounded-lg p-3 sm:p-4 flex items-start sm:items-center justify-between shadow-lg
            ${type === "success" ? "bg-[#4CAF50] text-white" : "bg-[#FF5252] text-white"}
          `}>
            <div className="flex items-start sm:items-center space-x-3 flex-1">
              {type === "success" && (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              <p className="text-[14px] sm:text-[16px] font-medium pr-2 sm:pr-4 leading-tight">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors flex-shrink-0 -mr-1 sm:mr-0 -mt-1 sm:mt-0"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
