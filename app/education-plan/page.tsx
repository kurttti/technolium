"use client"

import Image from "next/image"
import { ContactFooter } from "@/components/contact-footer"
import { CheckCircle2, Clock } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function EducationPlanPage() {
  const stages = [
    {
      title: "Базовый этап",
      duration: "2 месяца",
      description: "Формирование фундаментальных знаний и навыков",
      topics: [
        "Основы программирования",
        "Алгоритмы и структуры данных",
        "Компьютерные науки",
        "Математические основы",
      ],
    },
    {
      title: "Специализация",
      duration: "4 месяца",
      description: "Углубленное изучение выбранного направления",
      topics: ["Профильные технологии", "Практические проекты", "Работа с реальными задачами", "Командная разработка"],
    },
    {
      title: "Стажировка",
      duration: "3 месяца",
      description: "Практическое применение полученных знаний",
      topics: [
        "Работа над проектами",
        "Менторство от специалистов",
        "Подготовка к трудоустройству",
        "Формирование портфолио",
      ],
    },
    {
      title: "Трудоустройство",
      duration: "3 месяца",
      description: "Поддержка в начале карьеры",
      topics: [
        "Помощь в поиске работы",
        "Подготовка к собеседованиям",
        "Карьерное консультирование",
        "Сопровождение на испытательном сроке",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-[#1E4FCD] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              План обучения
            </motion.h1>
            <motion.p 
              className="text-xl text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Структурированная программа подготовки специалистов с фокусом на практические навыки
            </motion.p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              className="space-y-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {stages.map((stage, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 shadow-lg"
                  variants={itemVariant}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-64 flex-shrink-0">
                      <motion.div 
                        className="flex items-center gap-2 text-[#1E4FCD] mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Clock className="w-5 h-5" />
                        <span className="font-bold">{stage.duration}</span>
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                      <p className="text-gray-600">{stage.description}</p>
                    </div>
                    <div className="flex-1">
                      <motion.div 
                        className="grid md:grid-cols-2 gap-4"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        {stage.topics.map((topic, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start"
                            variants={itemVariant}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#1E4FCD] mr-2 flex-shrink-0 mt-1" />
                            <span>{topic}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Особенности обучения
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div 
                className="bg-white p-6 shadow-sm"
                variants={itemVariant}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 bg-[#1E4FCD] flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
                <p className="text-gray-600">Программа обучения адаптируется под ваш уровень и цели</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 shadow-sm"
                variants={itemVariant}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 bg-[#1E4FCD] flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Современные материалы</h3>
                <p className="text-gray-600">Актуальные технологии и реальные проекты от практикующих специалистов</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 shadow-sm"
                variants={itemVariant}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 bg-[#1E4FCD] flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Поддержка</h3>
                <p className="text-gray-600">Постоянное сопровождение от преподавателей и кураторов</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}
