'use client'

import { ConsultationForm } from '@/components/consultation-form'
import { useState } from 'react'

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="min-h-[calc(100vh-var(--header-height))] bg-gray-50 pt-[var(--header-height)]">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {!isSubmitted && (
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Вступительный тест</h1>
            <p className="text-lg text-gray-600">
            Оставьте ваши контакты, мы направим вам результаты теста и подберем оптимальную программу
            </p>
          </div>
        )}
        <ConsultationForm onSuccess={() => setIsSubmitted(true)} />
      </div>
    </div>
  )
}
