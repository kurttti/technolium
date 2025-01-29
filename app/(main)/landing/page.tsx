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
      <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4"
            >
              Вступительный тест
            </motion.h1>
          </motion.div>
        )}
        
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <div className="w-full max-w-xl">
            <ConsultationForm onSuccess={handleSuccess} />
            {showCounter && <MailRuCounter />}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-center"
          >
            <img
              src="/Group 224.png"
              alt="Decoration"
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
