"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ContactFormModal } from "./contact-form-modal"
import { EmailButton } from "./email-button"

export function ContactFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <footer>
      <div className="w-full bg-[#0095FF] py-6">
        <h2 className="text-2xl font-bold text-white text-center">Вопросы и предложения</h2>
      </div>

      <div className="bg-[#F8F8F8] py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-[#1B324A] text-2xl md:text-3xl font-bold mb-4">
            В случае возникновения вопросов,
            <br className="hidden md:inline" />
            напишите нам на электронную почту
          </h3>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Письма рассматриваются в течение 2х (двух) рабочих дней. Вы можете оставить заявку на звонок или позвонить
            на горячую линию.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-[#1E4FCD] text-[#1E4FCD] px-6 md:px-8 py-3 hover:bg-[#1E4FCD] hover:text-white transition-colors whitespace-nowrap text-sm md:text-base rounded-none"
            >
              Оставить заявку
            </button>
            <EmailButton variant="primary" className="text-sm md:text-base py-3 rounded-none" />
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-16">
        {" "}
        {/* Removed max-w-7xl */}
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footerlogo-NLvQaEQZ1RQ0WrvSja42PYCANeUhJf.png"
              alt="Технолиум"
              width={311}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-xl mb-4">Направления</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/specialties/machine-learning" className="text-gray-600 hover:text-gray-900">
                  Машинное обучение
                </Link>
              </li>
              <li>
                <Link href="/specialties/software-testing" className="text-gray-600 hover:text-gray-900">
                  Автоматизация тестирования ПО
                </Link>
              </li>
              <li>
                <Link href="/specialties/information-security" className="text-gray-600 hover:text-gray-900">
                  Информационная безопасность
                </Link>
              </li>
              <li>
                <Link href="/specialties/web-development" className="text-gray-600 hover:text-gray-900">
                  Серверная веб-разработка
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-xl mb-4">Об Университете</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/education-format" className="text-gray-600 hover:text-gray-900">
                  Формат обучения
                </Link>
              </li>
              <li>
                <Link href="/education-plan" className="text-gray-600 hover:text-gray-900">
                  План обучения
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="general" />
    </footer>
  )
}

