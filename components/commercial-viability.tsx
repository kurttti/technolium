import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function CommercialViability() {
  const stages = [
    {
      title: "Базовый навык",
      description: [
        "Работа с действующим партнером университета в разработке элементарных задач",
        'Присоединение к аутсорсинговому отделу разработки "Технолиум"',
      ],
      link: "/basic-skills",
    },
    {
      title: "Профессиональное распределение",
      description: [
        "Подготовка студента к общению с принимающей стороной (работодателем)",
        "Повторная проверка выполненных тестовых заданий",
        "Выход на рынок труда общеизвестными каналами",
      ],
      link: "/professional-distribution",
    },
    {
      title: "Действующая деятельность",
      description: [
        "Сохранение контактных связей путем организации сборов выпускников и совместных чатов/звонков",
        "Предоставление преподавателя на первый рабочий период",
      ],
      link: "/current-activity",
    },
  ]

  return (
    <motion.section 
      className="py-16 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Коммерческая пригодность
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <Link
                href={stage.link}
                className="block bg-white p-6 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl group h-full"
              >
                <motion.h3 
                  className="text-2xl font-bold mb-4 pb-2 border-b-2 border-[#1E4FCD] group-hover:text-[#1E4FCD] transition-colors"
                  variants={titleVariants}
                >
                  {stage.title}
                </motion.h3>
                <ul className="space-y-2 mb-6">
                  {stage.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      variants={listItemVariants}
                      custom={i}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.5 + (i * 0.1),
                          type: "spring",
                          stiffness: 260,
                          damping: 20 
                        }}
                      >
                        <ChevronRight className="w-5 h-5 mr-2 text-[#1E4FCD] flex-shrink-0 mt-1" />
                      </motion.div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.span 
                  className="inline-flex items-center text-[#1E4FCD] font-semibold group-hover:translate-x-2 transition-transform"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Подробнее
                  <ChevronRight className="w-5 h-5 ml-1" />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
