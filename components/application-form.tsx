"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { createBitrixDeal } from "@/actions/bitrix24"

type ApplicationFormProps = {
  isOpen: boolean
  onClose: () => void
  selectedPlan: "standard" | "preferential" | null
}

export function ApplicationForm({ isOpen, onClose, selectedPlan }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClose = () => {
    setIsSubmitted(false)
    setError(null)
    onClose()
  }

  const planTitles = {
    standard: "Заявка на стандартное обучение",
    preferential: "Заявка на льготное обучение",
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.target as HTMLFormElement)

    // Добавляем дополнительную информацию
    formData.append("type", "application")
    formData.append("plan", selectedPlan || "")
    formData.append("buttonType", "Оставить заявку")
    formData.append("pageUrl", window.location.href)

    const result = await createBitrixDeal(formData)

    setIsSubmitting(false)
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.message)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleClose}>
      <div
        className="bg-white p-8 rounded-none max-w-md w-full m-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{selectedPlan ? planTitles[selectedPlan] : "Оставить заявку"}</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#4CAF50] flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Заявка отправлена!</h3>
            <p className="text-gray-600 mb-8">Мы свяжемся с вами в ближайшее время для обсуждения деталей.</p>
            <button
              onClick={handleClose}
              className="w-full bg-[#0095FF] text-white py-3 rounded-none hover:bg-[#0080FF] transition-colors"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block mb-2">Имя *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-none"
                placeholder="Введите ваше имя"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-none"
                placeholder="example@mail.com"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Телефон *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full p-2 border border-gray-300 rounded-none"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Сообщение</label>
              <textarea
                name="message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-none"
                placeholder="Ваше сообщение..."
              />
            </div>

            {error && <div className="text-red-600 mb-4">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#1E4FCD] text-white py-3 rounded-none transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#1733A5]"
              }`}
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </button>
          </form>
        )}
      </div>
      <style jsx>{`
        @media (max-height: 600px) {
          .max-h-[90vh] {
            max-height: 100vh;
          }
        }
      `}</style>
    </div>
  )
}

