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
    icon: '/main/language-icon/python.png',
    content: {
      description: [
        'Python — высокоуровневый язык программирования общего назначения. Его философия делает упор на читаемость кода.',
        'Средняя зарплата: 180.000 ₽\nОпыт: не требуется'
      ],
      logo: '/main/python-master.png'
    }
  },
  {
    name: 'Javascript',
    link: '#javascript',
    icon: '/main/language-icon/js.png',
    content: {
      description: [
        'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.',
        'Средняя зарплата: 150.000 ₽\nОпыт: не требуется'
      ],
      logo: '/main/js-master.png'
    }
  },
  {
    name: 'Golang',
    link: '#golang',
    icon: '/main/language-icon/go.png',
    content: {
      description: [
        'Go — компилируемый язык программирования, разработанный внутри компании Google.',
        'Средняя зарплата: 250.000 ₽\nОпыт: не требуется'
      ],
      logo: '/main/go-master.png'
    }
  },
  {
    name: 'C#',
    link: '#csharp',
    icon: '/main/language-icon/csharp.png',
    content: {
      description: [
        'C# — объектно-ориентированный язык программирования общего назначения.',
        'Средняя зарплата: 200.000 ₽\nОпыт: не требуется'
      ],
      logo: '/main/csharp-master.png'
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
    <section className="w-full bg-white flex items-center justify-center">
      <div className="max-w-content w-full">
        <div className="flex flex-col items-center">
          <h1 
            className="text-h1 leading-h1 font-h1 text-center tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            ВЫБИРАЙ ПРОФЕССИЮ
          </h1>
          <h1 
            className="text-h2 leading-h2 font-h2 text-center tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            ПО ДУШЕ
          </h1>

          <div className="bg-white rounded-card py-[100px] p-block-padding-md shadow-card w-full max-w-content mt-block-spacing-xl">
            <div className="flex flex-wrap justify-center gap-btns-gap">
              {languages.map((lang) => (
                <button
                  key={lang.name}
                  onClick={() => setActiveLanguage(lang)}
                  className={`flex items-center gap-btn-gap px-btn-padding-x py-btn-padding-y rounded-full text-base leading-body font-text transition-all duration-300
                    ${lang === activeLanguage 
                      ? 'bg-black text-white border-2 border-black hover:bg-black/90'
                      : 'bg-white text-black border-2 border-black/10 hover:border-black/30'}`}
                >
                  <div className={`relative w-btn-icon-size h-btn-icon-size ${
                    (lang.name === 'Javascript' || lang.name === 'Python') && lang === activeLanguage
                      ? `after:content-["${lang.name === 'Javascript' ? 'JS' : ''}"] after:absolute after:inset-0 after:text-black after:flex after:items-center after:justify-center after:text-[10px] after:font-bold`
                      : ''
                  }`}>
                    <Image 
                      src={lang.icon}
                      alt={`${lang.name} icon`}
                      width={24}
                      height={24}
                      className={`w-btn-icon-size h-btn-icon-size ${
                        lang === activeLanguage 
                          ? lang.name === 'Javascript'
                            ? 'brightness-0 invert'
                            : lang.name === 'Python'
                              ? 'brightness-0 invert'
                              : 'brightness-0 invert'
                          : 'brightness-100'
                      }`}
                    />
                  </div>
                  {lang.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-block-spacing-lg">
              <div className="w-full lg:w-2/3 px-8">
                {activeLanguage.content.description.map((text, index) => (
                  <h4
                    key={index} 
                    className="text-h4 leading-h4 font-h4 text-center lg:text-left"
                  >
                    {text}
                  </h4>
                ))}
                
                <div className="flex flex-col sm:flex-row gap-btn-gap mt-block-spacing-lg justify-center lg:justify-start">
                  <button className="flex-1 max-w-[500px] h-[80px] bg-black text-white text-[30px] leading-normal font-text rounded-full hover:bg-black/90 transition-all duration-300 whitespace-nowrap px-10">
                    Смотреть программу обучения
                  </button>
                  <button className="flex-1 max-w-[500px] h-[80px] bg-white text-black text-[30px] leading-normal font-text border-2 border-black/10 rounded-full hover:border-black/30 transition-all duration-300 whitespace-nowrap px-10">
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