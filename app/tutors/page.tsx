"use client"

import { ContactFooter } from "@/components/contact-footer"
import { ChevronRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function TutorsPage() {
  const router = useRouter()
  const benefits = [
    'Дополнительные занятия 1 на 1 с ведущими преподавателями "Технолиум"',
    "Формат встречи определяется запросом студента",
    "Репетитор ведёт трудовую деятельность в IT на момент преподавания",
    "Индивидуальный подход к каждому студенту",
    "Гибкий график занятий",
    "Возможность выбора преподавателя",
  ]

  const formats = [
    {
      title: "Онлайн-консультации",
      description:
        "Индивидуальные занятия через видеосвязь с возможностью демонстрации экрана и совместной работы над кодом",
    },
    {
      title: "Код-ревью",
      description: "Детальный разбор вашего кода с рекомендациями по улучшению и исправлению ошибок",
    },
    {
      title: "Практические занятия",
      description: "Работа над реальными проектами под руководством опытного наставника",
    },
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
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Репетиторы</h1>
          </div>
          <p className="text-xl max-w-3xl pb-8">Индивидуальный подход к обучению с опытными специалистами</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <section className="mb-16 pt-16">
          <h2 className="text-2xl font-bold mb-8">Преимущества работы с репетитором</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
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

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Форматы занятий</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <div key={index} className="bg-white p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">{format.title}</h3>
                <p className="text-gray-600">{format.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8">Как проходят занятия</h2>
          <div className="bg-white p-8 shadow-lg">
            <ol className="space-y-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1E4FCD] text-white rounded-full flex items-center justify-center mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-bold mb-2">Выбор репетитора</h3>
                  <p className="text-gray-600">
                    Вы выбираете репетитора из нашей базы специалистов, основываясь на их профиле и специализации
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1E4FCD] text-white rounded-full flex items-center justify-center mr-4">
                  2
                </span>
                <div>
                  <h3 className="font-bold mb-2">Согласование формата</h3>
                  <p className="text-gray-600">Обсуждаете удобный формат занятий и составляете график</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#1E4FCD] text-white rounded-full flex items-center justify-center mr-4">
                  3
                </span>
                <div>
                  <h3 className="font-bold mb-2">Проведение занятий</h3>
                  <p className="text-gray-600">
                    Занимаетесь в выбранном формате, получаете обратную связь и рекомендации
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}

