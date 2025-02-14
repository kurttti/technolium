'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface NewsItem {
  category: string
  title: string
  content: string
  tag: string
  tagColor: string
}

const news: NewsItem[] = [
  {
    category: 'КИБЕРБЕЗОПАСНОСТЬ',
    title: 'Технолиум запускает курсы по кибербезопасности для всех студентов',
    content: 'Онлайн-университет Технолиум объявил о запуске новой инициативы, направленной на повышение уровня знаний студентов в области кибербезопасности. С этого месяца все студенты университета смогут пройти курсы по защите информации и предотвращению кибератак.',
    tag: 'НОВАЯ ПРОГРАММА',
    tagColor: 'bg-[#2B076E]'
    
  },
  {
    category: 'JAVA',
    title: 'Онлайн-университет Технолиум запустил опрос среди студентов и работодателей о востребованности языка Java',
    content: 'Исследование направлено на выявление актуальности старых версий Java по сравнению с более новыми и современными технологиями. В рамках этого исследования университет стремится понять текущие тенденции и потребности рынка труда.....',
    tag: 'ИССЛЕДОВАНИЕ',
    tagColor: 'bg-[#2B076E]'
  },
  {
    category: 'Новая программа',
    title: 'Онлайн-университет Технолиум запустил инновационную программу "Технолиум.Специалитеты"',
    content: 'В рамках новой образовательной инициативы онлайн-университет Технолиум представил уникальную программу "Технолиум.Специалитеты". Эта программа предоставляет студентам возможность после освоения базовой части курса самостоятельно выбирать направление для дальнейшего углубленного изучения.',
    tag: 'ОБНОВЛЕНИЕ',
    tagColor: 'bg-[#2B076E]'
  },
  {
    category: 'GO',
    title: 'Онлайн-университет Технолиум объявило приостановке набора на обучающие курсы по направлению Go',
    content: 'Это решение связано с обновлением учебной программы, что позволит предложить студентам более современные и актуальные знания и навыки. Университет сообщил, что все студенты, которые уже проходят обучение по данной программе или завершают ее, смогут воспользоваться новыми учебными материалами абсолютно бесплатно.',
    tag: 'ОБНОВЛЕНИЕ',
    tagColor: 'bg-[#2B076E]'
  }
]

const NewsBlock = () => {
  return (
    <section className="w-full overflow-visible py-section-margin">
      <div className="max-w-content mx-auto px-block-padding-xs md:px-block-padding-md">
        <div className="py-20">
          <div className="flex space-x-6 relative">
            {news.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex-shrink-0 w-[400px] min-h-[300px] rounded-[32px] p-8
                  ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}
                  cursor-pointer
                `}
                initial={{ marginLeft: index !== 0 ? '-100px' : '0' }}
                whileHover={{
                  zIndex: 50,
                  scale: 1.1,
                  marginLeft: '0px',
                  marginRight: '0px',
                  transition: { 
                    duration: 0.3,
                    marginLeft: { duration: 0 },
                    marginRight: { duration: 0 }
                  }
                }}
                style={{
                  marginLeft: index !== 0 ? '-100px' : '0',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Link href={`/news/${index}`} className="absolute inset-0 z-10">
                  <span className="sr-only">Читать новость</span>
                </Link>

                <div className="flex flex-col h-full relative z-20">
                  {/* Тег категории */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium">
                      {item.category}
                    </span>
                    <span className={`px-4 py-1 rounded-full text-xs ${item.tagColor} text-white`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  {/* Контент */}
                  <p className="text-base opacity-80">
                    {item.content}
                  </p>

                  {/* Кнопка "Читать полностью" */}
                  <div className="mt-auto pt-6">
                    <span className={`inline-block text-base
                      ${index % 2 === 0 ? 'text-white' : 'text-black'}
                      hover:opacity-80 transition-opacity
                    `}>
                      Читать полностью...
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsBlock

// Добавьте этот CSS в ваш глобальный стиль
const styles = `
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
` 