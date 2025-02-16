'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const steps = [
  {
    number: 1,
    title: 'Этап 1',
    content: 'Наш эксперт познакомится с вами лично, вместе определите цель перехода в IT и поможет с выбором профессии',
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
  const [direction, setDirection] = useState(1)

  const handlePrev = () => {
    setDirection(-1)
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  const handleNext = () => {
    setDirection(1)
    setActiveStep((prev) => (prev + 1) % steps.length)
  }

  // Варианты анимации для изображения
  const imageVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100
    }),
    center: {
      opacity: 1,
      x: 0
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100
    })
  }

  // Варианты анимации для текстового контента
  const textVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50
    }),
    center: {
      opacity: 1,
      x: 0
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50
    })
  }

  return (
    <section className="w-full mt-40 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-content w-full flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-none font-h1 text-center mb-[40px] lg:mb-[70px] tracking-banner"
          style={{ fontFamily: 'BOWLER' }}
        >
          ПОМОЖЕМ ВАМ
          <br />
          НА КАЖДОМ ЭТАПЕ
        </motion.h1>

        <div className="bg-[#F5F5F5] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] shadow-xl w-full flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Левая колонка: текст, кнопки и индикаторы */}
          <div className="flex-1 lg:w-1/2 h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:h-[600px] flex flex-col justify-between order-2 lg:order-1">
            {/* Контейнер текста занимает всё доступное пространство */}
            <div className="flex flex-col flex-grow justify-center">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeStep}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="w-full px-2 sm:px-4"
                >
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                    {steps[activeStep].title}
                  </h2>
                  <p className="text-2xl md:text-3xl leading-relaxed text-center">
                    {steps[activeStep].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Элементы управления располагаются в нижней части блока */}
            <div className="flex flex-col items-center mt-6 pb-4">
              <div className="flex gap-2 sm:gap-3 mb-4">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-black rounded-full text-white hover:bg-black/90 transition-colors text-[1.5rem]"
                  aria-label="Предыдущий этап"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-black rounded-full text-white hover:bg-black/90 transition-colors text-[1.5rem]"
                  aria-label="Следующий этап"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {/* Индикатор этапов */}
              <div className="flex gap-2 items-center justify-center">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeStep ? 1 : -1)
                      setActiveStep(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeStep === index ? 'bg-black' : 'bg-gray-300'
                    }`}
                    aria-label={`Шаг ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка: изображение */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-black rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeStep}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={steps[activeStep].image}
                    alt={`Этап ${steps[activeStep].number}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpStepsBlock 