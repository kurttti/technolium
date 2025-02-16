'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const steps = [
  {
    number: 1,
    title: 'Этап 1',
    content: 'Наш эксперт познакомится с вами лично, вместе опередите цель перехода в IT и поможет с выбором профессии',
    image: '/main/help-you/first.jpg'
  },
  {
    number: 2,
    title: 'Этап 2',
    content: 'Составим индивидуальный план обучения, учитывая ваш опыт и время на изучение материала',
    image: '/main/help-you/second.png'
  },
  {
    number: 3,
    title: 'Этап 3',
    content: 'Начнем обучение с опытным наставником, который будет сопровождать вас на протяжении всего курса',
    image: '/main/help-you/third.png'
  },
  {
    number: 4,
    title: 'Этап 4',
    content: 'Выполните реальные проекты под руководством ментора, получите практический опыт разработки',
    image: '/main/help-you/fourth.png'
  },
  {
    number: 5,
    title: 'Этап 5',
    content: 'Подготовим ваше резюме, портфолио и поможем с трудоустройством в ведущие IT-компании',
    image: '/main/help-you/fifth.png'
  }
]

const HelpStepsBlock = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-content w-full flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[32px] sm:text-[40px] lg:text-h1 leading-none lg:leading-h1 font-h1 text-center tracking-banner"
          style={{ fontFamily: 'BOWLER' }}
        >
          ПОМОЖЕМ ВАМ<br />
          НА КАЖДОМ ЭТАПЕ
        </motion.h1>

        <div className="bg-[#F8F8F8] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] shadow-xl w-full flex flex-col lg:flex-row items-center justify-between p-6 px-12 gap-6 sm:gap-8 md:gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-black rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden">
              <Image
                src={steps[activeStep].image}
                alt={`Этап ${steps[activeStep].number}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1 lg:w-1/2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:h-[600px] flex flex-col w-full">
            <div className="flex-1 flex items-center justify-center lg:justify-start">
              <div className="max-w-2xl px-4">
                <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-h4 leading-normal lg:leading-h4 font-h4 text-center lg:text-left">
                  {steps[activeStep].content}
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 sm:gap-3 mt-auto pb-4 justify-center lg:justify-start">
              <button
                onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-black rounded-full text-white hover:bg-black/90 transition-colors"
                aria-label="Предыдущий этап"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-black rounded-full text-white hover:bg-black/90 transition-colors"
                aria-label="Следующий этап"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpStepsBlock 