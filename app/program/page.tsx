"use client"
import Image from "next/image"
import { ContactFooter } from "@/components/contact-footer"
import { ApplicationButton } from "@/components/application-button"
import {
  BookOpen,
  Clock,
  Users,
  Target,
  CheckCircle,
  GraduationCap,
  Calendar,
  BrainCircuit,
  Code,
  Briefcase,
} from "lucide-react"
import { motion } from "framer-motion"

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

export default function ProgramPage() {
  const stats = [
    { value: "2 года", label: "Длительность обучения" },
    { value: "92%", label: "Трудоустройство" },
    { value: "50+", label: "Преподавателей" },
    { value: "24/7", label: "Доступ к материалам" },
  ]

  const timeline = [
    {
      title: "Базовый этап",
      duration: "6 месяцев",
      items: ["Основы программирования", "Алгоритмы и структуры данных", "Компьютерные науки", "Математические основы"],
    },
    {
      title: "Специализация",
      duration: "8 месяцев",
      items: [
        "Углубленное изучение направления",
        "Работа с современными технологиями",
        "Практические проекты",
        "Командная работа",
      ],
    },
    {
      title: "Стажировка",
      duration: "4 месяца",
      items: [
        "Работа над реальными проектами",
        "Менторство от специалистов",
        "Подготовка к трудоустройству",
        "Формирование портфолио",
      ],
    },
    {
      title: "Трудоустройство",
      duration: "6 месяцев",
      items: [
        "Помощь в поиске работы",
        "Подготовка к собеседованиям",
        "Карьерное консультирование",
        "Поддержка на испытательном сроке",
      ],
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Персональный ментор и адаптированная программа обучения",
    },
    {
      icon: BrainCircuit,
      title: "Практикующие специалисты",
      description: "Преподаватели из ведущих IT-компаний",
    },
    {
      icon: Code,
      title: "Современные технологии",
      description: "Актуальные инструменты и методологии разработки",
    },
    {
      icon: Briefcase,
      title: "Гарантия трудоустройства",
      description: "Помощь в поиске работы и поддержка при трудоустройстве",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="bg-[#1E4FCD] text-white py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            Программа обучения
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            variants={fadeInUp}
          >
            Комплексная подготовка IT-специалистов с фокусом на практические навыки и реальные проекты
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-12 -mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
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

      {/* Timeline Section */}
      <motion.section 
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Структура программы
          </motion.h2>
          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="flex-shrink-0 w-8 h-8 bg-[#1E4FCD] text-white rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    {index + 1}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {phase.duration}
                      </div>
                    </div>
                    <motion.ul 
                      className="grid md:grid-cols-2 gap-3"
                      variants={staggerContainer}
                    >
                      {phase.items.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center"
                          variants={fadeInUp}
                          whileHover={{ x: 4, transition: { duration: 0.2 } }}
                        >
                          <CheckCircle className="w-4 h-4 text-[#1E4FCD] mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Преимущества обучения
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg"
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#1E4FCD] rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            variants={fadeInUp}
          >
            Готовы начать свой путь в IT?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Присоединяйтесь к нашей программе и получите необходимые навыки для успешной карьеры
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ApplicationButton />
          </motion.div>
        </div>
      </motion.section>

      <ContactFooter />
    </div>
  )
}
