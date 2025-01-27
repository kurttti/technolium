'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TestQuestion } from '@/components/career-test/test-question'
import { ChevronLeft, Loader2 } from 'lucide-react'
import { NotificationToast } from '../notification-toast'

type Answer = {
  questionId: number
  answer: string
}

type Props = {
  onSuccess?: () => void
}

const questions = [
  {
    id: 0,
    text: 'Ваш возраст',
    options: [
      'До 18 лет',
      '18-24 года',
      '25-34 года',
      '35-44 года',
      'От 45 лет'
    ]
  },
  {
    id: 1,
    text: 'Уровень владения компьютером',
    options: [
      'Начальный (базовое использование)',
      'Средний (уверенный пользователь)',
      'Продвинутый (работа с программами)',
      'Профессиональный (системное администрирование)'
    ]
  },
  {
    id: 2,
    text: 'Желаемый доход после обучения',
    options: [
      'От 60 000 ₽',
      'От 90 000 ₽',
      'От 120 000 ₽',
      'От 150 000 ₽',
      'От 200 000 ₽'
    ]
  },
  {
    id: 3,
    text: 'Ваша текущая сфера деятельности',
    options: [
      'Гуманитарные науки',
      'Физико-математические науки',
      'Биология/химия',
      'Ручной труд/производство',
      'Студент',
      'Другое'
    ]
  },
  {
    id: 4,
    text: 'Ваше гражданство',
    options: [
      'Россия',
      'Беларусь',
      'Казахстан',
      'Узбекистан',
      'Другое'
    ]
  }
]

export function ConsultationForm({ onSuccess }: Props) {
  const [currentQuestionId, setCurrentQuestionId] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showContactForm, setShowContactForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleAnswer = (answer: string) => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const userInfo = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    }

    try {
      const response = await fetch('/api/create-consultation-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers,
          userInfo
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSuccess(true)
      onSuccess?.()
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    if (showContactForm) {
      setShowContactForm(false)
      setCurrentQuestionId(questions.length - 1)
    } else if (currentQuestionId > 0) {
      setCurrentQuestionId(currentQuestionId - 1)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto text-center bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
            <svg 
              className="w-8 h-8 text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Спасибо за заявку!</h2>
          <p className="text-lg text-gray-600">
            Ваш персональный карьерный консультант с вами свяжется в ближайшее время
          </p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6">
          <p className="text-sm text-blue-700">
            Мы поможем вам:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-blue-600">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Подобрать оптимальную программу обучения
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Составить индивидуальный план развития
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Ответить на все ваши вопросы
            </li>
          </ul>
        </div>
      </motion.div>
    )
  }

  if (showContactForm) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto p-6"
      >
        <h2 className="text-2xl font-bold mb-6">Оставьте ваши контакты</h2>
        <p className="text-gray-600 mb-6">
          Мы свяжемся с вами для подбора оптимальной программы обучения
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
                  Отправляем...
                </div>
              ) : (
                'Отправить'
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

        {error && (
          <NotificationToast
            title="Ошибка"
            description={error}
            variant="destructive"
          />
        )}
      </motion.div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ 
              width: `${((currentQuestionId + 1) / questions.length) * 100}%` 
            }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Вопрос {currentQuestionId + 1} из {questions.length}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionId}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-semibold mb-3">{questions[currentQuestionId].text}</h3>
          <div className="text-gray-600 mb-6">
            {currentQuestionId === 0 && "Выберите вашу возрастную группу"}
            {currentQuestionId === 1 && "Оцените ваш текущий уровень владения компьютером"}
            {currentQuestionId === 2 && "Укажите желаемый уровень дохода после прохождения обучения"}
            {currentQuestionId === 3 && "Укажите вашу текущую или последнюю сферу деятельности"}
            {currentQuestionId === 4 && "Выберите страну вашего гражданства"}
          </div>

          <div className="grid grid-cols-1 gap-3">
            {questions[currentQuestionId].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full py-4 px-6 text-left border rounded-lg transition-all duration-200
                  ${answers[currentQuestionId]?.answer === option
                    ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                    : 'bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {currentQuestionId > 0 && (
        <Button
          variant="ghost"
          onClick={handleBack}
          className="mt-4 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Предыдущий вопрос
        </Button>
      )}
    </div>
  )
}
