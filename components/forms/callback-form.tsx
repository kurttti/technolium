"use client"

import { useState } from "react"
import { Phone, User, MessageSquare, Loader2 } from "lucide-react"
import { createBitrixDeal } from "@/actions/bitrix24"
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

interface CallbackFormProps {
  onClose: () => void
}

export function CallbackForm({ onClose }: CallbackFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0])
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      const formData = new FormData(e.target as HTMLFormElement)
      const fullPhone = selectedCountry.code + digitsOnly;
      formData.set('phone', fullPhone)
      formData.append("type", "callback")
      formData.append("buttonType", "Заказать звонок")
      formData.append("pageUrl", window.location.href)

      const result = await createBitrixDeal(formData)

      setIsSubmitting(false)
      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.message)
      }
    } catch (error) {
      setIsSubmitting(false)
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white w-full max-w-md rounded-lg" onClick={(e) => e.stopPropagation()}>
        {/* Добавляем полоску для свайпа на мобильных */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden mt-2" />
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {isSubmitted ? "Заявка отправлена!" : "Заказать звонок"}
            </h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-4">
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
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Имя <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Введите ваше имя"
                  />
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                  <div className="relative">
                    <select
                      className="w-full appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <InputMask
                      mask={selectedCountry.mask}
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Комментарий
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Введите ваше сообщение"
                  />
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Отправка...
                  </div>
                ) : (
                  "Отправить"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
