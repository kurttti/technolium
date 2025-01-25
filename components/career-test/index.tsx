'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TestQuestion } from './test-question'
import { TestResult } from './test-result'
import { questions } from './questions'
import { NotificationToast } from '../notification-toast'
import { ChevronLeft } from 'lucide-react'

type Answer = {
  questionId: number
  answer: string
}

export function CareerTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showError, setShowError] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleAnswer = (answer: string) => {
    const newAnswer: Answer = {
      questionId: currentQuestion,
      answer
    }
    
    // Если ответ на этот вопрос уже существует, заменяем его
    const updatedAnswers = [...answers]
    const existingAnswerIndex = updatedAnswers.findIndex(a => a.questionId === currentQuestion)
    
    if (existingAnswerIndex !== -1) {
      updatedAnswers[existingAnswerIndex] = newAnswer
    } else {
      updatedAnswers.push(newAnswer)
    }
    
    setAnswers(updatedAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      setShowError(false)

      const response = await fetch('/api/analyze-career-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze test results')
      }

      const data = await response.json()
      setResult(data.result)
    } catch (error) {
      console.error('Error submitting test:', error)
      setShowError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRetake = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
  }

  if (result) {
    return <TestResult result={result} onRetake={handleRetake} />
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const currentAnswer = answers.find(a => a.questionId === currentQuestion)?.answer

  return (
    <>
      <NotificationToast
        isOpen={showError}
        onClose={() => setShowError(false)}
        message="Произошла ошибка при обработке результатов. Пожалуйста, попробуйте позже."
        type="error"
      />

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Вопрос {currentQuestion + 1} из {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <TestQuestion
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              isLast={currentQuestion === questions.length - 1}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              selectedAnswer={currentAnswer}
            />
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentQuestion === 0 || isSubmitting}
            className="flex items-center text-gray-600"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>

          {currentQuestion === questions.length - 1 && currentAnswer && (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              {isSubmitting ? 'Анализируем...' : 'Получить результаты'}
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
