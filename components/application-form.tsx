"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { createBitrixDeal } from "@/actions/bitrix24"
import { motion, AnimatePresence } from "framer-motion"
import { NotificationToast } from "./notification-toast"

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

type ApplicationFormProps = {
  isOpen: boolean
  onClose: () => void
  selectedPlan: "standard" | "preferential" | null
}

export function ApplicationForm({ isOpen, onClose, selectedPlan }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClose = () => {
    setShowNotification(false)
    setError(null)
    onClose()
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.target as HTMLFormElement)
    formData.append("type", "application")
    formData.append("plan", selectedPlan || "")
    formData.append("buttonType", "Оставить заявку")
    formData.append("pageUrl", window.location.href)

    const result = await createBitrixDeal(formData)

    setIsSubmitting(false)
    if (result.success) {
      setShowNotification(true)
      handleClose()
      // Скрываем уведомление через 5 секунд
      setTimeout(() => {
        setShowNotification(false)
      }, 5000)
    } else {
      setError(result.message)
    }
  }

  const planTitles = {
    standard: "Заявка на стандартное обучение",
    preferential: "Заявка на льготное обучение",
  }

  return (
    <>
      <NotificationToast
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        message="Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время."
        type="success"
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]" 
            onClick={handleClose}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-white p-8 max-w-md w-full m-4 max-h-[90vh] overflow-y-auto"
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
                  {selectedPlan ? planTitles[selectedPlan] : "Оставить заявку"}
                </motion.h2>
                <motion.button 
                  onClick={handleClose} 
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              {isSubmitting ? (
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
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <label className="block text-[16px] text-[#1B324A] mb-2">
                      Имя <span className="text-[#FF0000]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-4 border border-[#E5E7EB] text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors"
                      placeholder="Введите ваше имя"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <label className="block text-[16px] text-[#1B324A] mb-2">
                      Email <span className="text-[#FF0000]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-4 border border-[#E5E7EB] text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors"
                      placeholder="example@mail.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <label className="block text-[16px] text-[#1B324A] mb-2">
                      Телефон <span className="text-[#FF0000]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full p-4 border border-[#E5E7EB] text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </motion.div>

                  {error && (
                    <motion.p 
                      className="text-[#FF0000] text-[16px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {error}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1E4FCD] text-white py-4 text-[16px] hover:bg-[#1733A5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Отправка...
                      </div>
                    ) : (
                      "Отправить"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
