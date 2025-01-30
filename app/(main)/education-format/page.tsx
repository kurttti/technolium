"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Contacts } from "@/components/features/contacts"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

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

const cardVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}

export default function EducationFormatPage() {
  const formats = [
    {
      title: "Материалы",
      description: [
        "Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ",
        "Продолжительность каждой, отдельно взятой лекции - до 15 минуты",
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

        {/* Format Cards */}
        <motion.section 
          className="py-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/materials" className="block h-full">
                <motion.div 
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer h-full flex flex-col"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="relative h-48 flex-shrink-0">
                    <Image
                      src={formats[0].image}
                      alt={formats[0].title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-semibold mb-4">{formats[0].title}</h3>
                    <ul className="space-y-2 flex-grow">
                      {formats[0].description.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <ChevronRight className="w-5 h-5 text-[#1E4FCD] mr-2 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>

              <Link href="/tutors" className="block h-full">
                <motion.div 
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer h-full flex flex-col"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="relative h-48 flex-shrink-0">
                    <Image
                      src={formats[1].image}
                      alt={formats[1].title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-semibold mb-4">{formats[1].title}</h3>
                    <ul className="space-y-2 flex-grow">
                      {formats[1].description.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <ChevronRight className="w-5 h-5 text-[#1E4FCD] mr-2 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>

              <Link href="/lectures" className="block h-full">
                <motion.div 
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer h-full flex flex-col"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="relative h-48 flex-shrink-0">
                    <Image
                      src={formats[2].image}
                      alt={formats[2].title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-semibold mb-4">{formats[2].title}</h3>
                    <ul className="space-y-2 flex-grow">
                      {formats[2].description.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <ChevronRight className="w-5 h-5 text-[#1E4FCD] mr-2 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.section>

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
      <Contacts />
      <Footer />
    </div>
  )
}
