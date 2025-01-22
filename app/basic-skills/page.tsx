"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ContactFooter } from "@/components/contact-footer"
import { ApplicationButton } from "@/components/application-button"
import { CheckCircle, Users, Code, BookOpen, BrainCircuit, ArrowLeft } from "lucide-react"

export default function BasicSkillsPage() {
  const router = useRouter()
  const features = [
    {
      icon: Code,
      title: "Практика с первого дня",
      description: "Работа с действующим партнером университета в разработке элементарных задач",
    },
    {
      icon: Users,
      title: "Командная работа",
      description: 'Присоединение к аутсорсинговому отделу разработки "Технолиум"',
    },
    {
      icon: BrainCircuit,
      title: "Реальные проекты",
      description: "Участие в разработке коммерческих проектов под руководством опытных наставников",
    },
  ]

  const skills = [
    "Основы программирования",
    "Работа с базами данных",
    "Контроль версий (Git)",
    "Командная разработка",
    "Основы тестирования",
    "Работа с API",
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
              <Code className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Базовый навык</h1>
          </div>
          <p className="text-xl max-w-3xl pb-8">
            Начните свой путь в IT с освоения базовых навыков программиро��ания и работы в команде
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Особенности обучения</h2>
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

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-8 h-8 text-[#1E4FCD]" />
            <h2 className="text-3xl font-bold">Навыки, которые вы получите</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#1E4FCD]" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-[#1E4FCD] text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы начать свой путь в IT?</h2>
            <p className="mb-6">Присоединяйтесь к нашей программе и получите необходимые навыки для успешной карьеры</p>
            <ApplicationButton variant="secondary" />
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  )
}

