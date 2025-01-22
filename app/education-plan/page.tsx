"use client"

import { useRouter } from "next/navigation"
import { ContactFooter } from "@/components/contact-footer"
import { ChevronRight, ArrowLeft, Clock, Calendar, Users, BookOpen, Target, CheckCircle } from "lucide-react"

export default function EducationPlanPage() {
  const router = useRouter()

  const stages = [
    {
      title: "Базовый этап",
      duration: "2 месяца",
      description: "Формирование фундаментальных знаний и навыков",
      topics: [
        "Основы программирования",
        "Алгоритмы и структуры данных",
        "Компьютерные науки",
        "Математические основы",
      ],
    },
    {
      title: "Специализация",
      duration: "4 месяца",
      description: "Углубленное изучение выбранного направления",
      topics: ["Профильные технологии", "Практические проекты", "Работа с реальными задачами", "Командная разработка"],
    },
    {
      title: "Стажировка",
      duration: "3 месяца",
      description: "Практическое применение полученных знаний",
      topics: [
        "Работа над проектами",
        "Менторство от специалистов",
        "Подготовка к трудоустройству",
        "Формирование портфолио",
      ],
    },
    {
      title: "Трудоустройство",
      duration: "3 месяца",
      description: "Поддержка в начале карьеры",
      topics: [
        "Помощь в поиске работы",
        "Подготовка к собеседованиям",
        "Карьерное консультирование",
        "Сопровождение на испытательном сроке",
      ],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">План обучения</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Структурированная программа подготовки специалистов с фокусом на практические навыки
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-8">
              {stages.map((stage, index) => (
                <div key={index} className="bg-white p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-64 flex-shrink-0">
                      <div className="flex items-center gap-2 text-[#1E4FCD] mb-2">
                        <Clock className="w-5 h-5" />
                        <span className="font-bold">{stage.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                      <p className="text-gray-600">{stage.description}</p>
                    </div>
                    <div className="flex-1">
                      <div className="grid md:grid-cols-2 gap-4">
                        {stage.topics.map((topic, i) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#1E4FCD] mr-2 flex-shrink-0 mt-1" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Особенности обучения</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#1E4FCD] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
                <p className="text-gray-600">Программа обучения адаптируется под ваш уровень и цели</p>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#1E4FCD] flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Современные материалы</h3>
                <p className="text-gray-600">Актуальные технологии и реальные проекты от практикующих специалистов</p>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#1E4FCD] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Поддержка</h3>
                <p className="text-gray-600">Постоянное сопровождение от преподавателей и кураторов</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}

