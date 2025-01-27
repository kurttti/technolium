'use client'

import { ConsultationForm } from '@/components/consultation-form'

export default function ConsultationPage() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] bg-gray-50 pt-[var(--header-height)]">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Получить консультацию</h1>
          <p className="text-lg text-gray-600">
            Ответьте на несколько вопросов, и мы поможем подобрать оптимальную программу обучения
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
