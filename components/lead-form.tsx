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
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { createBitrixDeal } from '@/actions/bitrix24'

const METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || 'XXXXXXXX'

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Введите корректный email'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  message: z.string().optional(),
})

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
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

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true)
      setSubmitStatus('idle')
      setError(null)
      
      const utmParams = new URLSearchParams(window.location.search)
      const formData = new FormData()
      
      // Добавляем основные данные формы
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('message', data.message || '')
      
      // Добавляем тип заявки и URL страницы
      formData.append('type', 'lead')
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
        setSubmitStatus('success')
        form.reset()
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white shadow-lg p-4 sm:p-6 rounded-lg mx-auto max-w-md"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Оставить заявку</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Имя</FormLabel>
                <FormControl>
                  <Input 
                    className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-10 sm:h-12 text-sm sm:text-base" 
                    placeholder="Введите ваше имя" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm text-red-500 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Email</FormLabel>
                <FormControl>
                  <Input 
                    className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-10 sm:h-12 text-sm sm:text-base" 
                    type="email" 
                    placeholder="your@email.com" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm text-red-500 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Телефон</FormLabel>
                <FormControl>
                  <Input 
                    className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-10 sm:h-12 text-sm sm:text-base" 
                    placeholder="+7 (999) 999-99-99" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm text-red-500 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm sm:text-base text-gray-700">Сообщение (необязательно)</FormLabel>
                <FormControl>
                  <Textarea 
                    className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[80px] sm:min-h-[100px] text-sm sm:text-base" 
                    placeholder="Ваше сообщение..." 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm text-red-500 mt-1" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className={`w-full h-10 sm:h-12 relative ${
              isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } text-white rounded-md transition-all duration-200 ease-in-out text-sm sm:text-base`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2" size={16} />
                Отправка...
              </span>
            ) : (
              'Отправить заявку'
            )}
          </Button>
          
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-green-50 border border-green-200 rounded-md p-3 sm:p-4 mt-3 sm:mt-4"
              >
                <p className="text-green-600 text-center text-sm sm:text-base font-medium">
                  Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                </p>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
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
          </AnimatePresence>
        </form>
      </Form>
    </motion.div>
  )
}
