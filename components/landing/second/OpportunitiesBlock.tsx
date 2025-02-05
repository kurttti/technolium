'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const specializations = [
  'Машинное обучение',
  'Информационная безопасность',
  'Автоматизированное тестирование ПО',
  'Серверная Веб-разработка'
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export const OpportunitiesBlock = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] md:text-[64px] mb-8 md:mb-16 text-center tracking-wider" 
          style={{ fontFamily: 'BOWLER' }}
        >
          ВОЗМОЖНОСТИ ЛЬГОТНОГО ОБУЧЕНИЯ
        </motion.h2>

        <div className="flex flex-col md:flex-row">
          {/* Left side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 bg-white rounded-[20px] p-6 md:p-8 lg:p-12 border border-black"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[22px] md:text-[28px] lg:text-[32px] mb-4 md:mb-6 lg:mb-8 leading-tight break-words hyphens-auto" 
              style={{ fontFamily: 'BOWLER' }}
            >
              ВЫБОР ИНТЕРЕСНОЙ{' '}<br className="hidden lg:block" />СПЕЦИАЛИЗАЦИИ
            </motion.h3>

            <motion.ul 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="list-none space-y-2 mb-4 md:mb-6 lg:mb-8"
            >
              {specializations.map((spec, index) => (
                <motion.li 
                  key={index} 
                  variants={itemAnimation}
                  className="flex items-start gap-2"
                >
                  <span className="text-lg md:text-xl mt-1 shrink-0">•</span>
                  <span className="text-sm md:text-base text-gray-700 break-words hyphens-auto">{spec}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4 mb-4 md:mb-6 lg:mb-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-[#1E1B4B] text-white px-3 md:px-4 py-1.5 md:py-2 rounded text-sm md:text-base shrink-0"
              >
                -55 %
              </motion.div>
              <div className="text-lg md:text-xl lg:text-2xl break-words hyphens-auto" style={{ fontFamily: 'BOWLER' }}>
                ОТ ОБЩЕЙ СТОИМОСТИ
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 lg:mb-12 break-words hyphens-auto"
            >
              Льготное обучение позволяет проходить обучение
              <br className="hidden lg:block" />
              по комфортным условиям
            </motion.p>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4 md:space-y-6 lg:space-y-8"
            >
              <motion.div variants={itemAnimation}>
                <h4 className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-4 leading-tight break-words hyphens-auto" style={{ fontFamily: 'BOWLER' }}>
                  ПРОФОРИЕНТАЦИЯ
                </h4>
                <p className="text-sm md:text-base text-gray-700 break-words hyphens-auto">
                  Менеджер приема специально обученный специалист
                  <br className="hidden lg:block" />
                  профориентации и поможет с выбором специализации
                </p>
              </motion.div>

              <motion.div variants={itemAnimation}>
                <h4 className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-4 leading-tight break-words hyphens-auto" style={{ fontFamily: 'BOWLER' }}>
                  ДИПЛОМ
                </h4>
                <p className="text-sm md:text-base text-gray-700 break-words hyphens-auto">
                  На базе высшего/средне-специального
                  <br className="hidden lg:block" />
                  - о переподготовке
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="hidden lg:block lg:w-[600px] relative"
          >
            <Image
              src="/landing/second/gradient-2.jpg"
              alt="Gradient"
              fill
              className="object-cover rounded-[31px]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
