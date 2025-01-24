"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { ContactFooter } from "@/components/contact-footer"
import { ChevronRight, ArrowLeft } from "lucide-react"
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

export default function EducationFormatPage() {
  const router = useRouter()

  const formats = [
    {
      title: "Материалы",
      description: [
        "Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ",
        "Продолжительность каждой, отдельно взятой лекции - до 1 минуты",
        "Выполнение тестовых и практических заданий от работодателей с первого месяца",
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    },
    {
      title: "Репетиторы",
      description: [
        "Дополнительные занятия 1 на 1 с ведущими преподавателями Технолиум",
        "Формат встречи определяется запросом студента",
        "Репетитор ведёт трудовую деятельность в IT на момент преподавания",
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    },
    {
      title: "Лекции",
      description: [
        "Живые встречи с преподавателем в одном потоке до 22 человек",
        "Выделенное время под вопрос-ответ и знакомство с другими студентами",
        "Обсуждение коммерческой составляющей профессии",
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-[#1E4FCD] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.button
              onClick={() => router.back()}
              className="flex items-center text-white/80 hover:text-white transition-colors mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="mr-2" />
              Назад
            </motion.button>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Формат обучения
            </motion.h1>
            <motion.p 
              className="text-xl text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Мы предлагаем комплексный подход к обучению, сочетающий различные форматы для максимальной эффективности
            </motion.p>
          </div>
        </section>

        {/* Formats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {formats.map((format, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white shadow-lg overflow-hidden"
                  variants={itemVariant}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="relative h-48"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={format.image || "/placeholder.svg"}
                      alt={format.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{format.title}</h3>
                    <motion.ul 
                      className="space-y-3"
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {format.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          variants={itemVariant}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <ChevronRight className="w-5 h-5 text-[#1E4FCD] flex-shrink-0 mt-1" />
                          <span className="ml-2">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Расписание занятий
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
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
                <h3 className="text-xl font-bold mb-4">Будние дни</h3>
                <motion.ul 
                  className="space-y-2 text-gray-600"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <motion.li 
                    variants={itemVariant}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    • Лекции: 19:00 - 20:30
                  </motion.li>
                  <motion.li 
                    variants={itemVariant}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    • Практические занятия: 20:45 - 22:00
                  </motion.li>
                  <motion.li 
                    variants={itemVariant}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    • Консультации с преподавателем: по договоренности
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div 
                className="bg-white p-6 shadow-sm"
                variants={itemVariant}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-4">Выходные дни</h3>
                <motion.ul 
                  className="space-y-2 text-gray-600"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <motion.li 
                    variants={itemVariant}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    • Интенсивы: 10:00 - 17:00
                  </motion.li>
                  <motion.li 
                    variants={itemVariant}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    • Воркшопы: 12:00 - 15:00
                  </motion.li>
                  <motion.li 
                    variants={itemVariant}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    • Групповые проекты: по договоренности
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}
