"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function HistoryBlock() {
  return (
    <motion.section
      className="w-full rounded-card px-4 sm:px-6 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="bg-gradient-dark max-w-content mx-auto rounded-[20px] sm:rounded-[32px] flex items-center">
        <div className="text-white w-full px-5 sm:px-8 md:px-12 lg:px-[100px] py-8 sm:py-10 md:py-12 lg:py-[80px]">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight lg:leading-h1 font-h1 text-center mb-6 sm:mb-8 lg:mb-[50px] tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            История университета
          </motion.h1>

          <div className="max-w-[600px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] mx-auto mb-6 sm:mb-8 lg:mb-[50px] space-y-4">
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed break-words">
              Становление Университета Технолиум. Это история о том, как разные таланты и подходы к жизни могут привести к успешному сотрудничеству, если за действиями стоит искреннее желание развиваться и учиться друг у друга.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed break-words">
              Началось все с мечты, которая была достигнута за счет 100 потов. Когда Назар был школьником, взял как подработку разработку сайта на html и css. Как и у всех, получалось криво, но ему нравилось и он пошел учиться на специальность «Математика и компьютерные науки» и параллельно изучал Java, на стажировке делал проекты именно по...
            </p>
          </div>

          <div className="text-center sm:text-left max-w-[600px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] mx-auto">
            <Link 
              href="/history"
              className="inline-block text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed hover:opacity-80 transition-opacity underline"
            >
              Читать далее...
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 