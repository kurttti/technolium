"use client"

import { ChevronRight, ArrowLeft, BookOpen } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Contacts } from "@/components/features/contacts"
import { Footer } from "@/components/layout/footer"

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

const item = {
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

export default function MaterialsPage() {
  const router = useRouter()
  const features = [
    {
      title: "Структурированные материалы",
      description: "Все материалы разделены на логические блоки и модули для удобного изучения",
    },
    {
      title: "Практические задания",
      description: "Каждый урок содержит практические задания для закрепления материала",
    },
    {
      title: "Доступность 24/7",
      description: "Доступ к материалам в любое удобное время с любого устройства",
    },
  ]

  const benefits = [
    "Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ",
    "Продолжительность каждой, отдельно взятой лекции - до 15 минут",
    "Выполнение тестовых и практических заданий от работодателей с первого месяца",
    "Интерактивные материалы с возможностью самопроверки",
    "Регулярные обновления контента",
    "Доступ к базе знаний и дополнительным ресурсам",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1E4FCD] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.button
            onClick={() => router.back()}
            className="flex items-center text-white/80 hover:text-white transition-colors py-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </motion.button>
          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <motion.div 
              className="p-3 bg-white/10 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="w-8 h-8" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold">Учебные материалы</h1>
          </motion.div>
          <motion.p 
            className="text-xl max-w-3xl pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Структурированные и интерактивные материалы для эффективного обучения
          </motion.p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-16">
          <motion.h2 
            className="text-2xl font-bold mb-8"
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
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 shadow-lg"
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Преимущества наших материалов
          </motion.h2>
          <motion.div 
            className="bg-gray-50 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.ul 
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={item}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <ChevronRight className="w-5 h-5 text-[#1E4FCD] flex-shrink-0 mt-1" />
                  <span className="ml-2">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        <section>
          <motion.h2 
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Формат материалов
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="bg-white p-6 shadow-lg"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold mb-4">Видеоматериалы</h3>
              <ul className="space-y-2">
                <li>• Короткие видеолекции</li>
                <li>• Практические демонстрации</li>
                <li>• Разбор реальных кейсов</li>
              </ul>
            </motion.div>
            <motion.div 
              className="bg-white p-6 shadow-lg"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold mb-4">Текстовые материалы</h3>
              <ul className="space-y-2">
                <li>• Конспекты лекций</li>
                <li>• Дополнительные ресурсы</li>
                <li>• Ссылки на полезные источники</li>
              </ul>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Contacts />
      <Footer />
    </div>
  )
}
