'use client'

import Image from 'next/image'
import { useState } from 'react'

const steps = [
  {
    number: 1,
    title: 'Этап 1',
    content: 'Наш эксперт познакомится с вами лично, вместе опередите цель перехода в IT и поможет с выбором профессии',
    image: '/main/help-1-step.jpg'
  },
  {
    number: 2,
    title: 'Этап 2',
    content: 'Составим индивидуальный план обучения, учитывая ваш опыт и время на изучение материала',
    image: '/main/help-1-step.jpg'
  },
  {
    number: 3,
    title: 'Этап 3',
    content: 'Начнем обучение с опытным наставником, который будет сопровождать вас на протяжении всего курса',
    image: '/main/help-1-step.jpg'
  },
  {
    number: 4,
    title: 'Этап 4',
    content: 'Выполните реальные проекты под руководством ментора, получите практический опыт разработки',
    image: '/main/help-1-step.jpg'
  },
  {
    number: 5,
    title: 'Этап 5',
    content: 'Подготовим ваше резюме, портфолио и поможем с трудоустройством в ведущие IT-компании',
    image: '/main/help-1-step.jpg'
  }
]

const HelpStepsBlock = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="w-full bg-white flex items-center justify-center px-4">
      <div className="max-w-content w-full">
        <div className="flex flex-col items-center">
          <h1 
            className="text-h1 leading-h1 font-h1 text-center mb-16 tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            ПОМОЖЕМ ВАМ<br />
            НА КАЖДОМ ЭТАПЕ
          </h1>

          <div className="bg-white rounded-[32px] shadow-xl w-full p-12">
            {/* Навигация по этапам */}
            <div className="flex gap-4 mb-16">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`px-8 py-3 rounded-full text-xl font-medium transition-all duration-300
                    ${activeStep === index 
                      ? 'bg-black text-white' 
                      : 'bg-[#F4F4F4] text-black hover:bg-[#E8E8E8]'}`}
                >
                  {step.title}
                </button>
              ))}
            </div>

            {/* Контент этапа */}
            <div className="flex items-center justify-between gap-24 relative">
              <div className="flex-1 h-[600px] flex flex-col">
                {/* Центрированный текст */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="max-w-2xl">
                    <p className="text-h4 leading-h4 font-h4 text-center">
                      {steps[activeStep].content}
                    </p>
                  </div>
                </div>
                
                {/* Кнопки навигации внизу */}
                <div className="flex gap-3 mt-auto pb-4">
                  <button
                    onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
                    className="w-12 h-12 flex items-center justify-center bg-black rounded-full text-white hover:bg-black/90 transition-colors"
                    aria-label="Предыдущий этап"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    className="w-12 h-12 flex items-center justify-center bg-black rounded-full text-white hover:bg-black/90 transition-colors"
                    aria-label="Следующий этап"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="w-[600px] h-[600px] bg-black rounded-[24px] overflow-hidden flex items-center justify-center">
                <Image
                  src={steps[activeStep].image}
                  alt={`Этап ${steps[activeStep].number}`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpStepsBlock 