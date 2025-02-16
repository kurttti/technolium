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
      <div className="bg-gradient-dark max-w-content mx-auto rounded-[32px] px-4 sm:px-6 md:px-8 lg:px-[150px] py-8 sm:py-12 md:py-16 lg:py-[150px] flex items-center">
        <div className="text-white text-center">
          <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-h1 leading-none lg:leading-h1 font-h1 text-center mb-[40px] lg:mb-[70px] tracking-banner"
          style={{ fontFamily: 'BOWLER' }}
        >
            История университета
          </motion.h1>

          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-[80px] max-w-full lg:max-w-[900px] xl:max-w-[1200px] text-justify">
            <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] leading-normal">
              Становление Университета Технолиум. Это история о том, как разные таланты и подходы к жизни могут привести к успешному сотрудничеству, если за действиями стоит искреннее желание развиваться и учиться друг у друга.
            </p>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] leading-normal mt-4">
              Началось все с мечты, которая была достигнута за счет 100 потов. Когда Назар был школьником, взял как подработку разработку сайта на html и css. Как и у всех, получалось криво, но ему нравилось и он пошел учиться на специальность «Математика и компьютерные науки» и параллельно изучал Java, на стажировке делал проекты именно по...
            </p>
          </div>

          <div className="text-left">
            <Link 
              href="/history"
              className="inline-block text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] leading-normal hover:opacity-80 transition-opacity underline"
            >
              Читать далее...
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 