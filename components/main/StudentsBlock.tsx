'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const StudentsBlock = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="max-w-content w-full px-block-padding-xs md:px-block-padding-md">
        <div className="flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[32px] sm:text-[40px] lg:text-h1 leading-none lg:leading-h1 font-h1 text-center mb-[40px] lg:mb-[70px] tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            НАШИ УЧЕНИКИ
          </motion.h1>

          <div className="w-full max-w-content">
            <div className="relative w-full aspect-video">
              <Image
                src="/main/naz-response.png"
                alt="Отзывы учеников"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsBlock 