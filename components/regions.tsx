"use client"

import { useState } from "react"
import Link from "next/link"
import { ConditionsModal } from "./conditions-modal"
import Image from "next/image"

export function Regions() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative py-24 bg-[#1B324A]">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechnoBack-1ylGEDVIuuHOSGweH5s8cAsOpMl7ud.png"
          alt="Background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-12 shadow-xl">
          <h2 className="h2 text-[#1B324A] text-center mb-6">
            Регионы трудоустройства
            <br />и условия труда
          </h2>

          <p className="text-body text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Для получения информации об установленных правилах взаимодействия выпускника и первоочередного работодателя
            оставьте заявку.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-body-sm bg-[#0095FF] text-white px-8 py-3 hover:bg-[#0080FF] transition-colors font-medium"
            >
              Запрос условий
            </button>
            <Link
              href="/program"
              className="text-body-sm border-2 border-[#1E4FCD] text-[#1E4FCD] px-8 py-3 hover:bg-[#1E4FCD] hover:text-white transition-colors text-center font-medium"
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
