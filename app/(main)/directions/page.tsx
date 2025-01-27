"use client"

import Image from "next/image"
import Link from "next/link"
import { Contacts } from "@/components/contacts"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
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
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const featureVariants = {
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

export default function DirectionsPage() {
  const directions = [
    {
      id: "machine-learning",
      title: "Машинное обучение",
      description: "Изучите основы искусственного интеллекта и разработки алгоритмов машинного обучения",
      duration: "12 месяцев",
      level: "Средний",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    },
    {
      id: "software-testing",
      title: "Автоматизация тестирования ПО",
      description: "Освойте современные инструменты и методологии автоматизированного тестирования",
      duration: "9 месяцев",
      level: "Начальный",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
    },
    {
      id: "information-security",
      title: "Информационная безопасность",
      description: "Станьте специалистом по защите компьютерных систем и сетей",
      duration: "12 месяцев",
      level: "Средний",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    },
    {
      id: "web-development",
      title: "Серверная веб-разработка",
      description: "Научитесь создавать современные веб-приложения и работать с базами данных",
      duration: "12 месяцев",
      level: "Начальный",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <motion.section 
          className="bg-[#1E4FCD] text-white py-16"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Направления обучения
            </motion.h1>
            <motion.p 
              className="text-xl text-center max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Выберите подходящее направление и начните свой путь в IT уже сегодня
            </motion.p>
          </div>
        </motion.section>

        {/* Directions Grid */}
        <motion.section 
          className="py-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {directions.map((direction, index) => (
                <Link 
                  key={direction.id} 
                  href={`/specialties/${direction.id}`}
                  className="block"
                >
                  <motion.div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="relative h-48">
                      <Image
                        src={direction.image}
                        alt={direction.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">{direction.title}</h3>
                      <p className="text-gray-600 mb-4">{direction.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{direction.duration}</span>
                        <span>{direction.level}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section 
          className="bg-gray-50 py-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Почему выбирают Технолиум
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                  title: "Актуальные программы",
                  description: "Регулярно обновляем программы обучения в соответствии с требованиями рынка"
                },
                {
                  icon: (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                    />
                  ),
                  title: "Гибкий график",
                  description: "Обучайтесь в удобное время без отрыва от работы"
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                  title: "Поддержка",
                  description: "Персональные наставники и поддержка от кураторов курса"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={featureVariants}
                >
                  <motion.div 
                    className="bg-[#1E4FCD] w-16 h-16 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Contacts />
      <Footer />
    </div>
  )
}
