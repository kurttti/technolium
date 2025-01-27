"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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

export function Footer() {
  return (
    <footer className="bg-white text-gray-900">
      <motion.div 
        className="w-full py-8 sm:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerContentVariants}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div 
            className="flex flex-col items-center sm:items-start gap-8 sm:gap-12"
            variants={listItemVariants}
          >
            <div className="w-full flex justify-center sm:justify-start">
              <Image
                src="/footerlogo.png"
                width={120}
                height={43}
                alt="Технолиум"
                style={{ width: "auto", height: "auto" }}
                priority={true}
                className="h-6 sm:h-8 w-auto"
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-12">
              <div className="text-center sm:text-left">
                <h4 className="font-medium text-base sm:text-lg mb-4 text-gray-900">Направления</h4>
                <ul className="space-y-3">
                  <motion.li variants={listItemVariants} className="text-center sm:text-left">
                    <Link href="/specialties/machine-learning" className="text-sm sm:text-base text-gray-700 hover:text-gray-900">
                      Нейросети
                    </Link>
                  </motion.li>
                  <motion.li variants={listItemVariants} className="text-center sm:text-left">
                    <Link href="/specialties/software-testing" className="text-sm sm:text-base text-gray-700 hover:text-gray-900">
                      Тестирования ПО
                    </Link>
                  </motion.li>
                  <motion.li variants={listItemVariants} className="text-center sm:text-left">
                    <Link href="/specialties/information-security" className="text-sm sm:text-base text-gray-700 hover:text-gray-900">
                      Безопасность
                    </Link>
                  </motion.li>
                  <motion.li variants={listItemVariants} className="text-center sm:text-left">
                    <Link href="/specialties/web-development" className="text-sm sm:text-base text-gray-700 hover:text-gray-900">
                      Бекенд-разработка
                    </Link>
                  </motion.li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="font-medium text-base sm:text-lg mb-4 text-gray-900">Информация</h4>
                <ul className="space-y-3">
                  <motion.li variants={listItemVariants} className="text-center sm:text-left">
                    <Link href="/professional-distribution" className="text-sm sm:text-base text-gray-700 hover:text-gray-900">
                      Трудоустройство
                    </Link>
                  </motion.li>
                  <motion.li variants={listItemVariants} className="text-center sm:text-left">
                    <a 
                      href="https://yadi.sk/d/PHn7A1z2g-EfJw"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-sm sm:text-base text-gray-700 hover:text-gray-900"
                    >
                      Публичная оферта
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
