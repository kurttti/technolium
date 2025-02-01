"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/forms/application-form"

const cardVariants = {
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

export function AdmissionPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "preferential" | null>(null)

  const openModal = (plan: "standard" | "preferential") => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <section className="w-full pb-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 mb-0">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          План приема
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-0">
          {/* Standard Education Card */}
          <motion.div 
            className="border-2 border-[#1E4FCD] p-8 rounded-sm flex flex-col h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#1E4FCD]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Стандартное обучение
            </motion.h3>

            <motion.ul 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <li>Полный список специальностей</li>
              <li>Возможность проведения консультации для выбора направления</li>
              <li>Упрощённое заключение договора</li>
              <li>Диплом на базе высшего/средне-специального образования</li>
            </motion.ul>

            <motion.p 
              className="mb-8 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Приобретение доступно по заявке
              <br />
              на звонок с менеджером по продажам
            </motion.p>

            <motion.button
              onClick={() => openModal("standard")}
              className="bg-[#1E4FCD] text-white px-8 py-3 hover:bg-[#1733A5] transition-colors mt-auto w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Оставить заявку
            </motion.button>
          </motion.div>

          {/* Preferential Education Card */}
          <motion.div 
            className="bg-[#1E4FCD] text-white p-8 rounded-sm flex flex-col h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 pb-2 border-b-2 border-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Льготное обучение
            </motion.h3>

            <motion.ul 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <li>Компенсация до 55% от стоимости обучения</li>
              <li>
                Тестирование с менеджером приёма
                <br />
                <span className="text-sm">для определения в группу</span>
              </li>
              <li>
                Ограниченный выбор специальностей
                <br />
                <span className="text-sm">(уточнить у менеджера приёма)</span>
              </li>
              <li>
                Диплом на базе высшего/
                <br />
                средне-специального образования
              </li>
              <li>Упрощённое заключение договора</li>
            </motion.ul>

            <motion.button
              onClick={() => openModal("preferential")}
              className="bg-white text-[#1E4FCD] px-8 py-3 hover:bg-gray-100 transition-colors mt-auto w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Оставить заявку
            </motion.button>
          </motion.div>
        </div>
      </div>

      <ApplicationForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPlan={selectedPlan} />
    </section>
  )
}
