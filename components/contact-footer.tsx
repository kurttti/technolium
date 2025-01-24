"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ContactFormModal } from "./contact-form-modal"
import { EmailButton } from "./email-button"

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    }
  }
}

const footerContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }
  }
}

export function ContactFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <footer>
      <motion.div 
        className="w-full bg-[#0095FF] py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
      >
        <h2 className="text-2xl font-bold text-white text-center">Вопросы и предложения</h2>
      </motion.div>

      <div className="bg-[#F8F8F8] py-12 md:py-16">
        <motion.div 
          className="max-w-3xl mx-auto text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          <motion.h3 
            className="text-[#1B324A] text-2xl md:text-3xl font-bold mb-4"
            variants={headerVariants}
          >
            В случае возникновения вопросов,
            <br className="hidden md:inline" />
            напишите нам на электронную почту
          </motion.h3>
          <motion.p 
            className="text-gray-600 mb-8 text-sm md:text-base"
            variants={contentVariants}
          >
            Письма рассматриваются в течение 2х (двух) рабочих дней. Вы можете оставить заявку на звонок или позвонить
            на горячую линию.
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 max-w-md mx-auto"
            variants={contentVariants}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto border border-[#1E4FCD] text-[#1E4FCD] px-6 md:px-8 py-3 hover:bg-[#1E4FCD] hover:text-white transition-colors whitespace-nowrap text-sm md:text-base rounded-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Оставить заявку
            </motion.button>
            <motion.div variants={buttonVariants} whileHover="hover" className="w-full md:w-auto">
              <EmailButton variant="primary" className="w-full text-sm md:text-base py-3 rounded-lg" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="w-full px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerContentVariants}
      >
        <div className="grid md:grid-cols-12 gap-8">
          <motion.div 
            className="md:col-span-4"
            variants={listItemVariants}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footerlogo-NLvQaEQZ1RQ0WrvSja42PYCANeUhJf.png"
              alt="Технолиум"
              width={311}
              height={80}
              className="h-20 w-auto"
            />
          </motion.div>

          <motion.div 
            className="md:col-span-4"
            variants={listItemVariants}
          >
            <h4 className="font-bold text-xl mb-4">Направления</h4>
            <ul className="space-y-2">
              <motion.li variants={listItemVariants}>
                <Link href="/specialties/machine-learning" className="text-gray-600 hover:text-gray-900">
                  Машинное обучение
                </Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/specialties/software-testing" className="text-gray-600 hover:text-gray-900">
                  Автоматизация тестирования ПО
                </Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/specialties/information-security" className="text-gray-600 hover:text-gray-900">
                  Информационная безопасность
                </Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/specialties/web-development" className="text-gray-600 hover:text-gray-900">
                  Серверная веб-разработка
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div 
            className="md:col-span-4"
            variants={listItemVariants}
          >
            <h4 className="font-bold text-xl mb-4">Информация</h4>
            <ul className="space-y-2">
              <motion.li variants={listItemVariants}>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  О нас
                </Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/news" className="text-gray-600 hover:text-gray-900">
                  Новости
                </Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/license" className="text-gray-600 hover:text-gray-900">
                  Лицензии
                </Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/professional-distribution" className="text-gray-600 hover:text-gray-900">
                  Трудоустройство
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  )
}
