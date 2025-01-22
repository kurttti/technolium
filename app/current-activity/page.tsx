"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ContactFooter } from "@/components/contact-footer"
import { ApplicationButton } from "@/components/application-button"
import { Users, BookOpen, MessageCircle, GraduationCap, Calendar, Target, CheckCircle, ArrowLeft } from "lucide-react"

export default function CurrentActivityPage() {
  const router = useRouter()
  const features = [
    {
      icon: Users,
      title: "Сообщество выпускников",
      description: "Регулярные встречи и нетворкинг с выпускниками программы",
    },
    {
      icon: MessageCircle,
      title: "Постоянная коммуникация",
      description: "Активные чаты и онлайн-встречи для обмена опытом",
    },
    {
      icon: GraduationCap,
      title: "Поддержка преподавателя",
      description: "Персональный наставник на первые месяцы работы",
    },
  ]

  const activities = [
    {
      title: "Регулярные встречи выпускников",
      items: [
        "Ежеквартальные офлайн-встречи",
        "Обмен опытом и успешными кейсами",
        "Расширение профессиональных связей",
        "Неформальное общение в сообществе",
      ],
    },
    {
      title: "Онлайн-коммуникация",
      items: [
        "Тематические чаты по направлениям",
        "Еженедельные видеозвонки",
        "Обсуждение актуальных трендов",
        "Взаимопомощь в решении рабочих задач",
      ],
    },
    {
      title: "Менторская поддержка",
      items: [
        "Помощь в адаптации на новом месте",
        "Консультации по рабочим вопросам",
        "Разбор сложных ситуаций",
        "Рекомендации по развитию навыков",
      ],
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Быстрая адаптация",
      description: "Помощь в освоении на новом рабочем месте",
    },
    {
      icon: Users,
      title: "Профессиональное сообщество",
      description: "Доступ к сети профессиональных контактов",
    },
    {
      icon: Calendar,
      title: "Регулярные мероприятия",
      description: "Встречи, воркшопы и неформальные события",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
            <h1 className="text-4xl md:text-5xl font-bold">Действующая деятельность</h1>
          </div>
          <p className="text-xl max-w-3xl pb-8">Поддержка и развитие выпускников после трудоустройства</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Основные направления поддержки</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-6 shadow-lg">
                  <div className="w-12 h-12 bg-[#1E4FCD] rounded-sm flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-8 h-8 text-[#1E4FCD]" />
            <h2 className="text-3xl font-bold">Программа поддержки</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{activity.title}</h3>
                <ul className="space-y-3">
                  {activity.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#1E4FCD] mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества программы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-[#1E4FCD] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-[#1E4FCD] text-white p-8 text-center rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Присоединяйтесь к нашему сообществу</h2>
            <p className="mb-6">Станьте частью активного IT-сообщества и получите поддержку в развитии карьеры</p>
            <ApplicationButton variant="secondary" />
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  )
}

