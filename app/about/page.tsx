import Image from "next/image"
import { ContactFooter } from "@/components/contact-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-[#1E4FCD] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">О нас</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Технолиум - это современный онлайн-университет, специализирующийся на подготовке IT-специалистов высокого
              уровня
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Мы стремимся сделать качественное IT-образование доступным для каждого, кто хочет развиваться в
                  технологической сфере.
                </p>
                <p className="text-lg text-gray-600">
                  Наша цель - подготовить специалистов, готовых к реальным задачам современной IT-индустрии.
                </p>
              </div>
              <div className="relative h-[400px] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Команда специалистов за работой"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Преимущества обучения</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Практический подход</h3>
                <p className="text-gray-600">
                  80% времени обучения посвящено практическим заданиям и работе над реальными проектами
                </p>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Опытные преподаватели</h3>
                <p className="text-gray-600">Наши преподаватели - практикующие специалисты из ведущих IT-компаний</p>
              </div>
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Гарантия трудоустройства</h3>
                <p className="text-gray-600">Помогаем с трудоустройством и поддерживаем на начальном этапе карьеры</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Технолиум в цифрах</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#1E4FCD] mb-2">95%</div>
                <p className="text-gray-600">Трудоустройство выпускников</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1E4FCD] mb-2">50+</div>
                <p className="text-gray-600">Преподавателей-практиков</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1E4FCD] mb-2">1000+</div>
                <p className="text-gray-600">Выпускников</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1E4FCD] mb-2">4</div>
                <p className="text-gray-600">Направления обучения</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}
