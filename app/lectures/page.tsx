"use client"

import { ContactFooter } from "@/components/contact-footer"
import { ChevronRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { BookOpen } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LecturesPage() {
  const router = useRouter()
  const features = [
    "Живые встречи с преподавателем в одном потоке до 22 человек",
    'Выделенное время под "вопрос-ответ" и знакомство с другими студентами',
    "Обсуждение коммерческой составляющей профессии",
    "Разбор реальных кейсов и задач",
    "Нетворкинг с коллегами по обучению",
    "Возможность получить мгновенную обратную связь",
  ]

  const schedule = [
    {
      time: "10:00 - 11:30",
      activity: "Лекционная часть",
      description: "Изучение новой темы, разбор теоретического материала",
    },
    {
      time: "11:30 - 11:45",
      activity: "Перерыв",
      description: "Время для кофе и неформального общения",
    },
    {
      time: "11:45 - 13:00",
      activity: "Практическая часть",
      description: "Выполнение практических заданий, работа над проектами",
    },
    {
      time: "13:00 - 13:30",
      activity: "Вопросы и ответы",
      description: "Обсуждение сложных моментов, консультация с преподавателем",
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
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Лекции</h1>
          </div>
          <p className="text-xl max-w-3xl pb-8">Живые встречи с преподавателями для углубленного изучения материала</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <section className="mb-16 pt-16">
          <h2 className="text-2xl font-bold mb-12">Особенности лекций</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#1E4FCD] flex-shrink-0 mt-1" />
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Расписание типовой лекции</h2>
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[#1E4FCD] font-bold md:w-48 flex-shrink-0">{item.time}</span>
                  <div>
                    <h3 className="font-bold mb-2">{item.activity}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8">Подготовка к лекции</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">До лекции</h3>
              <ul className="space-y-2">
                <li>• Ознакомиться с материалами по теме</li>
                <li>• Подготовить вопросы</li>
                <li>• Установить необходимое ПО</li>
              </ul>
            </div>
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">После лекции</h3>
              <ul className="space-y-2">
                <li>• Выполнить домашнее задание</li>
                <li>• Закрепить материал на практике</li>
                <li>• Обсудить сложные моменты с группой</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}

