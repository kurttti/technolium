"use client"

import { useState, useEffect, useRef } from "react"
import { Footer } from "@/components/footer"
import InputMask from "react-input-mask"
import { motion } from "framer-motion"
import Image from "next/image"
import { createBitrixDeal } from "@/actions/bitrix24"
import { MailRuCounter } from "@/components/mail-ru-counter-3606079"

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

export default function WebinarPage() {
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
      formData.append("type", "webinar")  // Changed to webinar type
      formData.append("buttonType", "Регистрация на марафон")
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
        if (window._tmr) {
          window._tmr.push({ type: 'reachGoal', id: 3606079, goal: 'leadget'});
        }
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
          Регистрация на марафон "Роботы-Telegram" 31.01-02.02
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
              <div className="w-20 h-20 bg-[#0DBB0D] rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Спасибо за регистрацию!
              </h3>
              <div className="text-gray-600 mb-6">
                <p className="mb-4">Ваше приглашение будет в Telegram-боте:</p>
                <a 
                  href="https://t.me/TechnoliumWeb_bot" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 bg-[#0095FF] text-white rounded-xl hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.27-.48.74-.74 2.93-1.27 4.88-2.11 5.87-2.51 2.8-1.14 3.37-1.34 3.75-1.34.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.13-.01.2z"/>
                  </svg>
                  Перейти в Telegram-бот
                </a>
              </div>
              <div className="text-sm text-gray-500">
                После перехода, бот автоматически отправит вам приглашение
              </div>
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
                  Регистрация на марафон "Роботы-Telegram"
                </h1>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 px-2 sm:px-6">
                <div>
                  <div className="px-2 sm:px-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full h-[52px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
                      placeholder="Ваше имя"
                    />
                  </div>
                </div>
                <div>
                  <div className="px-2 sm:px-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full h-[52px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
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
                            <span className="text-gray-900 ml-1">{selectedCountry.code.slice(1)}</span>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                            {COUNTRY_CODES.map((country) => (
                              <button
                                key={country.country}
                                type="button"
                                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                                onClick={() => handleCountrySelect(country)}
                              >
                                <span className="text-gray-700">+</span>
                                <span className="text-gray-900 ml-1">{country.code.slice(1)}</span>
                                <span className="text-gray-500 ml-2">{country.country}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <InputMask
                          mask={selectedCountry.mask}
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          className={`w-full h-[52px] px-4 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:border-blue-500 bg-[#F8F8F8]`}
                          placeholder={selectedCountry.mask.replace(/9/g, '_')}
                        />
                      </div>
                    </div>
                    {error && (
                      <p className="mt-1 text-sm text-red-500">{error}</p>
                    )}
                  </div>
                </div>
                <div className="px-2 sm:px-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[52px] bg-[#0095FF] text-white rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
      <MailRuCounter />
    </div>
  )
}
