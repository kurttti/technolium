"use client"

import { useState } from "react"
import { Phone, User, MessageSquare, Loader2 } from "lucide-react"
import { createBitrixDeal } from "@/actions/bitrix24"

interface CallbackFormProps {
  onClose: () => void
}

export function CallbackForm({ onClose }: CallbackFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    formData.append("type", "callback")

    try {
      const result = await createBitrixDeal(formData)
      if (result.success) {
        setIsSubmitted(true)
        setTimeout(handleClose, 3000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError("Произошла ошибка при отправке формы")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <Phone className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Спасибо за обращение!</h3>
        <p className="text-gray-600">Мы перезвоним вам в течение 5 минут в рабочее время: 09:00 - 18:00</p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Мы рады помочь вам!</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="name"
            required
            placeholder="Ваше имя"
            className="w-full p-2 border border-gray-300 pl-10"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Ваш телефон"
            className="w-full p-2 border border-gray-300 pl-10"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <textarea
            name="message"
            placeholder="Ваше сообщение (необязательно)"
            rows={3}
            className="w-full p-2 border border-gray-300 pl-10"
          />
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full py-3 bg-[#1E4FCD] text-white transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center
          `}
        >
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Заказать звонок"}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
        </p>
      </form>
    </div>
  )
}

