"use client"

import { useState } from "react"
import { Calendar, Target, GraduationCap } from "lucide-react"
import { ApplicationModal } from "./application-modal"

interface CourseDetailsProps {
  duration: string
  level: string
  price: string
  className?: string
  courseTitle: string
}

export function CourseDetails({ duration, level, price, className = "", courseTitle }: CourseDetailsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={`bg-white p-6 shadow-lg ${className}`}>
      <h2 className="text-xl font-bold mb-6">Детали курса</h2>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-[#1E4FCD]" />
          <span>Длительность: {duration}</span>
        </div>
        <div className="flex items-center gap-3">
          <Target className="w-5 h-5 text-[#1E4FCD]" />
          <span>Уровень: {level}</span>
        </div>
        <div className="flex items-center gap-3">
          <GraduationCap className="w-5 h-5 text-[#1E4FCD]" />
          <span>Диплом о профпереподготовке</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Стоимость</h3>
        <div className="text-3xl font-bold text-[#1E4FCD]">{price} руб.</div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-[#1E4FCD] text-white py-3 px-6 hover:bg-[#1733A5] transition-colors"
      >
        Записаться на курс
      </button>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseInfo={{
          title: courseTitle,
          price,
          duration,
        }}
      />
    </div>
  )
}

