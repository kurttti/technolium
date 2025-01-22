"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import {
  Brain,
  Code,
  Shield,
  Globe,
  Users,
  BookOpen,
  Trophy,
  Calendar,
  CheckCircle,
  ArrowLeft,
  GraduationCap,
  Briefcase,
  Target,
  Clock,
} from "lucide-react"
import { ContactFooter } from "@/components/contact-footer"
import { CourseDetails } from "@/components/course-details"

const specialties = {
  "machine-learning": {
    title: "Машинное обучение",
    icon: Brain,
    description:
      "Раздел искусственного интеллекта, занимающийся разработкой алгоритмов для обучения компьютеров и предсказания на основе данных.",
    duration: "12 месяцев",
    level: "Средний",
    price: "210 000 руб.",
    image: "/placeholder.svg?height=400&width=800",
    stats: [
      { label: "Трудоустройство", value: "92%" },
      { label: "Средняя зарплата", value: "280т ₽" },
      { label: "Проектов в портфолио", value: "12+" },
    ],
    skills: [
      "Python для анализа данных",
      "Нейронные сети",
      "Computer Vision",
      "Natural Language Processing",
      "Математическая статистика",
      "Big Data технологии",
    ],
    career: ["Data Scientist", "ML-инженер", "AI-разработчик", "Аналитик данных", "Исследователь в области ML"],
    program: [
      {
        title: "Основы Python и анализ данных",
        duration: "2 месяца",
        topics: ["Синтаксис Python", "Библиотеки NumPy и Pandas", "Визуализация данных", "Статистический анализ"],
      },
      {
        title: "Математика для ML",
        duration: "2 месяца",
        topics: ["Линейная алгебра", "Теория вероятностей", "Математическая статистика", "Оптимизация"],
      },
      {
        title: "Классическое машинное обучение",
        duration: "3 месяца",
        topics: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Selection"],
      },
      {
        title: "Нейронные сети и Deep Learning",
        duration: "3 месяца",
        topics: ["Архитектуры нейросетей", "Computer Vision", "NLP", "Reinforcement Learning"],
      },
      {
        title: "Проектная работа",
        duration: "2 месяца",
        topics: [
          "Работа над реальными проектами",
          "Подготовка портфолио",
          "Soft skills",
          "Подготовка к собеседованиям",
        ],
      },
    ],
  },
  "software-testing": {
    title: "Автоматизация тестирования ПО",
    icon: Code,
    description: "Освойте современные инструменты и методологии автоматизированного тестирования.",
    duration: "9 месяцев",
    level: "Начальный",
    price: "210 000 руб.",
    image: "/placeholder.svg?height=400&width=800",
    stats: [
      { label: "Трудоустройство", value: "89%" },
      { label: "Средняя зарплата", value: "180т ₽" },
      { label: "Проектов в портфолио", value: "8+" },
    ],
    skills: [
      "Java/Python для тестирования",
      "Selenium WebDriver",
      "API Testing",
      "Performance Testing",
      "Test Automation Frameworks",
      "CI/CD практики",
    ],
    career: ["QA Engineer", "Automation QA", "Test Lead", "SDET", "Performance Test Engineer"],
    program: [
      {
        title: "Основы тестирования",
        duration: "2 месяца",
        topics: [
          "Теория тестирования",
          "Типы и уровни тестирования",
          "Техники тест-дизайна",
          "Документация в тестировании",
        ],
      },
      {
        title: "Автоматизация на Java/Python",
        duration: "3 месяца",
        topics: ["Основы программирования", "ООП", "Паттерны проектирования", "Работа с Git"],
      },
      {
        title: "Web и API тестирование",
        duration: "2 месяца",
        topics: ["Selenium WebDriver", "REST API testing", "Postman", "TestNG/PyTest"],
      },
      {
        title: "Продвинутая автоматизация",
        duration: "2 месяца",
        topics: ["CI/CD", "Docker", "Performance Testing", "Mobile Testing"],
      },
    ],
  },
  "information-security": {
    title: "Информационная безопасность",
    icon: Shield,
    description: "Станьте специалистом по защите компьютерных систем и сетей.",
    duration: "12 месяцев",
    level: "Средний",
    price: "210 000 руб.",
    image: "/placeholder.svg?height=400&width=800",
    stats: [
      { label: "Трудоустройство", value: "94%" },
      { label: "Средняя зарплата", value: "250т ₽" },
      { label: "Проектов в портфолио", value: "10+" },
    ],
    skills: [
      "Сетевая безопасность",
      "Криптография",
      "Защита от атак",
      "Аудит безопасности",
      "Forensics",
      "Compliance & Standards",
    ],
    career: [
      "Security Engineer",
      "Penetration Tester",
      "Security Analyst",
      "Security Architect",
      "Security Consultant",
    ],
    program: [
      {
        title: "Основы кибербезопасности",
        duration: "2 месяца",
        topics: ["Принципы ИБ", "Типы угроз", "Модели защиты", "Стандарты безопасности"],
      },
      {
        title: "Сетевая безопасность",
        duration: "3 месяца",
        topics: ["Сетевые протоколы", "Firewall", "IDS/IPS", "VPN технологии"],
      },
      {
        title: "Защита систем",
        duration: "3 месяца",
        topics: ["Защита ОС", "Веб-безопасность", "Безопасность приложений", "Криптография"],
      },
      {
        title: "Аудит и тестирование",
        duration: "4 месяца",
        topics: ["Penetration Testing", "Аудит безопасности", "Incident Response", "Security Operations"],
      },
    ],
  },
  "web-development": {
    title: "Серверная веб-разработка",
    icon: Globe,
    description: "Научитесь создавать современные веб-приложения и работать с базами данных.",
    duration: "12 месяцев",
    level: "Начальный",
    price: "210 000 руб.",
    image: "/placeholder.svg?height=400&width=800",
    stats: [
      { label: "Трудоустройство", value: "91%" },
      { label: "Средняя зарплата", value: "220т ₽" },
      { label: "Проектов в портфолио", value: "15+" },
    ],
    skills: ["Python/Node.js", "SQL и NoSQL БД", "REST API", "Микросервисы", "Docker", "Cloud Services"],
    career: ["Backend Developer", "Full Stack Developer", "DevOps Engineer", "System Architect", "API Developer"],
    program: [
      {
        title: "Основы программирования",
        duration: "3 месяца",
        topics: ["Python/Node.js", "ООП", "Алгоритмы и структуры данных", "Git"],
      },
      {
        title: "Базы данных",
        duration: "2 месяца",
        topics: ["SQL", "PostgreSQL", "MongoDB", "Redis"],
      },
      {
        title: "Веб-разработка",
        duration: "4 месяца",
        topics: ["REST API", "Django/Express", "Authentication", "Testing"],
      },
      {
        title: "DevOps и масштабирование",
        duration: "3 месяца",
        topics: ["Docker", "CI/CD", "Cloud Services", "Мониторинг"],
      },
    ],
  },
}

