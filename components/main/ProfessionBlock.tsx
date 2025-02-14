'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

type Language = {
  name: string
  link: string
  icon: string
  content: {
    description: string[]
    logo: string
  }
}

const languages: Language[] = [
  {
    name: 'Python',
    link: '#python',
    icon: 'main/language-icon/python.svg',
    content: {
      description: [
        'Python — это мощный и универсальный язык программирования, который открывает дверив самые разные сферы IT. ',
        'На курсе по Python вы сможете освоить не только базовые навыки программирования, но и специализированные технологии, которые помогут вам стать востребованным специалистом.'
      ],
      logo: '/main/language-icon/python.png'
    }
  },
  {
    name: 'Javascript',
    link: '#javascript',
    icon: '/main/language-icon/js.png',
    content: {
      description: [
        'JavaScript — это один из самых популярных языков программирования, который используется для создания интерактивных веб-сайтов, мобильных приложений, серверных решений и даже игр.',
        'На курсе по JavaScript вы освоите не только основы программирования, но и современные технологии, которые помогут вам стать востребованным разработчиком.'
      ],
      logo: '/main/language-icon/js.png'
    }
  },
  {
    name: 'Golang',
    link: '#golang',
    icon: '/main/language-icon/go.png',
    content: {
      description: [
        'Go — это современный язык программирования, разработанный Google, который сочетает в себе простоту, производительность и мощь. Он идеально подходит для создания высоконагруженных приложений, микросервисов, облачных решений и многого другого.',
        'На курсе по Go вы освоите ключевые навыки, которые помогут вам стать востребованным разработчиком.'
      ],
      logo: '/main/language-icon/go.png'
    }
  },
  {
    name: 'C#',
    link: '#csharp',
    icon: '/main/language-icon/csharp.png',
    content: {
      description: [
        'C# (CSharp) — это мощный и универсальный язык программирования, разработанный Microsoft. Он широко используется для создания desktop-приложений, веб-сервисов, игр и мобильных приложений.',
        'На курсе по C# вы освоите ключевые навыки, которые помогут вам стать востребованным разработчиком.'
      ],
      logo: '/main/language-icon/csharp.png'
    }
  },
  { 
    name: 'Нейросети', 
    link: '#neural',
    icon: '/main/language-icon/python.svg',
    content: {
      description: [
        'Бесплатный курс по использованию нейросетей поможет вам понять, как составить запрос таким образом, чтобы вы получили наилучший результат от своего помощника.',
        'Длительность: 3 дня\nФормат: Теория + конспект + практика с обратной связью'
      ],
      logo: '/main/language-icon/python.svg'
    }
  }
]

const ProfessionBlock = () => {
  const [activeLanguage, setActiveLanguage] = useState(languages[0])

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-content w-full mx-auto">
        <div className="flex flex-col items-center">
          <h1 
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-h1 leading-tight lg:leading-h1 font-h1 text-center tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            ВЫБИРАЙ ПРОФЕССИЮ
          </h1>
          <h1 
            className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-h2 leading-tight lg:leading-h2 font-h2 text-center tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            ПО ДУШЕ
          </h1>

          <div className="bg-white rounded-[32px] py-8 sm:py-12 md:py-16 lg:py-[100px] p-4 sm:p-6 md:p-8 lg:p-block-padding-md shadow-card w-full max-w-content mt-8 sm:mt-12 md:mt-16 lg:mt-block-spacing-xl">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-btns-gap">
              {languages.map((lang) => (
                <button
                  key={lang.name}
                  onClick={() => setActiveLanguage(lang)}
                  className={`flex items-center gap-2 sm:gap-btn-gap px-3 sm:px-4 md:px-btn-padding-x py-2 sm:py-2.5 md:py-btn-padding-y rounded-full text-sm sm:text-base leading-body font-text transition-all duration-300
                    ${lang === activeLanguage 
                      ? 'bg-black text-white border-2 border-black hover:bg-black/90'
                      : 'bg-white text-black border-2 border-black/10 hover:border-black/30'}`}
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-btn-icon-size md:h-btn-icon-size">
                    <Image 
                      src={lang.icon}
                      alt={`${lang.name} icon`}
                      width={24}
                      height={24}
                      className={`w-full h-full ${
                        lang === activeLanguage 
                          ? 'brightness-0 invert'
                          : 'brightness-100'
                      }`}
                    />
                  </div>
                  {lang.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-block-spacing-lg">
              <div className="w-full lg:w-2/3 px-4 sm:px-6 md:px-8">
                {activeLanguage.content.description.map((text, index) => (
                  <h4
                    key={index} 
                    className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal font-normal text-center lg:text-left mb-4"
                  >
                    {text}
                  </h4>
                ))}
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-btn-gap mt-6 sm:mt-8 md:mt-12 lg:mt-block-spacing-lg justify-center lg:justify-start">
                  <button className="w-full sm:flex-1 max-w-[500px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] bg-black text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-normal font-text rounded-full hover:bg-black/90 transition-all duration-300 whitespace-nowrap px-4 sm:px-6 md:px-8 lg:px-10">
                    Смотреть программу обучения
                  </button>
                  <button className="w-full sm:flex-1 max-w-[500px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] bg-white text-black text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-normal font-text border-2 border-black/10 rounded-full hover:border-black/30 transition-all duration-300 whitespace-nowrap px-4 sm:px-6 md:px-8 lg:px-10">
                    Начать учиться
                  </button>
                </div>
              </div>

              <motion.div 
                key={activeLanguage.name}
                initial={{ x: 100, opacity: 0, rotate: 20 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                exit={{ x: -100, opacity: 0, rotate: -20 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.5
                }}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 relative shrink-0 mt-6 sm:mt-8 lg:mt-0 lg:ml-16"
              >
                <Image
                  src={activeLanguage.content.logo}
                  alt={`${activeLanguage.name} logo`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionBlock 