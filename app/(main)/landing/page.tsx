"use client"

import { useState } from "react"
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

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const code = event.target.value;
    const country = COUNTRY_CODES.find((c) => c.code === code);
    if (country) {
      setSelectedCountry(country);
      setPhoneNumber('');
      setError('');
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
    <div className="h-screen flex flex-col overflow-hidden">
      <motion.div 
        className="bg-[#0095FF] py-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <h2 className="text-4xl text-white">
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 h-full">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-center relative z-10"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h2>
              <p className="text-gray-600">
                Мы свяжемся с вами в ближайшее время для обсуждения деталей обучения.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg relative z-10"
            >
              <div className="mb-8 text-center px-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Оставьте заявку для связи с приемным менеджером
                </h1>
                <p className="text-base text-gray-600">
                  Заявка рассматривается в течение 1 рабочего дня.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 px-6">
                <div>
                  <div className="px-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                      <div className="relative">
                        <select
                          className="w-full appearance-none p-4 pr-8 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
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
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
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
                  <div className="px-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="px-4">
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                      placeholder="Ваш e-mail"
                    />
                  </div>
                </div>

                <div>
                  <div className="px-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="px-4">
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <div className="flex justify-center px-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-12 bg-[#1E4FCD] text-white py-4 rounded-xl hover:bg-[#1E4FCD]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
