"use client"

import { ContactFooter } from "@/components/contact-footer"
import { ChevronRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { BookOpen } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MaterialsPage() {
  const router = useRouter()
  const features = [
    {
      title: "Структурированные материалы",
      description: "Все материалы разделены на логические блоки и модули для удобного изучения",
    },
    {
      title: "Практические задания",
      description: "Каждый урок содержит практические задания для закрепления материала",
    },
    {
      title: "Доступность 24/7",
      description: "Доступ к материалам в любое удобное время с любого устройства",
    },
  ]

  const benefits = [
    "Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ",
    "Продолжительность каждой, отдельно взятой лекции - до 15 минут",
    "Выполнение тестовых и практических заданий от работодателей с первого месяца",
    "Интерактивные материалы с возможностью самопроверки",
    "Регулярные обновления контента",
    "Доступ к базе знаний и дополнительным ресурсам",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1E4FCD] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-white/80 hover:text-white transition-colors py-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </button>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-lg">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Учебные материалы</h1>
          </div>
          <p className="text-xl max-w-3xl pb-8">
            Структурированные и интерактивные материалы для эффективного обучения
          </p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Особенности обучения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Преимущества наших материалов</h2>
          <div className="bg-gray-50 p-8">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#1E4FCD] flex-shrink-0 mt-1" />
                  <span className="ml-2">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8">Формат материалов</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Видеоматериалы</h3>
              <ul className="space-y-2">
                <li>• Короткие видеолекции</li>
                <li>• Практические демонстрации</li>
                <li>• Разбор реальных кейсов</li>
              </ul>
            </div>
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Текстовые материалы</h3>
              <ul className="space-y-2">
                <li>• Конспекты лекций</li>
                <li>• Дополнительные ресурсы</li>
                <li>• Ссылки на полезные источники</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}

