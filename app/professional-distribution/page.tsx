"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ContactFooter } from "@/components/contact-footer"
import { ApplicationButton } from "@/components/application-button"
import { CheckCircle, Users, Briefcase, BookOpen, Target, ArrowLeft } from "lucide-react"

export default function ProfessionalDistributionPage() {
  const router = useRouter()
  const features = [
    {
      icon: Users,
      title: "Подготовка к собеседованиям",
      description: "Тренинги по прохождению технических интервью и soft skills",
    },
    {
      icon: Target,
      title: "Индивидуальный подход",
      description: "Персональный карьерный консультант для каждого студента",
    },
    {
      icon: Briefcase,
      title: "Партнерство с компаниями",
      description: "Прямые контакты с HR-специалистами ведущих IT-компаний",
    },
  ]

  const steps = [
    "Анализ рынка труда и востребованных навыков",
    "Составление резюме и портфолио",
    "Подготовка к техническим собеседованиям",
    "Тренинги по soft skills и коммуникации",
    "Знакомство с потенциальными работодателями",
    "Поддержка при заключении трудового договора",
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
              <Briefcase className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Профессиональное распределение</h1>
          </div>
          <p className="text-xl max-w-3xl pb-8">Подготовка к успешному старту карьеры и помощь в трудоустройстве</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наш подход к трудоустройству</h2>
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

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-8 h-8 text-[#1E4FCD]" />
            <h2 className="text-3xl font-bold">Этапы профессионального распределения</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1E4FCD] text-white rounded-sm flex items-center justify-center mt-1">
                  {index + 1}
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-[#1E4FCD] text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы начать свою карьеру в IT?</h2>
            <p className="mb-6">Присоединяйтесь к нашей программе и получите поддержку в трудоустройстве</p>
            <ApplicationButton variant="secondary" />
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  )
}

