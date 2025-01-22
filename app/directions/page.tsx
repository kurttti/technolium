import Image from "next/image"
import Link from "next/link"
import { ContactFooter } from "@/components/contact-footer"

export default function DirectionsPage() {
  const directions = [
    {
      id: "machine-learning",
      title: "Машинное обучение",
      description: "Изучите основы искусственного интеллекта и разработки алгоритмов машинного обучения",
      duration: "12 месяцев",
      level: "Средний",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    },
    {
      id: "software-testing",
      title: "Автоматизация тестирования ПО",
      description: "Освойте современные инструменты и методологии автоматизированного тестирования",
      duration: "9 месяцев",
      level: "Начальный",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
    },
    {
      id: "information-security",
      title: "Информационная безопасность",
      description: "Станьте специалистом по защите компьютерных систем и сетей",
      duration: "12 месяцев",
      level: "Средний",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    },
    {
      id: "web-development",
      title: "Серверная веб-разработка",
      description: "Научитесь создавать современные веб-приложения и работать с базами данных",
      duration: "12 месяцев",
      level: "Начальный",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-[#1E4FCD] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Направления обучения</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Выберите подходящее направление и начните свой путь в IT вместе с Технолиум
            </p>
          </div>
        </section>

        {/* Directions Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {directions.map((direction) => (
                <Link
                  key={direction.id}
                  href={`/specialties/${direction.id}`}
                  className="block bg-white shadow-md overflow-hidden transition-transform hover:translate-y-[-4px] hover:shadow-lg"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={direction.image || "/placeholder.svg"}
                      alt={direction.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={direction.id === "machine-learning"}
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{direction.title}</h2>
                    <p className="text-gray-600 mb-4">{direction.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-gray-100 px-3 py-1">
                        <span className="text-sm">Длительность: {direction.duration}</span>
                      </div>
                      <div className="bg-gray-100 px-3 py-1">
                        <span className="text-sm">Уровень: {direction.level}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают Технолиум</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#1E4FCD] w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Актуальные программы</h3>
                <p className="text-gray-600">
                  Регулярно обновляем программы обучения в соответствии с требованиями рынка
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#1E4FCD] w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Гибкий график</h3>
                <p className="text-gray-600">Обучайтесь в удобное время без отрыва от работы</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1E4FCD] w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Поддержка</h3>
                <p className="text-gray-600">Персональные наставники и поддержка от кураторов курса</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}

