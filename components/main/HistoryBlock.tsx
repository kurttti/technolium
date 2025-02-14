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
      className="w-full rounded-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="bg-gradient-dark max-w-content mx-auto px-[150px] py-[150px]">
        <div className="text-white">
          <h2 
            className="text-h2 leading-h2 font-h2 text-center uppercase tracking-banner mb-[64px]"
            style={{ fontFamily: 'BOWLER' }}
          >
            История университета
          </h2>

          <div className="mb-[80px]">
            <p className="text-[30px] leading-normal">
              Становление Университета Технолиум. Это история о том, как разные таланты и подходы к жизни могут привести к успешному сотрудничеству, если за действиями стоит искреннее желание развиваться и учиться друг у друга.
            </p>
            <p className="text-[30px] leading-normal mt-4">
              Началось все с мечты, которая была достигнута за счет 100 потов. Когда Назар был школьником, взял как подработку разработку сайта на html и css. Как и у всех, получалось криво, но ему нравилось и он пошел учиться на специальность «Математика и компьютерные науки» и параллельно изучал Java, на стажировке делал проекты именно по...
            </p>
          </div>

          <Link 
            href="/history"
            className="text-[30px] leading-normal hover:opacity-80 transition-opacity"
          >
            Читать далее...
          </Link>
        </div>
      </div>
    </motion.section>
  )
} 