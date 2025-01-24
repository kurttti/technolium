"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ContactFooter } from "@/components/contact-footer"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }
  }
}

const statVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.5,
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
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
              О нас
            </motion.h1>
            <motion.p 
              className="text-xl text-center max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Технолиум - это современный онлайн-университет, специализирующийся на подготовке IT-специалистов высокого
              уровня
            </motion.p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Мы стремимся сделать качественное IT-образование доступным для каждого, кто хочет развиваться в
                  технологической сфере.
                </p>
                <p className="text-lg text-gray-600">
                  Наша цель - подготовить специалистов, готовых к реальным задачам современной IT-индустрии.
                </p>
              </motion.div>
              <motion.div 
                className="relative h-[400px] shadow-xl overflow-hidden"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Команда специалистов за работой"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Advantages Section */}
        <motion.section 
          className="bg-gray-50 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Преимущества обучения
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-4">Практический подход</h3>
                <p className="text-gray-600">
                  80% времени обучения посвящено практическим заданиям и работе над реальными проектами
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-4">Опытные преподаватели</h3>
                <p className="text-gray-600">Наши преподаватели - практикующие специалисты из ведущих IT-компаний</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-4">Гарантия трудоустройства</h3>
                <p className="text-gray-600">Помогаем с трудоустройством и поддерживаем на начальном этапе карьеры</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Statistics Section */}
        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Технолиум в цифрах
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "95%", label: "Трудоустройство выпускников" },
                { value: "50+", label: "Преподавателей-практиков" },
                { value: "1000+", label: "Выпускников" },
                { value: "4", label: "Направления обучения" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-[#1E4FCD] mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: index * 0.1,
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <ContactFooter />
    </div>
  )
}
