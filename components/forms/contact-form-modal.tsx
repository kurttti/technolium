"use client"

import { useState, useCallback } from "react"
import { X } from "lucide-react"
import { createBitrixDeal } from "@/actions/bitrix24"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import InputMask from "react-input-mask"

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

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  type?: "general" | "conditions" | "application"
  courseInfo?: {
    title: string
    price: string
    duration: string
  }
  submitButtonProps?: {
    className?: string
  }
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export function ContactFormModal({ isOpen, onClose, type = "general", courseInfo, submitButtonProps }: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0])
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleClose = useCallback(() => {
    onClose()
    // Reset form state after animation completes
    setTimeout(() => {
      setIsSuccess(false)
      setError(null)
      setPhoneNumber('')
    }, 300)
  }, [onClose])

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Удаляем все нецифровые символы для проверки длины
    const digitsOnly = value.replace(/\D/g, '');
    
    setPhoneNumber(value);
    
    // Проверяем длину только цифр
    if (digitsOnly.length === selectedCountry.length) {
      setError('');
    } else if (digitsOnly.length > 0) {
      setError(`Номер телефона должен содержать ${selectedCountry.length} цифр`);
    }
  }

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const code = event.target.value;
    const country = COUNTRY_CODES.find((c) => c.code === code);
    if (country) {
      setSelectedCountry(country);
      setPhoneNumber(''); // Сбрасываем номер при смене страны
      setError('');
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Проверяем валидность номера телефона
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (digitsOnly.length !== selectedCountry.length) {
      setError(`Номер телефона должен содержать ${selectedCountry.length} цифр`);
      return;
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const fullPhone = selectedCountry.code + digitsOnly;
      formData.set('phone', fullPhone)
      
      if (type === "conditions") {
        formData.append("type", "conditions")
        formData.append("buttonType", "Условия поступления")
      } else if (type === "application") {
        formData.append("type", "application")
        formData.append("buttonType", "Оставить заявку")
        if (courseInfo) {
          formData.append("courseTitle", courseInfo.title)
          formData.append("coursePrice", courseInfo.price)
          formData.append("courseDuration", courseInfo.duration)
        }
      } else {
        formData.append("type", "general")
        formData.append("buttonType", "Общая форма")
      }

      formData.append("pageUrl", window.location.href)

      const result = await createBitrixDeal(formData)

      if (result.success) {
        setIsSuccess(true)
      } else {
        setError(result.message)
      }
    } catch (error) {
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (typeof window === "undefined") return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4 overflow-y-auto"
          onClick={handleClose}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg relative my-8 sm:my-0"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
          >
            {/* Добавляем полоску для свайпа на мобильных */}
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden mt-2" />
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {isSuccess ? "Заявка отправлена!" : 
                   type === "conditions" ? "Условия поступления" : 
                   type === "application" && courseInfo ? `Заявка на курс "${courseInfo.title}"` : 
                   "Оставить заявку"}
                </h2>
                <button 
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {isSuccess ? (
                <motion.div 
                  className="text-center py-4"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Мы свяжемся с вами в ближайшее время!
                  </p>
                  <button
                    onClick={handleClose}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Закрыть
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Введите ваше имя"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                      <div className="relative">
                        <select
                          className="w-full appearance-none p-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          value={selectedCountry.code}
                          onChange={handleCountryChange}
                        >
                          {COUNTRY_CODES.map((country) => (
                            <option 
                              key={`${country.code}-${country.country}`} 
                              value={country.code}
                              className="py-1"
                            >
                              {country.country} {country.code}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                      <InputMask
                        mask={selectedCountry.mask}
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder={selectedCountry.mask.replace(/9/g, '_')}
                        required
                      >
                        {(inputProps: any) => (
                          <input
                            {...inputProps}
                            type="tel"
                            name="phone"
                            inputMode="numeric"
                          />
                        )}
                      </InputMask>
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={submitButtonProps?.className || "w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Отправка...
                      </div>
                    ) : (
                      "Отправить"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
