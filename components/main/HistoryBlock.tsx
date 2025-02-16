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
      <div className="bg-gradient-dark max-w-content mx-auto rounded-[32px] px-6 sm:px-8 md:px-12 lg:px-[150px] py-12 sm:py-16 md:py-20 lg:py-[150px]">
        <div className="text-white">
          <h2 
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-h2 leading-tight lg:leading-h2 font-h2 text-center uppercase tracking-banner mb-8 sm:mb-10 md:mb-12 lg:mb-[64px]"
            style={{ fontFamily: 'BOWLER' }}
          >
            История университета
          </h2>

          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-[80px] mx-auto">
            <p className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-normal text-left">
              Становление Университета Технолиум. Это история о том, как разные таланты и подходы к жизни могут привести к успешному сотрудничеству, если за действиями стоит искреннее желание развиваться и учиться друг у друга.
            </p>
            <p className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-normal mt-4 text-left">
              Началось все с мечты, которая была достигнута за счет 100 потов. Когда Назар был школьником, взял как подработку разработку сайта на html и css. Как и у всех, получалось криво, но ему нравилось и он пошел учиться на специальность «Математика и компьютерные науки» и параллельно изучал Java, на стажировке делал проекты именно по...
            </p>
          </div>

          <div className="text-center sm:text-left">
            <Link 
              href="/history"
              className="inline-block text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-normal hover:opacity-80 transition-opacity underline"
            >
              Читать далее...
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 