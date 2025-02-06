'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const languages = [
  { name: 'JavaScript', icon: '/landing/second/language-icon/js.svg' },
  { name: 'Python', icon: '/landing/second/language-icon/python.svg' },
  { name: 'C#', icon: '/landing/second/language-icon/csharp.svg' },
  { name: 'Go', icon: '/landing/second/language-icon/go.svg' },
]

const listItemAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const languageIconAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const EducationPlanBlock = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] md:text-[64px] mb-8 md:mb-12 text-center tracking-wider" 
          style={{ fontFamily: 'BOWLER' }}
        >
          ПЛАН ПРИЕМА
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Стандартное обучение */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[45%] h-[300px] md:h-auto relative rounded-[18px] overflow-hidden"
            >
              <Image
                src="/landing/second/sad-notebook.jpg"
                alt="Ноутбук"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              variants={containerAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 p-6 md:p-8 rounded-[18px] border border-black bg-white"
            >
              <div className="flex flex-col gap-5">
                <motion.h3 
                  variants={listItemAnimation}
                  className="text-[24px] md:text-[32px] text-center md:text-left" 
                  style={{ fontFamily: 'BOWLER' }}
                >
                  СТАНДАРТНОЕ ОБУЧЕНИЕ
                </motion.h3>
                <motion.div 
                  variants={containerAnimation}
                  className="flex flex-col gap-3"
                >
                  <motion.div variants={listItemAnimation} className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base">Полный список специальностей</span>
                  </motion.div>
                  <motion.div variants={listItemAnimation} className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base">Возможность проведения консультации для выбора направления</span>
                  </motion.div>
                  <motion.div variants={listItemAnimation} className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base">Упрощённое заключение договора</span>
                  </motion.div>
                  <motion.div variants={listItemAnimation} className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base">Диплом на базе высшего/средне-специального образования</span>
                  </motion.div>
                  <motion.div variants={listItemAnimation} className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base font-medium">Приобретение доступно по заявке на звонок с менеджером по продажам</span>
                  </motion.div>
                </motion.div>

                {/* Languages */}
                <motion.div 
                  variants={containerAnimation}
                  className="flex justify-center md:justify-start gap-4 mt-auto pt-16 md:pt-23"
                >
                  {languages.map((lang) => (
                    <motion.div 
                      key={lang.name} 
                      variants={languageIconAnimation}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 relative"
                    >
                      <Image
                        src={lang.icon}
                        alt={lang.name}
                        fill
                        className="object-contain p-2"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Льготное обучение */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col md:flex-row"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[45%] h-[300px] md:h-auto relative rounded-[18px] overflow-hidden"
            >
              <Image
                src="/landing/second/two-man-with-notebook.jpg"
                alt="Студенты за ноутбуком"
                fill
                className="object-cover"
                style={{ 
                  objectFit: 'cover'
                }}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </motion.div>
            <motion.div 
              variants={containerAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 p-6 md:p-8 rounded-[18px] border border-black bg-[#0A0A2C] relative overflow-hidden"
            >
              <Image
                src="/landing/second/gradient-1.png"
                alt="Градиент"
                fill
                className="object-cover"
                priority
              />
              <div className="relative z-10">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-6">
                    <motion.h3 
                      variants={listItemAnimation}
                      className="text-[24px] md:text-[32px] text-white text-center md:text-left" 
                      style={{ fontFamily: 'BOWLER' }}
                    >
                      ЛЬГОТНОЕ ОБУЧЕНИЕ
                    </motion.h3>
                    <motion.div 
                      variants={containerAnimation}
                      className="flex flex-col gap-4"
                    >
                      <motion.div variants={listItemAnimation} className="flex items-center gap-3">
                        <span className="text-white">—</span>
                        <span className="text-white text-sm md:text-base">Тестирование с менеджером приёма для определения в группу</span>
                      </motion.div>
                      <motion.div variants={listItemAnimation} className="flex items-center gap-3">
                        <span className="text-white">—</span>
                        <span className="text-white text-sm md:text-base">Ограниченный выбор специальностей (уточнить у менеджера приёма)</span>
                      </motion.div>
                      <motion.div variants={listItemAnimation} className="flex items-center gap-3">
                        <span className="text-white">—</span>
                        <span className="text-white text-sm md:text-base">Диплом на базе высшего/средне-специального образования</span>
                      </motion.div>
                      <motion.div variants={listItemAnimation} className="flex items-center gap-3">
                        <span className="text-white">—</span>
                        <span className="text-white text-sm md:text-base">Упрощённое заключение договора</span>
                      </motion.div>
                    </motion.div>
                  </div>
                  <motion.div 
                    variants={listItemAnimation}
                    className="mt-auto pt-16 md:pt-24"
                  >
                    <div className="text-[24px] md:text-[32px] text-white text-center md:text-left" style={{ fontFamily: 'BOWLER' }}>
                      КОМПЕНСАЦИЯ ДО 55% ОТ СТОИМОСТИ ОБУЧЕНИЯ
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default EducationPlanBlock
