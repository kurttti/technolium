"use client"

import { useState, useEffect, useRef } from "react"
import { Footer } from "@/components/footer"
import InputMask from "react-input-mask"
import { motion } from "framer-motion"
import Image from "next/image"
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

export default function LandingPage() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0])
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
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

  const handleCountrySelect = (country: typeof COUNTRY_CODES[0]) => {
    setSelectedCountry(country)
    setPhoneNumber('')
    setError('')
    setIsOpen(false)
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const digitsOnly = value.replace(/\D/g, '');
    setPhoneNumber(value);
    
    if (digitsOnly.length === selectedCountry.length) {
      setError('');
    } else if (digitsOnly.length > 0) {
      setError(`Номер телефона должен содержать ${selectedCountry.length} цифр`);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
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
      formData.append("type", "landing")
      formData.append("buttonType", "Льготное обучение")
      formData.append("pageUrl", window.location.href)

      // Add UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term'
      ];

      // Add all UTM parameters if they exist
      utmParams.forEach(param => {
        const value = urlParams.get(param);
        if (value) formData.append(param, value);
      });

      // Add referrer if available
      const referrer = document.referrer;
      if (referrer) formData.append('utm_referrer', referrer);

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

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <motion.div 
        className="bg-[#0095FF] py-4 sm:py-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <h2 className="text-2xl sm:text-4xl text-white px-4">
          Рады вас приветствовать в Технолиум
        </h2>
      </motion.div>
      <main className="relative flex-1">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <Image
            src="/background-landing.png"
            alt="Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-6 sm:py-12 h-full">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#0DBB0D] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-2xl font-medium text-gray-900 mb-2">Спасибо за заявку!</div>
              <p className="text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto bg-white p-4 sm:p-8 rounded-2xl shadow-lg relative z-10"
            >
              <div className="mb-6 sm:mb-8 text-center px-2 sm:px-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Заявка на вступительное интервью
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  Заявка рассматривается в течение 1 рабочего дня.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 px-2 sm:px-6">
                <div>
                  <div className="px-2 sm:px-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="px-2 sm:px-4">
                    <div className="flex gap-2">
                      <div className="relative shrink-0" ref={selectRef}>
                        <button
                          type="button"
                          className="h-[52px] flex items-center justify-between px-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-sm bg-[#F8F8F8] whitespace-nowrap"
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
                          <div className="absolute z-10 w-[200px] mt-1 bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden top-full">
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
                      <InputMask
                        mask={selectedCountry.mask}
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        className="flex-1 min-w-0 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-sm"
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
                </div>

                <div>
                  <div className="px-2 sm:px-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="px-2 sm:px-4">
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-sm"
                      placeholder="Ваш e-mail"
                    />
                  </div>
                </div>

                <div>
                  <div className="px-2 sm:px-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="px-2 sm:px-4">
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-sm"
                      placeholder="Ваше имя"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <div className="flex justify-center px-2 sm:px-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 sm:px-12 bg-[#1E4FCD] text-white py-3 sm:py-4 rounded-xl hover:bg-[#1E4FCD]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
