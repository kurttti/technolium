"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const footerContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    }
  }
}

const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }
  }
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="w-full py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={footerContentVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Logo and Description */}
            <motion.div 
              className="md:col-span-4 flex flex-col items-center md:items-start space-y-4"
              variants={listItemVariants}
            >
              <Image
                src="/footerlogo.png"
                width={160}
                height={42}
                alt="Технолиум"
                style={{ width: "auto", height: "auto" }}
                priority={true}
                className="w-[140px] md:w-[160px] h-auto"
              />
              <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                Образовательная платформа для подготовки специалистов в сфере IT
              </p>
            </motion.div>

            {/* Navigation Links */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Направления */}
              <motion.div variants={listItemVariants} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                  Направления
                </h3>
                <ul className="space-y-3">
                  <motion.li variants={listItemVariants}>
                    <Link 
                      href="/specialties/machine-learning" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block text-center md:text-left"
                    >
                      Нейросети
                    </Link>
                  </motion.li>
                  <motion.li variants={listItemVariants}>
                    <Link 
                      href="/specialties/software-testing" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block text-center md:text-left"
                    >
                      Тестирования ПО
                    </Link>
                  </motion.li>
                  <motion.li variants={listItemVariants}>
                    <Link 
                      href="/specialties/information-security" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block text-center md:text-left"
                    >
                      Безопасность
                    </Link>
                  </motion.li>
                  <motion.li variants={listItemVariants}>
                    <Link 
                      href="/specialties/web-development" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block text-center md:text-left"
                    >
                      Бекенд-разработка
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>

              {/* Информация */}
              <motion.div variants={listItemVariants} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                  Информация
                </h3>
                <ul className="space-y-3">
                  <motion.li variants={listItemVariants}>
                    <Link 
                      href="/professional-distribution" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block text-center md:text-left"
                    >
                      Трудоустройство
                    </Link>
                  </motion.li>
                  <motion.li variants={listItemVariants}>
                    <a 
                      href="https://yadi.sk/d/PHn7A1z2g-EfJw"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block text-center md:text-left"
                    >
                      Публичная оферта
                    </a>
                  </motion.li>
                </ul>
              </motion.div>

              {/* Контакты */}
              <motion.div variants={listItemVariants} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                  Контакты
                </h3>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaTelegram className="text-xl" />
                    <a 
                      href="https://t.me/TechnoliumWeb_bot" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      Telegram
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaWhatsapp className="text-xl" />
                    <a 
                      href="https://wa.me/79952147457" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-400 transition-colors duration-200"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdEmail className="text-xl" />
                    <a 
                      href="mailto:info@technolium.ru"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      info@technolium.ru
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div 
            variants={listItemVariants}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-500 text-sm text-center">
              {new Date().getFullYear()} Технолиум. Все права защищены.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
