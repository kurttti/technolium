'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { createBitrixDeal } from '@/actions/bitrix24'
import { NotificationToast } from './notification-toast'
import InputMask from 'react-input-mask'

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

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || 'XXXXXXXX'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Имя должно содержать минимум 2 символа',
  }),
  email: z.string().email({
    message: 'Пожалуйста, введите корректный email',
  }),
  phone: z.string().min(1, {
    message: 'Пожалуйста, введите номер телефона',
  }),
  message: z.string().optional(),
})

export function LeadForm() {
  const [showNotification, setShowNotification] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0])
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Удаляем все нецифровые символы для проверки длины
    const digitsOnly = value.replace(/\D/g, '');
    
    setPhoneNumber(value);
    form.setValue('phone', selectedCountry.code + digitsOnly);
    
    // Проверяем длину только цифр
    if (digitsOnly.length === selectedCountry.length) {
      setPhoneError(null);
    } else if (digitsOnly.length > 0) {
      setPhoneError(`Номер телефона должен содержать ${selectedCountry.length} цифр`);
    }
  }

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const code = event.target.value;
    const country = COUNTRY_CODES.find((c) => c.code === code);
    if (country) {
      setSelectedCountry(country);
      setPhoneNumber(''); // Сбрасываем номер при смене страны
      setPhoneError(null);
      form.setValue('phone', '');
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Проверяем валидность номера телефона
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    if (digitsOnly.length !== selectedCountry.length) {
      setPhoneError(`Номер телефона должен содержать ${selectedCountry.length} цифр`);
      return;
    }

    try {
      setIsSubmitting(true)
      setError(null)
      
      const utmParams = new URLSearchParams(window.location.search)
      const formData = new FormData()
      
      // Добавляем основные данные формы
      formData.append('name', values.name)
      formData.append('email', values.email)
      formData.append('phone', selectedCountry.code + digitsOnly)
      if (values.message) {
        formData.append('message', values.message)
      }
      
      // Добавляем тип заявки и URL страницы
      formData.append('type', 'lead')
      formData.append('buttonType', 'Оставить заявку')
      formData.append('pageUrl', window.location.href)
      
      // Добавляем UTM-метки
      formData.append('utm_source', utmParams.get('utm_source') || 'direct')
      formData.append('utm_medium', utmParams.get('utm_medium') || '')
      formData.append('utm_campaign', utmParams.get('utm_campaign') || '')
      
      // Отправляем событие в Яндекс.Метрику
      try {
        if (typeof window.ym === 'function') {
          window.ym(Number(METRIKA_ID), 'reachGoal', 'form_submit', {
            utmSource: utmParams.get('utm_source') || 'direct',
            utmMedium: utmParams.get('utm_medium'),
            utmCampaign: utmParams.get('utm_campaign'),
            referrer: document.referrer,
          });
        }
      } catch (err) {
        console.error('Ошибка отправки события в Яндекс.Метрику:', err);
      }

      // Создаем сделку в Bitrix24
      const result = await createBitrixDeal(formData)

      if (result.success) {
        form.reset()
        setPhoneNumber('')
        setShowNotification(true)
        setTimeout(() => {
          setShowNotification(false)
        }, 5000)
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Имя <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Введите ваше имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Телефон <span className="text-red-500">*</span>
                </FormLabel>
                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2">
                  <div className="relative">
                    <select
                      className="w-full appearance-none h-10 px-3 py-2 border border-input bg-background text-sm ring-offset-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
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
                  <FormControl>
                    <InputMask
                      mask={selectedCountry.mask}
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder={selectedCountry.mask.replace(/9/g, '_')}
                    >
                      {(inputProps: any) => (
                        <input
                          {...inputProps}
                          type="tel"
                          inputMode="numeric"
                        />
                      )}
                    </InputMask>
                  </FormControl>
                </div>
                {phoneError && (
                  <p className="text-sm font-medium text-destructive">{phoneError}</p>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Сообщение</FormLabel>
                <FormControl>
                  <Textarea placeholder="Введите ваше сообщение" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Отправка...
              </>
            ) : (
              'Отправить'
            )}
          </Button>
        </form>
      </Form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showNotification ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-4"
      >
        <NotificationToast
          show={showNotification}
          onClose={() => setShowNotification(false)}
          message="Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время."
          type="success"
        />
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-red-50 border border-red-200 rounded-md p-3 sm:p-4 mt-3 sm:mt-4"
        >
          <p className="text-red-600 text-center text-sm sm:text-base font-medium">
            {error}
          </p>
        </motion.div>
      )}
    </div>
  )
}
