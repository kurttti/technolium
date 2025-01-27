'use client'

import { ConsultationForm } from '@/components/consultation-form'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="min-h-[calc(100vh-var(--header-height))] bg-gray-50 pt-[var(--header-height)]">
      <div className="max-w-3xl mx-auto px-4 py-8">
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
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.3,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-lg text-gray-600"
            >
              Оставьте ваши контакты, мы направим вам результаты теста и подберем оптимальную программу
            </motion.p>
          </motion.div>
        )}
        <ConsultationForm onSuccess={() => setIsSubmitted(true)} />
      </div>
    </div>
  )
}
