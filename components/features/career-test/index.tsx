'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TestQuestion } from './test-question'
import { TestResult } from './test-result'
import { questions } from './questions'
import { NotificationToast } from '@/components/ui/notification-toast'
import { ChevronLeft, Loader2 } from 'lucide-react'

type Answer = {
  questionId: number
  answer: string
}

export function CareerTest() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [testResult, setTestResult] = useState<string | null>(null)
  const [userInfo, setUserInfo] = useState<{
    name: string
    email: string
    phone: string
  } | null>(null)
  const [showContactForm, setShowContactForm] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAnswer = async (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionId] = {
      questionId: currentQuestionId,
      answer
    }
    setAnswers(newAnswers)

    if (currentQuestionId < questions.length - 1) {
      setCurrentQuestionId(currentQuestionId + 1)
    } else {
      setShowContactForm(true)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // 1. Получаем результаты анализа для пользователя
      const analysisResponse = await fetch('/api/analyze-career-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
      })

      if (!analysisResponse.ok) {
        throw new Error('Failed to analyze test results')
      }

      const { result } = await analysisResponse.json()
      setTestResult(result)

      // 2. Асинхронно отправляем данные в Битрикс
      if (userInfo) {
        fetch('/api/create-bitrix-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            answers,
            userInfo
          }),
        }).catch(error => {
          console.error('Error creating Bitrix lead:', error)
        })
      }

    } catch (error) {
      console.error('Error submitting test:', error)
      setError('Произошла ошибка при обработке теста. Пожалуйста, попробуйте еще раз.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    if (currentQuestionId > 0) {
      setCurrentQuestionId(currentQuestionId - 1)
    }
  }

  const handleRetake = () => {
    setCurrentQuestionId(0)
    setAnswers([])
    setTestResult(null)
    setUserInfo(null)
    setShowContactForm(false)
  }

  if (testResult) {
    return <TestResult result={testResult} onRetake={handleRetake} />
  }

  if (showContactForm) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto p-6"
      >
        <h2 className="text-2xl font-bold mb-6">Получите ваши результаты</h2>
        <p className="text-gray-600 mb-6">
          Оставьте контактные данные, чтобы получить подробный анализ и персональные рекомендации
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Иван Иванов"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2" size={18} />
                  Анализируем ваши ответы...
                </div>
              ) : (
                'Получить результаты'
              )}
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Нажимая кнопку, вы соглашаетесь с нашей{' '}
            <a href="/privacy" className="text-blue-600 hover:underline">
              политикой конфиденциальности
            </a>
          </p>
        </form>

        <Button
          variant="ghost"
          onClick={handleBack}
          className="mt-4 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Вернуться к вопросам
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <motion.div
        key={currentQuestionId}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-500"
              style={{
                width: `${((currentQuestionId + 1) / questions.length) * 100}%`
              }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Вопрос {currentQuestionId + 1} из {questions.length}
          </div>
        </div>

        <TestQuestion
          question={questions[currentQuestionId]}
          onAnswer={handleAnswer}
          isLast={currentQuestionId === questions.length - 1}
          onSubmit={() => setShowContactForm(true)}
          isSubmitting={isSubmitting}
          selectedAnswer={answers[currentQuestionId]?.answer}
        />

        {currentQuestionId > 0 && (
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mt-4 text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
        )}
      </motion.div>
    </div>
  )
}