export default function SpecialtyPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const specialty = specialties[id as keyof typeof specialties]
  const Icon = specialty?.icon || Brain

  if (!specialty) {
    router.push("/404")
    return null
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1E4FCD] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-white mb-8 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="mr-2" />
            Назад
          </button>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-lg">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold">{specialty.title}</h1>
          </div>
          <p className="text-xl max-w-3xl">{specialty.description}</p>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {specialty.stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-[#1E4FCD] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Программа обучения</h2>
              <div className="space-y-6">
                {specialty.program.map((module, index) => (
                  <div key={index} className="bg-white p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1E4FCD] text-white rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Clock className="w-4 h-4 mr-2" />
                          {module.duration}
                        </div>
                        <ul className="space-y-2">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-[#1E4FCD] mr-2" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <CourseDetails
                duration={specialty.duration}
                level={specialty.level}
                price={specialty.price.replace(" руб.", "")}
                courseTitle={specialty.title} // Ensure this is passed
                className="sticky top-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Career */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                Навыки, которые вы получите
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  {specialty.skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#1E4FCD] mr-2" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Карьерные перспективы
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  {specialty.career.map((position, index) => (
                    <div key={index} className="flex items-center">
                      <Trophy className="w-4 h-4 text-[#1E4FCD] mr-2" />
                      {position}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </>
  )
}

