"use client"

import { useState } from "react"
import Link from "next/link"
import { ConditionsModal } from "./conditions-modal"

export function Regions() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechnoBack-1ylGEDVIuuHOSGweH5s8cAsOpMl7ud.png')] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechnoBack-1ylGEDVIuuHOSGweH5s8cAsOpMl7ud.png')`,
        }}
      />

      {/* White content box */}
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="bg-white p-12">
          <h2 className="text-[#1B324A] text-4xl font-bold text-center mb-6">
            Регионы трудоустройства
            <br />и условия труда
          </h2>

          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Для получения информации об установленных правилах взаимодействия выпускника и первоочередного работодателя
            оставьте заявку.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0095FF] text-white px-8 py-3 hover:bg-[#0080FF] transition-colors relative group whitespace-nowrap text-sm sm:text-base rounded-none"
            >
              Запрос условий
            </button>
            <Link
              href="/program"
              className="border border-[#1E4FCD] text-[#1E4FCD] px-8 py-3 hover:bg-[#1E4FCD] hover:text-white transition-colors relative group whitespace-nowrap text-sm sm:text-base rounded-none"
            >
              Узнать программу
            </Link>
          </div>
        </div>
      </div>

      <ConditionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

