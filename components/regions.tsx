"use client"

import { useState } from "react"
import Link from "next/link"
import { ConditionsModal } from "./conditions-modal"
import Image from "next/image"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export function Regions() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <motion.section 
      className="relative py-24 bg-[#1B324A]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechnoBack-1ylGEDVIuuHOSGweH5s8cAsOpMl7ud.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="bg-white p-8 sm:p-12 shadow-xl"
          variants={contentVariants}
        >
          <motion.h2 
            className="h2 text-[#1B324A] text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Регионы трудоустройства
            <br />и условия труда
          </motion.h2>

          <motion.p 
            className="text-body text-gray-600 text-center mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Для получения информации об установленных правилах взаимодействия выпускника и первоочередного работодателя
            оставьте заявку.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="text-body-sm bg-[#0095FF] text-white px-8 py-3 hover:bg-[#0080FF] transition-colors font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Запрос условий
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/program"
                className="text-body-sm border-2 border-[#1E4FCD] text-[#1E4FCD] px-8 py-3 hover:bg-[#1E4FCD] hover:text-white transition-colors text-center font-medium inline-block w-full"
              >
                Узнать программу
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ConditionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.section>
  )
}
