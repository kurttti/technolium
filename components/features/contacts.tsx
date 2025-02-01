"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ContactFormModal } from "@/components/forms/contact-form-modal"
import { EmailButton } from "@/components/features/email-button"

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

export function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div 
        className="w-full bg-[#0095FF] py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center">Вопросы и предложения</h2>
        </div>
      </motion.div>

      <div className="bg-[#F8F8F8] py-12 md:py-16">
        <motion.div 
          className="max-w-3xl mx-auto px-4"
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

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
