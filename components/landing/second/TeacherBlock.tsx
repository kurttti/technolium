'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const facts = [
  {
    title: 'Ведущий преподаватель',
    subtitle: 'Университета Технолиум'
  },
  {
    title: 'Более 6 лет в коммерческой',
    subtitle: 'разработке'
  },
  {
    title: 'тут какой-то еще факт',
    subtitle: ''
  },
  {
    title: 'Степень магистра в области',
    subtitle: 'математики и computer science'
  }
]

const FactItem = ({ fact, index, isMobile = false }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`flex items-start gap-4 ${isMobile ? 'justify-center md:justify-start' : ''}`}
  >
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-2xl"
    >
      —
    </motion.div>
    <div>
      <motion.div 
        className="text-base md:text-lg font-medium"
        style={{ fontFamily: 'IBM Plex Sans KR' }}
      >
        {fact.title}
      </motion.div>
      {fact.subtitle && (
        <motion.div 
          className="text-base md:text-lg"
          style={{ fontFamily: 'IBM Plex Sans KR' }}
        >
          {fact.subtitle}
        </motion.div>
      )}
    </div>
  </motion.div>
)

export const TeacherBlock = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 lg:items-center"
        >
          {/* Left side - Circle */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-[400px] aspect-square bg-black rounded-[31px] flex items-center justify-center relative overflow-hidden"
          >
            {/* Квадратная маска */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3
              }}
              className="absolute inset-0 rounded-[31px] overflow-hidden bg-[#151B4D]"
            >
              {/* Круглая маска */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6
                }}
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(85.14deg, #594A73 9.35%, #151B4D 91.08%)'
                }}
              >
                {/* Изображение преподавателя */}
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.9
                  }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/landing/second/boss.svg"
                    alt="Балоян Назар - Senior Python Developer"
                    fill
                    className="object-contain object-center"
                    style={{ transform: 'translateY(20px)' }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Info */}
          <div className="flex-1 md:flex md:items-center lg:block">
            {/* Name and title section */}
            <div className="flex flex-col gap-4 w-full mt-2 md:mt-0">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[32px] md:text-[40px] text-center lg:text-left leading-none font-bold"
                style={{ fontFamily: 'BOWLER' }}
              >
                БАЛОЯН НАЗАР
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#1E1B4B] text-white px-4 py-2 rounded w-fit mx-auto lg:mx-0"
              >
                Senior Python Developer
              </motion.div>

              {/* Facts section - Only visible on desktop */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden lg:block mt-8"
              >
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  {facts.map((fact, index) => (
                    <FactItem key={index} fact={fact} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Facts section - Hidden on desktop */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 md:mt-12 flex justify-center lg:hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px]">
            {facts.map((fact, index) => (
              <FactItem key={index} fact={fact} index={index} isMobile={true} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
