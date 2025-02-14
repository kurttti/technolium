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
    icon: '/main/language-icon/python.svg',
    content: {
      description: [
        'Python — это мощный и универсальный язык программирования, который открывает двери в самые разные сферы IT.',
        'На курсе по Python вы сможете освоить не только базовые навыки программирования, но и специализированные технологии, которые помогут вам стать востребованным специалистом.'
      ],
      logo: '/main/language-icon/python.svg'
    }
  },
  { 
    name: 'Javascript', 
    link: '#javascript',
    icon: '/main/language-icon/js.svg',
    content: {
      description: [
        'JavaScript — это один из самых популярных языков программирования, который используется для создания интерактивных веб-сайтов, мобильных приложений, серверных решений и даже игр.',
        'На курсе по JavaScript вы освоите не только основы программирования, но и современные технологии, которые помогут вам стать востребованным разработчиком.'
      ],
      logo: '/main/language-icon/js.svg'
    }
  },
  { 
    name: 'Golang', 
    link: '#golang',
    icon: '/main/language-icon/go.svg',
    content: {
      description: [
        'Go — это современный язык программирования, разработанный Google, который сочетает в себе простоту, производительность и мощь. Он идеально подходит для создания высоконагруженных приложений, микросервисов, облачных решений и многого другого.',
        'На курсе по Go вы освоите ключевые навыки, которые помогут вам стать востребованным разработчиком.'
      ],
      logo: '/main/language-icon/go.svg'
    }
  },
  { 
    name: 'C#', 
    link: '#csharp',
    icon: '/main/language-icon/csharp.svg',
    content: {
      description: [
        'C# (CSharp) — это мощный и универсальный язык программирования, разработанный Microsoft. Он широко используется для создания desktop-приложений, веб-сервисов, игр и мобильных приложений.',
        'На курсе по C# вы освоите ключевые навыки, которые помогут вам стать востребованным разработчиком.'
      ],
      logo: '/main/language-icon/csharp.svg'
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
      logo: '/prompt-master.png' // Убедитесь, что у вас есть это изображение
    }
  }
]

const ProfessionBlock = () => {
  const [activeLanguage, setActiveLanguage] = useState(languages[0])

  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-content w-full">
        <div className="flex flex-col items-center">
          <h1 
            className="text-h1 leading-h1 font-h1 text-center mb-4 tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            ВЫБИРАЙ ПРОФЕССИЮ
          </h1>
          <h1 
            className="text-h2 leading-h2 font-h2 text-center mb-section-margin tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            ПО ДУШЕ
          </h1>

          <div className="bg-white rounded-card p-card-padding shadow-card w-full max-w-content">
            <div className="flex flex-wrap justify-center gap-btns-gap mb-16">
              {languages.map((lang) => (
                <button
                  key={lang.name}
                  onClick={() => setActiveLanguage(lang)}
                  className={`flex items-center gap-btn-gap px-btn-padding-x py-btn-padding-y rounded-full text-base leading-body font-text transition-all duration-300
                    ${lang === activeLanguage 
                      ? lang.name === 'Javascript'
                        ? 'bg-white text-black border-2 border-black hover:bg-black/5' 
                        : 'bg-black text-white border-2 border-black hover:bg-black/90'
                      : 'bg-white text-black border-2 border-black/10 hover:border-black/30'}`}
                >
                  <Image 
                    src={lang.icon}
                    alt={`${lang.name} icon`}
                    width={24}
                    height={24}
                    className={`w-btn-icon-size h-btn-icon-size ${
                      lang === activeLanguage 
                        ? lang.name === 'Javascript'
                          ? 'brightness-0'
                          : 'brightness-0 invert'
                        : ''
                    }`}
                  />
                  {lang.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-2/3 space-y-8 px-8 py-8">
                {activeLanguage.content.description.map((text, index) => (
                  <h4
                    key={index} 
                    className="text-h4 leading-h4 font-h4 text-center lg:text-left"
                  >
                    {text}
                  </h4>
                ))}
                
                <div className="flex flex-col sm:flex-row gap-btn-gap pt-14 justify-center lg:justify-start">
                  <button className="flex-1 max-w-btn-max-width h-btn-height bg-black text-white text-base leading-body font-text rounded-full hover:bg-black/90 transition-all duration-300">
                    Смотреть программу обучения
                  </button>
                  <button className="flex-1 max-w-btn-max-width h-btn-height bg-white text-black text-base leading-body font-text border-2 border-black/10 rounded-full hover:border-black/30 transition-all duration-300">
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
                className="w-48 h-48 relative shrink-0 mt-8 lg:mt-0 lg:ml-16"
              >
                <Image
                  src={activeLanguage.content.logo}
                  alt={`${activeLanguage.name} logo`}
                  width={192}
                  height={192}
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