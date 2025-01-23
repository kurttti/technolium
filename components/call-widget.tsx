"use client"

import { useState, type MouseEvent } from "react"
import { Phone, X, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import { CallbackForm } from "./callback-form"

export function CallWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const workingHours = {
    start: "09:00",
    end: "18:00",
  }

  const isWorkingHours = () => {
    const now = new Date()
    const hours = now.getHours()
    const [startHour] = workingHours.start.split(":").map(Number)
    const [endHour] = workingHours.end.split(":").map(Number)
    return hours >= startHour && hours < endHour
  }

  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-20 sm:bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            flex items-center justify-center
            bg-[#3AA1FF] text-white
            hover:bg-[#2994FF]
            transition-all duration-300 ease-in-out
            shadow-lg
            ${isHovered ? "soft-pulse" : ""}
            h-14 w-14 rounded-full sm:w-auto sm:rounded-none sm:px-6
          `}
          style={{
            willChange: "transform, box-shadow",
            backfaceVisibility: "hidden",
          }}
          aria-label="Заказать обратный звонок"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline ml-3 font-medium">Заказать звонок</span>
        </button>

        {!isOpen && isHovered && (
          <div
            className="absolute bottom-full mb-2 right-0 bg-white shadow-lg p-4 text-sm whitespace-nowrap"
            style={{
              transition: "opacity 150ms ease-in-out",
              opacity: isHovered ? 1 : 0,
            }}
          >
            {isWorkingHours() ? (
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                <div>
                  <p className="font-medium">Мы на связи!</p>
                  <p className="text-gray-600">Готовы ответить на ваши вопросы</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <div>
                  <p className="font-medium">Нерабочее время</p>
                  <p>
                    Мы работаем с {workingHours.start} до {workingHours.end}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={handleOutsideClick}
        >
          <div
            className="relative bg-white shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            style={{
              animation: "modalEnter 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Закрыть форму"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-4 sm:p-6">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                <Image
                  src="/footerlogo.png"
                  alt="Технолиум"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, 128px"
                />
              </div>
              <CallbackForm onClose={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @media (max-height: 600px) {
          .max-h-[90vh] {
            max-height: 100vh;
          }
        }
      `}</style>
    </>
  )
}

