"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { NewsSearch } from "./news-search"

const articles = [
  {
    id: "cybersecurity-courses",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    title: "Технолиум запускает курсы по кибербезопасности для студентов",
    tag: "Кибербезопасность",
    tagId: "cybersecurity",
    tagColor: "bg-[#0095FF]",
    description:
      "Онлайн-университет Технолиум объявил о запуске новой инициативы, направленной на повышение уровня знаний студентов в области кибербезопасности. С этого месяца все студенты университета смогут пройти курсы по защите информации и предотвращению кибератак.",
  },
  {
    id: "java-survey",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    title: "Онлайн-университет Технолиум запустил опрос среди студентов и работодателей о востребованности языка Java",
    tag: "Java",
    tagId: "java",
    tagColor: "bg-[#1E4FCD]",
    description:
      "Исследование направлено на выявление актуальности старых версий Java по сравнению с более новыми и современными технологиями. В рамках этого исследования университет стремится понять текущие тенденции и потребности рынка труда, чтобы адаптировать свои образовательные программы в соответствии с запросами индустрии.",
  },
  {
    id: "golang-courses",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
    title: "Онлайн-университет Технолиум объявил о приостановке набора на обучающие курсы по направлению Golang",
    tag: "Golang",
    tagId: "golang",
    tagColor: "bg-black",
    description:
      "Это решение связано с обновлением учебной программы, что позволит предложить студентам более современные и актуальные знания и навыки. Университет сообщил, что все студенты, которые уже проходят обучение по данной программе или завершают ее, смогут воспользоваться новыми учебными материалами абсолютно бесплатно.",
  },
  {
    id: "international-students",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop",
    title: "Технолиум начинает обучение студентов из Узбекистана и Белоруссии",
    tag: "Расширяем возможности",
    tagId: "opportunities",
    tagColor: "bg-[#1E4FCD]",
    description:
      "Технолиум объявил о начале работы с гражданами Узбекистана и Белоруссии. Этот шаг расширяет образовательные горизонты и предоставляет новые возможности для студентов из этих стран.",
  },
]

export function NewsArticles() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTags = selectedTags.length === 0 || selectedTags.includes(article.tagId)

      return matchesSearch && matchesTags
    })
  }, [searchQuery, selectedTags])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <NewsSearch onSearch={setSearchQuery} onFilterChange={setSelectedTags} />

      {filteredArticles.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Новости не найдены</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredArticles.map((article) => (
            <Link
              href={`/news/${article.id}`}
              key={article.id}
              className="group block bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-[#1E4FCD]"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-[300px] h-[200px] flex-shrink-0 overflow-hidden md:mt-4 md:ml-4">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-sm text-white ${article.tagColor}`}>
                      {article.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-[#1E4FCD] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">{article.description}</p>
                  <div className="mt-4 flex items-center text-[#1E4FCD] font-medium">
                    <span className="group-hover:underline">Читать далее</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

