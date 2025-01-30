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
import { Contacts } from "@/components/features/contacts"
import { Footer } from "@/components/layout/footer"
import { CourseDetails } from "@/components/features/course-details"
import { motion } from "framer-motion"

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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const moduleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
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
    <div>
      <main>
        {/* Hero Section */}
        <motion.section 
          className="bg-[#1E4FCD] text-white py-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.button
              onClick={() => router.back()}
              className="flex items-center text-white mb-8 hover:opacity-80 transition-opacity"
              variants={fadeInUp}
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="mr-2" />
              Назад
            </motion.button>
            <motion.div 
              className="flex items-center gap-4 mb-6"
              variants={fadeInUp}
            >
              <motion.div 
                className="p-3 bg-white/10 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
              <h1 className="text-4xl font-bold">{specialty.title}</h1>
            </motion.div>
            <motion.p 
              className="text-xl max-w-3xl"
              variants={fadeInUp}
            >
              {specialty.description}
            </motion.p>
          </div>
        </motion.section>

        {/* Key Info Section */}
        <motion.section 
          className="py-16 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {specialty.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 shadow-lg text-center"
                  variants={statVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-[#1E4FCD] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Course Details */}
        <motion.section 
          className="py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <motion.h2 
                  className="text-2xl font-bold mb-6"
                  variants={fadeInUp}
                >
                  Программа обучения
                </motion.h2>
                <div className="space-y-6">
                  {specialty.program.map((module, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white p-6 shadow-lg"
                      variants={moduleVariants}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
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
                          <motion.ul 
                            className="space-y-2"
                            variants={staggerContainer}
                          >
                            {module.topics.map((topic, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-center"
                                variants={fadeInUp}
                                custom={i}
                                transition={{ delay: i * 0.1 }}
                              >
                                <CheckCircle className="w-4 h-4 text-[#1E4FCD] mr-2" />
                                {topic}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="sticky top-4"
              >
                <CourseDetails
                  duration={specialty.duration}
                  level={specialty.level}
                  price={specialty.price.replace(" руб.", "")}
                  courseTitle={specialty.title}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Skills & Career */}
        <motion.section 
          className="py-12 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2" />
                  Навыки, которые вы получите
                </h2>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  variants={staggerContainer}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {specialty.skills.map((skill, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center"
                        variants={fadeInUp}
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#1E4FCD] mr-2" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2" />
                  Карьерные перспективы
                </h2>
                <motion.div 
                  className="bg-gray-50 p-6 rounded-lg"
                  variants={staggerContainer}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {specialty.career.map((position, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center"
                        variants={fadeInUp}
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      >
                        <Trophy className="w-4 h-4 text-[#1E4FCD] mr-2" />
                        {position}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      <Contacts />
      <Footer />
    </div>
  )
}
