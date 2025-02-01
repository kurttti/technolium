'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Input } from '@/components/ui/input'
import { NotificationToast } from '@/components/ui/notification-toast'
import InputMask from "react-input-mask"
import styles from './ApplicationFormBlock.module.css'
import { createBitrixDeal } from "@/actions/bitrix24"
import { Loader2 } from 'lucide-react'

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

interface UtmParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

interface FormData {
  name: string
  email: string
}

const ApplicationFormBlock = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  })
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0])
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [utmParams, setUtmParams] = useState<UtmParams>({})
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (digitsOnly.length !== selectedCountry.length) {
      setError(`Номер телефона должен содержать ${selectedCountry.length} цифр`);
      return;
    }

    setIsLoading(true)
    setError(null)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      
      const fullPhone = selectedCountry.code + digitsOnly;
      formDataToSend.append('phone', fullPhone)
      formDataToSend.append("type", "application")
      formDataToSend.append("buttonType", "Льготное обучение")
      formDataToSend.append("pageUrl", window.location.href)

      // Добавляем UTM метки
      if (utmParams.utm_source) formDataToSend.append("utm_source", utmParams.utm_source)
      if (utmParams.utm_medium) formDataToSend.append("utm_medium", utmParams.utm_medium)
      if (utmParams.utm_campaign) formDataToSend.append("utm_campaign", utmParams.utm_campaign)
      if (utmParams.utm_content) formDataToSend.append("utm_content", utmParams.utm_content)
      if (utmParams.utm_term) formDataToSend.append("utm_term", utmParams.utm_term)

      const result = await createBitrixDeal(formDataToSend)

      if (result.success) {
        setSuccess(true)
      } else {
        setError(result.message)
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
    } finally {
      setIsLoading(false)
    }
  }

  const toggleDropdown = () => {
    setIsOpen((prev) => {
      const newState = !prev
      if (newState && selectRef.current) {
        const rect = selectRef.current.getBoundingClientRect()
        setDropdownPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX
        })
      }
      return newState
    })
  }

  if (success) {
    return (
      <div id="application-form" className="w-full px-4 py-8">
        <div className={`max-w-[1200px] mx-auto rounded-[32px] overflow-hidden ${styles.gradientBackground}`}>
          <div className="flex flex-col items-center py-8 md:py-16 px-4 md:px-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto flex items-center justify-center mb-4">
              <svg 
                className="w-8 h-8 text-white" 
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
            <h2 className="text-[32px] md:text-[48px] mb-4 text-center tracking-wider text-white" style={{ fontFamily: 'BOWLER' }}>
              СПАСИБО ЗА ЗАЯВКУ!
            </h2>
            <p className="text-xl text-white/80 text-center max-w-[600px]">
              Ваш персональный карьерный консультант с вами свяжется в ближайшее время
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="application-form" className="w-full px-4 py-16 md:py-24">
      <div className={`max-w-[1200px] mx-auto rounded-[32px] overflow-hidden ${styles.gradientBackground}`}>
        <div className="flex flex-col items-center py-8 md:py-16 px-4 md:px-8">
          <h2 className="text-[32px] md:text-[64px] mb-2 md:mb-4 text-center tracking-wider text-white" style={{ fontFamily: 'BOWLER' }}>
            ОСТАВИТЬ ЗАЯВКУ
          </h2>
          <h3 className="text-[24px] md:text-[32px] mb-6 md:mb-8 text-center tracking-wider text-white/80" style={{ fontFamily: 'BOWLER' }}>
            НА ЛЬГОТНОЕ ОБУЧЕНИЕ
          </h3>
          
          <form onSubmit={handleSubmit} className="w-full max-w-[600px] space-y-4">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              required
              className="h-12 md:h-14 px-4 md:px-6 rounded-[18px] bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white/40 focus-visible:border-white/40 backdrop-blur-sm text-base md:text-lg"
            />

            <div className="flex gap-2">
              <div className="relative shrink-0" ref={selectRef}>
                <button
                  type="button"
                  className="h-12 md:h-14 flex items-center justify-between px-3 border border-white/20 focus:outline-none focus:border-white/40 text-sm bg-white/10 backdrop-blur-sm whitespace-nowrap rounded-[18px] text-white min-w-[90px]"
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center">
                    <span className="text-white/80">+</span>
                    <span className="ml-0.5 text-white">{selectedCountry.code.replace('+', '')}</span>
                  </div>
                  <svg className="h-4 w-4 text-white/60 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path 
                      fill="currentColor" 
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </button>
              </div>
              <div className="flex-1">
                <InputMask
                  mask={selectedCountry.mask}
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={`w-full h-12 md:h-14 px-4 md:px-6 rounded-[18px] bg-white/10 text-white placeholder:text-white/60 border-white/20 focus:border-white/40 focus:outline-none backdrop-blur-sm text-base md:text-lg ${
                    error ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="(999) 999-99-99"
                  required
                />
              </div>
            </div>
            
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
              className="h-12 md:h-14 px-4 md:px-6 rounded-[18px] bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white/40 focus-visible:border-white/40 backdrop-blur-sm text-base md:text-lg"
            />
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 md:h-14 bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:cursor-not-allowed text-white rounded-[18px] text-base md:text-lg font-medium transition-colors backdrop-blur-sm flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={18} />
                  Отправляем...
                </>
              ) : (
                'Оставить заявку'
              )}
            </button>

            <p className="text-sm text-white/60 text-center">
              Нажимая кнопку, вы соглашаетесь с нашей{' '}
              <a href="/privacy" className="text-white hover:underline">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>

      {isOpen && document.body && createPortal(
        <div className="z-50 w-[240px] mt-1 bg-[#13134E]/90 backdrop-blur-sm border border-white/20 rounded-[18px] overflow-hidden shadow-lg"
          style={{ position: 'absolute', top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          {COUNTRY_CODES.map((country) => (
            <button
              key={`${country.code}-${country.country}`}
              type="button"
              className="w-full text-left px-4 py-3 hover:bg-white/10 focus:outline-none text-sm flex items-center justify-between text-white"
              onClick={() => {
                handleCountrySelect(country)
                setIsOpen(false)
              }}
            >
              <span className="text-white">{country.country}</span>
              <span className="text-white font-medium">{country.code}</span>
            </button>
          ))}
        </div>, document.body
      )}
      {error && (
        <NotificationToast
          message={error}
          type="error"
          isOpen={!!error}
          onClose={() => setError(null)}
        />
      )}
    </div>
  )
}

export default ApplicationFormBlock
