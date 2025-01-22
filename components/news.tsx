import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    id: "cybersecurity-courses",
    slug: "cybersecurity-courses",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    title: "Технолиум запускает курсы по кибербезопасности для студентов",
    tag: "Кибербезопасность",
    tagColor: "bg-[#0095FF]",
    description:
      "Онлайн-университет Технолиум объявил о запуске новой инициативы, направленной на повышение уровня знаний студентов в области кибербезопасности. С этого месяца все студенты университета смогут пройти курсы по защите информации и предотвращению кибератак.",
  },
  {
    id: "java-survey",
    slug: "java-survey",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    title: "Онлайн-университет Технолиум запустил опрос среди студентов и работодателей о востребованности языка Java",
    tag: "Java",
    tagColor: "bg-[#1E4FCD]",
    description:
      "Исследование направлено на выявление актуальности старых версий Java по сравнению с более новыми и современными технологиями. В рамках этого исследования университет стремится понять текущие тенденции и потребности рынка труда, чтобы адаптировать свои образовательные программы в соответствии с запросами индустрии.",
  },
  {
    id: "golang-courses",
    slug: "golang-courses",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
    title: "Онлайн-университет Технолиум объявил о приостановке набора на обучающие курсы по направлению Golang",
    tag: "Golang",
    tagColor: "bg-black",
    description:
      "Это решение связано с обновлением учебной программы, что позволит предложить студентам более современные и актуальные знания и навыки. Университет сообщил, что все студенты, которые уже проходят обучение по данной программе или завершают ее, смогут воспользоваться новыми учебными материалами абсолютно бесплатно.",
  },
  {
    id: "international-students",
    slug: "international-students",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop",
    title: "Технолиум начинает обучение студентов из Узбекистана и Белоруссии",
    tag: "Расширяем возможности",
    tagColor: "bg-[#1E4FCD]",
    description:
      "Технолиум объявил о начале работы с гражданами Узбекистана и Белоруссии. Этот шаг расширяет образовательные горизонты и предоставляет новые возможности для студентов из этих стран.",
  },
]

export function News() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Новости</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="flex flex-col bg-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover rounded-sm"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={item.id === "cybersecurity-courses"}
                />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <span className={`text-white text-sm px-4 py-1 rounded-none self-start mb-3 ${item.tagColor}`}>
                  {item.tag}
                </span>
                <h3 className="text-lg font-medium mb-4 flex-grow">{item.title}</h3>
                <div className="mt-4 flex items-center text-[#1E4FCD] font-medium" onClick={(e) => e.preventDefault()}>
                  <span>Читать далее</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

