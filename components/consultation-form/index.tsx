'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TestQuestion } from '@/components/career-test/test-question'
import { ChevronLeft, Loader2 } from 'lucide-react'
import { NotificationToast } from '../notification-toast'
import InputMask from "react-input-mask"
import { createBitrixDeal } from "@/actions/bitrix24"

const COUNTRY_CODES = [
  { code: '+7', country: 'Россия', mask: '(999) 999-99-99', length: 10 },
  { code: '+7', country: 'Казахстан', mask: '(999) 999-99-99', length: 10 },
  { code: '+375', country: 'Беларусь', mask: '(99) 999-99-99', length: 9 },
  { code: '+374', country: 'Армения', mask: '99 999-999', length: 8 },
  { code: '+992', country: 'Таджикистан', mask: '(99) 999-99-99', length: 9 },
  { code: '+993', country: 'Туркменистан', mask: '(99) 999-99-99', length: 8 },
  { code: '+996', country: 'Киргизия', mask: '(999) 999-999', length: 9 },
  { code: '+998', country: 'Узбекистан', mask: '(99) 999-99-99', length: 9 },
];

type Answer = {
  questionId: number
  answer: string
}

interface UtmParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
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
  const [utmParams, setUtmParams] = useState<UtmParams>({})
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0])
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const utms: UtmParams = {}
      
      const utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
      utmFields.forEach(field => {
        const value = urlParams.get(field)
        if (value) {
          utms[field as keyof UtmParams] = value
        }
      })

      setUtmParams(utms)
    }
  }, [])

  const handleCountrySelect = (country: typeof COUNTRY_CODES[0]) => {
    setSelectedCountry(country)
    setPhoneNumber('')
    setError(null)
    setIsOpen(false)
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const digitsOnly = value.replace(/\D/g, '');
    setPhoneNumber(value);
    
    if (digitsOnly.length === selectedCountry.length) {
      setError(null);
    } else if (digitsOnly.length > 0) {
      setError(`Номер телефона должен содержать ${selectedCountry.length} цифр`);
    } else {
      setError(null);
    }
  }

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
    
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (digitsOnly.length !== selectedCountry.length) {
      setError(`Номер телефона должен содержать ${selectedCountry.length} цифр`);
      return;
    }

    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData(event.currentTarget)
      const fullPhone = selectedCountry.code + digitsOnly;
      formData.set('phone', fullPhone)
      formData.append("type", "consultation")
      formData.append("buttonType", "Вступительный тест")
      formData.append("pageUrl", window.location.href)

      // Добавляем результаты опроса как комментарий
      const surveyResults = answers.map(answer => 
        `${questions[answer.questionId].text}: ${answer.answer}`
      ).join('\n')
      formData.append("message", surveyResults)

      // Добавляем UTM метки с правильными именами
      if (utmParams.utm_source) formData.append("utm_source", utmParams.utm_source)
      if (utmParams.utm_medium) formData.append("utm_medium", utmParams.utm_medium)
      if (utmParams.utm_campaign) formData.append("utm_campaign", utmParams.utm_campaign)
      if (utmParams.utm_content) formData.append("utm_content", utmParams.utm_content)
      if (utmParams.utm_term) formData.append("utm_term", utmParams.utm_term)

      // Логируем данные перед отправкой
      console.log('Отправляем данные в Bitrix24:')
      console.log('UTM метки:', utmParams)
      console.log('Результаты опроса:', surveyResults)
      console.log('Телефон:', fullPhone)
      formData.forEach((value, key) => {
        console.log(`${key}:`, value)
      })

      const result = await createBitrixDeal(formData)
      console.log('Ответ от Bitrix24:', result)

      if (result.success) {
        setSuccess(true)
        onSuccess?.()
      } else {
        console.error('Ошибка от Bitrix24:', result.message)
        setError(result.message)
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
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
        className="w-full max-w-xl mx-auto text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8"
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
        <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
          <p className="text-sm text-blue-700 mb-3">
            Мы поможем вам:
          </p>
          <ul className="space-y-3 text-sm text-blue-600">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Подобрать оптимальную программу обучения</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Составить индивидуальный план развития</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Ответить на все ваши вопросы</span>
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
              className="w-full h-[52px] px-4 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full h-[52px] px-4 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон
            </label>
            <div className="flex gap-2">
              <div className="relative shrink-0" ref={selectRef}>
                <button
                  type="button"
                  className="h-[52px] flex items-center justify-between px-3 border border-gray-300 focus:outline-none focus:border-blue-500 text-sm bg-[#F8F8F8] whitespace-nowrap"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex items-center">
                    <span className="text-gray-700">+</span>
                    <span className="ml-0.5">{selectedCountry.code.replace('+', '')}</span>
                  </div>
                  <svg className="h-4 w-4 text-gray-700 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </button>
                
                {isOpen && (
                  <div className="absolute z-10 w-[200px] mt-1 bg-white border border-gray-300 shadow-lg">
                    {COUNTRY_CODES.map((country) => (
                      <button
                        key={`${country.code}-${country.country}`}
                        type="button"
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 focus:outline-none text-sm flex items-center space-x-2"
                        onClick={() => handleCountrySelect(country)}
                      >
                        <span className="text-gray-700">{country.code}</span>
                        <span className="text-gray-500">{country.country}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <InputMask
                  id="phone"
                  mask={selectedCountry.mask}
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={`w-full h-[52px] px-4 border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-900 text-base bg-white ${
                    error ? 'border-red-500' : ''
                  }`}
                  placeholder="(999) 999-99-99"
                  required
                />
              </div>
            </div>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
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
            message={error}
            type="error"
            isOpen={!!error}
            onClose={() => setError(null)}
          />
        )}
      </motion.div>
    )
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-2 bg-gray-200 rounded-full overflow-hidden"
        >
          <motion.div 
            className="h-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ 
              width: `${((currentQuestionId + 1) / questions.length) * 100}%` 
            }}
            transition={{ 
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-2 text-sm text-gray-600"
        >
          Вопрос {currentQuestionId + 1} из {questions.length}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionId}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl font-semibold mb-3"
          >
            {questions[currentQuestionId].text}
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-gray-600 mb-6"
          >
            {currentQuestionId === 0 && "Выберите вашу возрастную группу"}
            {currentQuestionId === 1 && "Оцените ваш текущий уровень владения компьютером"}
            {currentQuestionId === 2 && "Укажите желаемый уровень дохода после прохождения обучения"}
            {currentQuestionId === 3 && "Укажите вашу текущую или последнюю сферу деятельности"}
            {currentQuestionId === 4 && "Выберите страну вашего гражданства"}
          </motion.div>

          <div className="grid grid-cols-1 gap-3">
            {questions[currentQuestionId].options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: 0.2 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onClick={() => handleAnswer(option)}
                className={`w-full py-4 px-6 text-left border rounded-lg transition-all duration-200
                  ${answers[currentQuestionId]?.answer === option
                    ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                    : 'bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                  }`}
              >
                {option}
              </motion.button>
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
