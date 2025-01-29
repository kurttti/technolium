'use client'

import { ConsultationForm } from '@/components/consultation-form-2'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MailRuCounter } from '@/components/mail-ru-counter-3606079'

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCounter, setShowCounter] = useState(false)

  const handleSuccess = () => {
    setIsSubmitted(true)
    setShowCounter(true)
  }

  return (
    <div className="min-h-[100dvh] bg-gray-50 flex flex-col">
      <div className="flex-1 flex items-start sm:items-center justify-center">
        <div className="w-full max-w-3xl px-4 sm:px-6 pt-2 sm:py-12">
          {!isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-center mb-8"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                Вступительный тест
              </motion.h1>
            </motion.div>
          )}
          <ConsultationForm onSuccess={handleSuccess} />
          {showCounter && <MailRuCounter />}
        </div>
      </div>
    </div>
  )
}
