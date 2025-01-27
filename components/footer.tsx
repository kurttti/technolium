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
    <footer>
      <motion.div 
        className="w-full py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerContentVariants}
      >
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          <motion.div 
            className="mb-8 md:mb-0"
            variants={listItemVariants}
          >
            <Image
              src="/footerlogo.png"
              width={180}
              height={65}
              alt="Технолиум"
              style={{ width: "auto", height: "auto" }}
              priority={true}
              className="h-12 w-auto"
            />
          </motion.div>

          <motion.div 
            className="space-y-8 md:flex md:space-y-0 md:space-x-16"
            variants={listItemVariants}
          >
            <div>
              <h4 className="font-medium text-lg mb-4">Направления</h4>
              <ul className="space-y-3">
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
            </div>

            <div>
              <h4 className="font-medium text-lg mb-4">Информация</h4>
              <ul className="space-y-3">
                <motion.li variants={listItemVariants}>
                  <Link href="/professional-distribution" className="text-gray-600 hover:text-gray-900">
                    Трудоустройство
                  </Link>
                </motion.li>
                <motion.li variants={listItemVariants}>
                  <a 
                    href="https://yadi.sk/d/PHn7A1z2g-EfJw"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Публичная оферта
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
