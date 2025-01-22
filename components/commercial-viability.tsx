import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function CommercialViability() {
  const stages = [
    {
      title: "Базовый навык",
      description: [
        "Работа с действующим партнером университета в разработке элементарных задач",
        'Присоединение к аутсорсинговому отделу разработки "Технолиум"',
      ],
      link: "/basic-skills",
    },
    {
      title: "Профессиональное распределение",
      description: [
        "Подготовка студента к общению с принимающей стороной (работодателем)",
        "Повторная проверка выполненных тестовых заданий",
        "Выход на рынок труда общеизвестными каналами",
      ],
      link: "/professional-distribution",
    },
    {
      title: "Действующая деятельность",
      description: [
        "Сохранение контактных связей путем организации сборов выпускников и совместных чатов/звонков",
        "Предоставление преподавателя на первый рабочий период",
      ],
      link: "/current-activity",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Коммерческая пригодность</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <Link
              key={index}
              href={stage.link}
              className="block bg-white p-6 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl group"
            >
              <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-[#1E4FCD]">{stage.title}</h3>
              <ul className="space-y-2 mb-6">
                {stage.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 text-[#1E4FCD] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center text-[#1E4FCD] font-semibold group-hover:translate-x-2 transition-transform">
                Подробнее
                <ChevronRight className="w-5 h-5 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

