"use client"
import Image from "next/image"
import { ContactFooter } from "@/components/contact-footer"
import { ApplicationButton } from "@/components/application-button"
import {
  BookOpen,
  Clock,
  Users,
  Target,
  CheckCircle,
  GraduationCap,
  Calendar,
  BrainCircuit,
  Code,
  Briefcase,
} from "lucide-react"

export default function ProgramPage() {
  const stats = [
    { value: "2 года", label: "Длительность обучения" },
    { value: "92%", label: "Трудоустройство" },
    { value: "50+", label: "Преподавателей" },
    { value: "24/7", label: "Доступ к материалам" },
  ]

  const timeline = [
    {
      title: "Базовый этап",
      duration: "6 месяцев",
      items: ["Основы программирования", "Алгоритмы и структуры данных", "Компьютерные науки", "Математические основы"],
    },
    {
      title: "Специализация",
      duration: "8 месяцев",
      items: [
        "Углубленное изучение направления",
        "Работа с современными технологиями",
        "Практические проекты",
        "Командная работа",
      ],
    },
    {
      title: "Стажировка",
      duration: "4 месяца",
      items: [
        "Работа над реальными проектами",
        "Менторство от специалистов",
        "Подготовка к трудоустройству",
        "Формирование портфолио",
      ],
    },
    {
      title: "Трудоустройство",
      duration: "6 месяцев",
      items: [
        "Помощь в поиске работы",
        "Подготовка к собеседованиям",
        "Карьерное консультирование",
        "Поддержка на испытательном сроке",
      ],
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Персональный ментор и адаптированная программа обучения",
    },
    {
      icon: BrainCircuit,
      title: "Практикующие специалисты",
      description: "Преподаватели из ведущих IT-компаний",
    },
    {
      icon: Code,
      title: "Современные технологии",
      description: "Актуальные инструменты и методологии разработки",
    },
    {
      icon: Briefcase,
      title: "Гарантия трудоустройства",
      description: "Помощь в поиске работы и поддержка при трудоустройстве",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1E4FCD] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Программа обучения</h1>
          <p className="text-xl max-w-3xl">
            Комплексная подготовка IT-специалистов с фокусом на практические навыки и реальные проекты
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-[#1E4FCD] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Структура программы</h2>
          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1E4FCD] text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {phase.duration}
                      </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#1E4FCD] mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества обучения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-[#1E4FCD] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать свой путь в IT?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Присоединяйтесь к нашей программе и получите необходимые навыки для успешной карьеры
          </p>
          <ApplicationButton />
        </div>
      </section>

      <ContactFooter />
    </div>
  )
}

