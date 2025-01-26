"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ContactFooter } from "@/components/contact-footer"
import { ApplicationButton } from "@/components/application-button"
import { CheckCircle, Users, Code, BookOpen, BrainCircuit, ArrowLeft } from "lucide-react"
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
              <Code className="w-8 h-8" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold">Базовый навык</h1>
          </motion.div>
          <motion.p 
            className="text-xl max-w-3xl pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Начните свой путь в IT с освоения базовых навыков программирования и работы в команде
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
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
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 shadow-lg"
                  variants={itemVariant}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#1E4FCD] rounded-sm flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <BookOpen className="w-8 h-8 text-[#1E4FCD]" />
            </motion.div>
            <h2 className="text-3xl font-bold">Навыки, которые вы получите</h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2"
                variants={itemVariant}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <CheckCircle className="w-5 h-5 text-[#1E4FCD]" />
                <span>{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            className="bg-[#1E4FCD] text-white p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.h2 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Готовы начать свой путь в IT?
            </motion.h2>
            <motion.p 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Присоединяйтесь к нашей программе и получите необходимые навыки для успешной карьеры
            </motion.p>
            <ApplicationButton variant="secondary" />
          </motion.div>
        </div>
      </section>

      <ContactFooter />
    </div>
  )
}
