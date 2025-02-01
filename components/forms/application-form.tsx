"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { createBitrixDeal } from "@/actions/bitrix24"
import { motion, AnimatePresence } from "framer-motion"
import { NotificationToast } from "@/components/ui/notification-toast"
import InputMask from 'react-input-mask'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

const successVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

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

type ApplicationFormProps = {
  isOpen: boolean
  onClose: () => void
  selectedPlan: "standard" | "preferential" | null
}

export function ApplicationForm({ isOpen, onClose, selectedPlan }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0])
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClose = () => {
    setShowNotification(false)
    setError(null)
    setPhoneNumber('')
    setSelectedCountry(COUNTRY_CODES[0])
    onClose()
  }

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = COUNTRY_CODES.find(c => c.code === e.target.value && c.country === e.target.selectedOptions[0].getAttribute('data-country'));
    if (country) {
      setSelectedCountry(country);
      setPhoneNumber('');
    }
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Проверяем валидность номера телефона
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (digitsOnly.length !== selectedCountry.length) {
      setError(`Номер телефона должен содержать ${selectedCountry.length} цифр`);
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData(event.currentTarget);
      const fullPhone = selectedCountry.code + digitsOnly;
      formData.set('phone', fullPhone)
      formData.append("type", "application")
      formData.append("plan", selectedPlan || "")
      formData.append("buttonType", "Оставить заявку")
      formData.append("pageUrl", window.location.href)

      const result = await createBitrixDeal(formData)

      setIsSubmitting(false)
      if (result.success) {
        setShowNotification(true)
        handleClose()
        setTimeout(() => {
          setShowNotification(false)
        }, 5000)
      } else {
        setError(result.message)
      }
    } catch (error) {
      setIsSubmitting(false);
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    }
  }

  const planTitles = {
    standard: "Заявка на стандартное обучение",
    preferential: "Заявка на льготное обучение",
  }

  return (
    <>
      <NotificationToast
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        message="Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время."
        type="success"
      />
      
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
              
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex justify-between items-center mb-6 sm:mb-8">
                  <motion.h2 
                    className="text-[20px] sm:text-[24px] text-[#1B324A] font-bold leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {selectedPlan ? planTitles[selectedPlan] : "Оставить заявку"}
                  </motion.h2>
                  <motion.button 
                    onClick={handleClose} 
                    className="text-gray-500 hover:text-gray-700 transition-colors p-2 -mr-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.button>
                </div>

                {isSubmitting ? (
                  <motion.div 
                    className="text-center py-4"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#4CAF50] flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2
                      }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <motion.h3 
                      className="text-[24px] font-bold mb-4 text-[#1B324A]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      Заявка отправлена!
                    </motion.h3>
                    <motion.p 
                      className="text-[16px] text-[#4A5568] mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      Мы свяжемся с вами в ближайшее время для обсуждения деталей.
                    </motion.p>
                    <motion.button
                      onClick={handleClose}
                      className="w-full bg-[#0095FF] text-white py-3 text-[16px] hover:bg-[#0080FF] transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Закрыть
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-4 sm:space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="space-y-2"
                    >
                      <label className="block text-[14px] sm:text-[16px] text-[#1B324A]">
                        Имя <span className="text-[#FF0000]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-3 sm:p-4 border border-[#E5E7EB] text-[14px] sm:text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors rounded-md"
                        placeholder="Введите ваше имя"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      className="space-y-2"
                    >
                      <label className="block text-[14px] sm:text-[16px] text-[#1B324A]">
                        Email <span className="text-[#FF0000]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 sm:p-4 border border-[#E5E7EB] text-[14px] sm:text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors rounded-md"
                        placeholder="example@mail.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="space-y-2"
                    >
                      <label className="block text-[14px] sm:text-[16px] text-[#1B324A]">
                        Телефон <span className="text-[#FF0000]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                        <div className="relative">
                          <select
                            className="w-full appearance-none p-3 sm:p-4 pr-8 border border-[#E5E7EB] text-[14px] sm:text-[16px] bg-white focus:border-[#0095FF] focus:outline-none transition-colors rounded-md"
                            value={selectedCountry.code}
                            onChange={handleCountryChange}
                          >
                            {COUNTRY_CODES.map((country) => (
                              <option 
                                key={`${country.code}-${country.country}`} 
                                value={country.code}
                                data-country={country.country}
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
                          className="w-full p-3 sm:p-4 border border-[#E5E7EB] text-[14px] sm:text-[16px] placeholder-[#A3A3A3] focus:border-[#0095FF] focus:outline-none transition-colors rounded-md"
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
                    </motion.div>

                    {error && (
                      <motion.p 
                        className="text-[#FF0000] text-[12px] sm:text-[14px] mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {error}
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1E4FCD] text-white py-3 sm:py-4 text-[14px] sm:text-[16px] hover:bg-[#1733A5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative rounded-md mt-6"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Отправка...
                        </div>
                      ) : (
                        "Отправить"
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
