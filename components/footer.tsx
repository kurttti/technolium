"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
                <ul className="space-y-3">
                  <motion.li variants={listItemVariants}>
                    <a 
                      href="https://t.me/TechnoliumWeb_bot" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center md:justify-start gap-2"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.27-.48.74-.74 2.93-1.27 4.88-2.11 5.87-2.51 2.8-1.14 3.37-1.34 3.75-1.34.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.13-.01.2z"/>
                      </svg>
                      Telegram
                    </a>
                  </motion.li>
                  <motion.li variants={listItemVariants}>
                    <a 
                      href="mailto:info@technolium.ru"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center md:justify-start gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@technolium.ru
                    </a>
                  </motion.li>
                </ul>
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
