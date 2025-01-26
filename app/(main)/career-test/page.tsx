'use client'

import { CareerTest } from '@/components/career-test'

export default function CareerTestPage() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] bg-gray-50 pt-[var(--header-height)]">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Тест на профориентацию</h1>
          <p className="text-lg text-gray-600">
            Пройдите тест и узнайте, какое направление обучения подходит именно вам
          </p>
        </div>
        <CareerTest />
      </div>
    </div>
  )
}
