"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { ContactFooter } from "@/components/contact-footer"
import { ChevronRight, ArrowLeft } from "lucide-react"

export default function EducationFormatPage() {
  const router = useRouter()

  const formats = [
    {
      title: "Материалы",
      description: [
        "Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ",
        "Продолжительность каждой, отдельно взятой лекции - до 1 минуты",
        "Выполнение тестовых и практических заданий от работодателей с первого месяца",
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    },
    {
      title: "Репетиторы",
      description: [
        "Дополнительные занятия 1 на 1 с ведущими преподавателями Технолиум",
        "Формат встречи определяется запросом студента",
        "Репетитор ведёт трудовую деятельность в IT на момент преподавания",
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    },
    {
      title: "Лекции",
      description: [
        "Живые встречи с преподавателем в одном потоке до 22 человек",
        "Выделенное время под вопрос-ответ и знакомство с другими студентами",
        "Обсуждение коммерческой составляющей профессии",
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-[#1E4FCD] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <button
              onClick={() => router.back()}
              className="flex items-center text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="mr-2" />
              Назад
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Формат обучения</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Мы предлагаем комплексный подход к обучению, сочетающий различные форматы для максимальной эффективности
            </p>
          </div>
        </section>

        {/* Formats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {formats.map((format, index) => (
                <div key={index} className="bg-white shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={format.image || "/placeholder.svg"}
                      alt={format.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{format.title}</h3>
                    <ul className="space-y-3">
                      {format.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-[#1E4FCD] flex-shrink-0 mt-1" />
                          <span className="ml-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Расписание занятий</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Будние дни</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Лекции: 19:00 - 20:30</li>
                  <li>• Практические занятия: 20:45 - 22:00</li>
                  <li>• Консультации с преподавателем: по договоренности</li>
                </ul>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Выходные дни</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Интенсивы: 10:00 - 17:00</li>
                  <li>• Воркшопы: 12:00 - 15:00</li>
                  <li>• Групповые проекты: по договоренности</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}

