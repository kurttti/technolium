"use client"

import { useState, useCallback } from "react"
import { X } from "lucide-react"
import { createBitrixDeal } from "@/actions/bitrix24"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  type?: "general" | "conditions" | "application"
  courseInfo?: {
    title: string
    price: string
    duration: string
  }
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

const successVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export function ContactFormModal({ isOpen, onClose, type = "general", courseInfo }: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClose = useCallback(() => {
    setIsSubmitted(false)
    onClose()
  }, [onClose])

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose()
      }
    },
    [handleClose],
  )

  const titles = {
    general: "Связаться с нами",
    conditions: "Запрос условий",
    application: courseInfo?.title ? `Запись на курс: ${courseInfo.title}` : "Оставить заявку",
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.target as HTMLFormElement)

    if (courseInfo) {
      formData.append("courseTitle", courseInfo.title)
      formData.append("coursePrice", courseInfo.price)
      formData.append("courseDuration", courseInfo.duration)
    }

    formData.append("type", type)
    const result = await createBitrixDeal(formData)

    setIsSubmitting(false)
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.message)
    }
  }

  if (!isOpen) return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4"
          onClick={handleOutsideClick}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="bg-white p-8 max-w-md w-full m-4 max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
          >
            <div className="flex justify-between items-center mb-8">
              <motion.h2 
                className="text-[24px] text-[#1B324A] font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {titles[type]}
              </motion.h2>
              <motion.button 
                onClick={handleClose} 
                className="text-gray-500 hover:text-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {isSubmitted ? (
              <motion.div 
                className="text-center py-4"
                variants={successVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#4CAF50] flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <motion.h3 
                  className="text-[24px] font-bold mb-4 text-[#1B324A]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  Заявка отправлена!
                </motion.h3>
                <motion.p 
                  className="text-[16px] text-[#4A5568] mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  Мы свяжемся с вами в ближайшее время для обсуждения деталей.
                </motion.p>
                <motion.button
                  onClick={handleClose}
                  className="w-full bg-[#0095FF] text-white py-3 text-[16px] hover:bg-[#0080FF] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Закрыть
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {courseInfo && (
                  <div className="bg-gray-50 p-4 mb-6 space-y-2">
                    <h3 className="text-[16px] font-semibold text-[#1B324A]">Информация о курсе:</h3>
                    <p className="text-[16px] text-gray-600">Название: {courseInfo.title}</p>
                    <p className="text-[16px] text-gray-600">Длительность: {courseInfo.duration}</p>
                    <p className="text-[16px] text-gray-600">Стоимость: {courseInfo.price} руб.</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-[16px] text-[#1B324A] mb-2">
                    Имя <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Введите ваше имя"
                    className="w-full p-4 border border-[#E5E7EB] text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[16px] text-[#1B324A] mb-2">
                    Email <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example@mail.com"
                    className="w-full p-4 border border-[#E5E7EB] text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[16px] text-[#1B324A] mb-2">
                    Телефон <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full p-4 border border-[#E5E7EB] text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[16px] text-[#1B324A] mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Ваше сообщение..."
                    className="w-full p-4 border border-[#E5E7EB] text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-[#FF0000] text-[16px]">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E4FCD] text-white py-4 text-[16px] hover:bg-[#1733A5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Отправка..." : "Отправить"}
                </button>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
