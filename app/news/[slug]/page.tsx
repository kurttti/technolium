"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ContactFooter } from "@/components/contact-footer"

const articles = {
  "cybersecurity-courses": {
    title: "Технолиум запускает курсы по кибербезопасности для студентов",
    tag: "Кибербезопасность",
    tagColor: "bg-[#0095FF]",
    date: "16 января 2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    content: `
      Онлайн-университет Технолиум объявил о запуске новой инициативы, направленной на повышение уровня знаний студентов в области кибербезопасности. С этого месяца все студенты университета смогут пройти курсы по защите информации и предотвращению кибератак.

      Основные направления курса:
      • Основы информационной безопасности
      • Защита от сетевых атак
      • Криптография
      • Безопасность веб-приложений
      
      Курс разработан в сотрудничестве с ведущими специалистами отрасли и включает в себя как теоретические, так и практические занятия.
    `,
  },
  "java-survey": {
    title: "Онлайн-университет Технолиум запустил опрос среди студентов и работодателей о востребованности языка Java",
    tag: "Java",
    tagColor: "bg-[#1E4FCD]",
    date: "15 января 2025",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    content: `
      Исследование направлено на выявление актуальности старых версий Java по сравнению с более новыми и современными технологиями. В рамках этого исследования университет стремится понять текущие тенденции и потребности рынка труда, чтобы адаптировать свои образовательные программы в соответствии с запросами индустрии.

      Основные направления исследования:
      • Востребованность различных версий Java
      • Популярные фреймворки и инструменты
      • Тенденции развития языка
      • Требования работодателей

      Результаты опроса будут использованы для улучшения учебных программ.
    `,
  },
  "golang-courses": {
    title: "Онлайн-университет Технолиум объявил о приостановке набора на обучающие курсы по направлению Golang",
    tag: "Golang",
    tagColor: "bg-black",
    date: "14 января 2025",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
    content: `
      Это решение связано с обновлением учебной программы, что позволит предложить студентам более современные и актуальные знания и навыки. Университет сообщил, что все студенты, которые уже проходят обучение по данной программе или завершают ее, смогут воспользоваться новыми учебными материалами абсолютно бесплатно.

      Планируемые улучшения программы:
      • Обновление учебных материалов
      • Добавление новых практических заданий
      • Расширение базы проектов
      • Интеграция современных инструментов разработки

      Дата возобновления набора будет объявлена после завершения обновления программы.
    `,
  },
  "international-students": {
    title: "Технолиум начинает обучение студентов из Узбекистана и Белоруссии",
    tag: "Расширяем возможности",
    tagColor: "bg-[#1E4FCD]",
    date: "13 января 2025",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop",
    content: `
      Технолиум объявил о начале работы с гражданами Узбекистана и Белоруссии. Этот шаг расширяет образовательные горизонты и предоставляет новые возможности для студентов из этих стран.

      Преимущества для международных студентов:
      • Обучение на русском языке
      • Доступные цены
      • Признаваемые сертификаты
      • Поддержка в трудоустройстве

      Программа стартует с начала следующего учебного семестра.
    `,
  },
}

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    return (
      <div className="min-h-screen pt-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Статья не найдена</h1>
          <Link href="/news" className="text-[#1E4FCD] hover:underline">
            Вернуться к новостям
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/news" className="text-[#1E4FCD] hover:underline">
            ← Назад к новостям
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

        <div className="flex items-center gap-4 mb-6">
          <span className={`${article.tagColor} text-white px-3 py-1 text-sm`}>{article.tag}</span>
          <span className="text-gray-500 text-sm">{article.date}</span>
        </div>

        <div className="relative h-[400px] mb-8">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            priority
            className="object-cover rounded-lg"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => {
            // Check if this is a list section (has a heading followed by bullet points)
            if (paragraph.includes(":\n")) {
              const [heading, listContent] = paragraph.split(":\n")
              return (
                <div key={index} className="mb-6">
                  <p className="text-gray-600 leading-relaxed mb-4 text-lg">{heading.trim()}:</p>
                  <ul className="list-disc pl-6">
                    {listContent
                      .split("•")
                      .filter((item) => item.trim())
                      .map((item, i) => (
                        <li key={i} className="text-gray-600 mb-2">
                          {item.trim()}
                        </li>
                      ))}
                  </ul>
                </div>
              )
            } else {
              return (
                <p key={index} className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {paragraph.trim()}
                </p>
              )
            }
          })}
        </div>
      </article>
      <ContactFooter />
    </div>
  )
}

