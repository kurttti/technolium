"use client"

import { useState } from "react"
import { ApplicationForm } from "./application-form"

export function AdmissionPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "preferential" | null>(null)

  const openModal = (plan: "standard" | "preferential") => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <section className="w-full pb-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 mb-0">
        <h2 className="text-4xl font-bold text-center mb-16 pt-16">План приема</h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-0">
          {/* Standard Education Card */}
          <div className="border-2 border-[#1E4FCD] p-8 rounded-sm flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#1E4FCD]">Стандартное обучение</h3>

            <ul className="space-y-4 mb-8">
              <li>Полный список специальностей</li>
              <li>Возможность проведения консультации для выбора направления</li>
              <li>Упрощённое заключение договора</li>
              <li>Диплом на базе высшего/средне-специального образования</li>
            </ul>

            <p className="mb-8 font-medium">
              Приобретение доступно по заявке
              <br />
              на звонок с менеджером по продажам
            </p>

            <button
              onClick={() => openModal("standard")}
              className="bg-[#1E4FCD] text-white px-8 py-3 hover:bg-[#1733A5] transition-colors mt-auto w-full"
            >
              Оставить заявку
            </button>
          </div>

          {/* Preferential Education Card */}
          <div className="bg-[#1E4FCD] text-white p-8 rounded-sm flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-white">Льготное обучение</h3>

            <ul className="space-y-4 mb-8">
              <li>Компенсация до 55% от стоимости обучения</li>
              <li>
                Тестирование с менеджером приёма
                <br />
                <span className="text-sm">для определения в группу</span>
              </li>
              <li>
                Ограниченный выбор специальностей
                <br />
                <span className="text-sm">(уточнить у менеджера приёма)</span>
              </li>
              <li>
                Диплом на базе высшего/
                <br />
                средне-специального образования
              </li>
              <li>Упрощённое заключение договора</li>
            </ul>

            <button
              onClick={() => openModal("preferential")}
              className="bg-white text-[#1E4FCD] px-8 py-3 hover:bg-gray-100 transition-colors mt-auto w-full"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>

      <ApplicationForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPlan={selectedPlan} />
    </section>
  )
}

