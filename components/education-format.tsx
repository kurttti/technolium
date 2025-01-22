import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function EducationFormat() {
  const formats = [
    {
      title: "Материалы",
      description: [
        "Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ",
        "Продолжительность каждой, отдельно взятой лекции - до 15 минут",
        "Выполнение тестовых и практических заданий от работодателей с первого месяца",
      ],
      link: "/materials",
    },
    {
      title: "Репетиторы",
      description: [
        'Дополнительные занятия 1 на 1 с ведущими преподавателями "Технолиум"',
        "Формат встречи определяется запросом студента",
        "Репетитор ведёт трудовую деятельность в IT на момент преподавания",
      ],
      link: "/tutors",
    },
    {
      title: "Лекции",
      description: [
        "Живые встречи с преподавателем в одном потоке до 22 человек",
        'Выделенное время под "вопрос-ответ" и знакомство с другими студентами',
        "Обсуждение коммерческой составляющей профессии",
      ],
      link: "/lectures",
    },
  ]

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechnoBack2-GCst4LXGRMSsPLiijH33ehQa1xXUD1.png')] bg-cover bg-center pt-32 mt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechnoBack2-GCst4LXGRMSsPLiijH33ehQa1xXUD1.png')`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 mb-24">
        <h2 className="text-4xl font-bold text-center text-white mb-12 mt-16">Формат обучения</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formats.map((format, index) => (
            <Link
              href={format.link}
              key={index}
              className="bg-white p-6 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl group"
            >
              <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-[#1E4FCD] group-hover:text-[#1E4FCD] transition-colors">
                {format.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {format.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 text-[#1E4FCD] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-[#1E4FCD] font-semibold group-hover:translate-x-2 transition-transform">
                Подробнее
                <ChevronRight className="w-5 h-5 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

