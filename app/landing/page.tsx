import { LeadForm } from '@/components/lead-form'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Технологическое образование для будущих инноваторов
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Получите передовые навыки в области технологий и станьте частью следующего поколения технических лидеров
              </p>
              <div className="flex gap-4">
                <a href="#form" className="inline-block bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition">
                  Оставить заявку
                </a>
                <a href="#programs" className="inline-block bg-white text-blue-600 px-8 py-3 font-semibold border border-blue-600 hover:bg-blue-50 transition">
                  Программы
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Здесь можно добавить hero изображение */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white" id="programs">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Практический подход</h3>
              <p className="text-gray-600">Работа над реальными проектами под руководством опытных специалистов</p>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Современные технологии</h3>
              <p className="text-gray-600">Изучение актуальных инструментов и методологий разработки</p>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Карьерный рост</h3>
              <p className="text-gray-600">Поддержка в трудоустройстве и развитии карьеры</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4" id="form">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Начните свой путь сегодня</h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей обучения
            </p>
          </div>
          <div className="flex justify-center">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  )
}
