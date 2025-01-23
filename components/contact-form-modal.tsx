"use client"

import { useState, useCallback } from "react"
import { X } from "lucide-react"
import { createBitrixDeal } from "@/actions/bitrix24"
import { createPortal } from "react-dom"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  type?: "general" | "conditions" | "application"
  courseInfo?: {
    title: string
    price: string
    duration: string
  }
}

export function ContactFormModal({ isOpen, onClose, type = "general", courseInfo }: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClose = useCallback(() => {
    setIsSubmitted(false)
    onClose()
  }, [onClose])

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose()
      }
    },
    [handleClose],
  )

  const titles = {
    general: "Связаться с нами",
    conditions: "Запрос условий",
    application: courseInfo?.title ? `Запись на курс: ${courseInfo.title}` : "Оставить заявку",
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.target as HTMLFormElement)

    // Добавляем информацию о курсе, если она есть
    if (courseInfo) {
      formData.append("courseTitle", courseInfo.title)
      formData.append("coursePrice", courseInfo.price)
      formData.append("courseDuration", courseInfo.duration)
    }

    formData.append("type", type)
    const result = await createBitrixDeal(formData)

    setIsSubmitting(false)
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.message)
    }
  }

  if (!isOpen) return null

  const modalContent = (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white p-8 max-w-md w-full m-4 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1B324A]">{titles[type]}</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#4CAF50] flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1B324A]">Заявка отправлена!</h3>
            <p className="text-[#4A5568] mb-8">Мы свяжемся с вами в ближайшее время для обсуждения деталей.</p>
            <button
              onClick={handleClose}
              className="w-full bg-[#0095FF] text-white py-3 rounded-none hover:bg-[#0080FF] transition-colors"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {courseInfo && (
              <div className="mb-6 p-4 bg-gray-50 rounded-sm">
                <h3 className="font-medium mb-2">Информация о курсе:</h3>
                <p className="text-[#4A5568]">Название: {courseInfo.title}</p>
                <p className="text-[#4A5568]">Длительность: {courseInfo.duration}</p>
                <p className="text-[#4A5568]">Стоимость: {courseInfo.price} руб.</p>
              </div>
            )}

            <div className="mb-4">
              <label className="block mb-2 text-[#1B324A] text-left">Имя *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border border-gray-300"
                placeholder="Введите ваше имя"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-[#1B324A] text-left">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300"
                placeholder="example@mail.com"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-[#1B324A] text-left">Телефон *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full p-2 border border-gray-300"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-[#1B324A] text-left">Сообщение</label>
              <textarea
                name="message"
                rows={4}
                className="w-full p-2 border border-gray-300"
                placeholder="Ваше сообщение..."
              />
            </div>

            {error && <div className="text-red-600 mb-4">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#1E4FCD] text-white py-3 transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#1733A5]"
              }`}
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </button>
          </form>
        )}
      </div>
    </div>
  )

  // Используем портал для рендеринга модального окна в корне документа
  return typeof document !== 'undefined' 
    ? createPortal(modalContent, document.body)
    : null
}
