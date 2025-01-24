"use client"

import { ContactFooter } from "@/components/contact-footer"
import { ChevronRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { Users } from "lucide-react"
import { useRouter } from "next/navigation"
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

export default function TutorsPage() {
  const router = useRouter()
  const benefits = [
    'Дополнительные занятия 1 на 1 с ведущими преподавателями "Технолиум"',
    "Формат встречи определяется запросом студента",
    "Репетитор ведёт трудовую деятельность в IT на момент преподавания",
    "Индивидуальный подход к каждому студенту",
    "Гибкий график занятий",
    "Возможность выбора преподавателя",
  ]

  const formats = [
    {
      title: "Онлайн-консультации",
      description:
        "Индивидуальные занятия через видеосвязь с возможностью демонстрации экрана и совместной работы над кодом",
    },
    {
      title: "Код-ревью",
      description: "Детальный разбор вашего кода с рекомендациями по улучшению и исправлению ошибок",
    },
    {
      title: "Практические занятия",
      description: "Работа над реальными проектами под руководством опытного наставника",
    },
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
              <Users className="w-8 h-8" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold">Репетиторы</h1>
          </motion.div>
          <motion.p 
            className="text-xl max-w-3xl pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Индивидуальный подход к обучению с опытными специалистами
          </motion.p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <section className="mb-16 pt-16">
          <motion.h2 
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Преимущества работы с репетитором
          </motion.h2>
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg"
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

        <section className="mb-16">
          <motion.h2 
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Форматы занятий
          </motion.h2>
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
                className="bg-white p-6 shadow-lg"
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-4">{format.title}</h3>
                <p className="text-gray-600">{format.description}</p>
              </motion.div>
            ))}
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
            Как проходят занятия
          </motion.h2>
          <motion.div 
            className="bg-white p-8 shadow-lg"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.ol className="space-y-6">
              {[1, 2, 3].map((step, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={item}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-[#1E4FCD] text-white rounded-full flex items-center justify-center mr-4">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-bold mb-2">
                      {index === 0 && "Выбор репетитора"}
                      {index === 1 && "Согласование формата"}
                      {index === 2 && "Проведение занятий"}
                    </h3>
                    <p className="text-gray-600">
                      {index === 0 && "Вы выбираете репетитора из нашей базы специалистов, основываясь на их профиле и специализации"}
                      {index === 1 && "Обсуждаете удобный формат занятий и составляете график"}
                      {index === 2 && "Занимаетесь в выбранном формате, получаете обратную связь и рекомендации"}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}
