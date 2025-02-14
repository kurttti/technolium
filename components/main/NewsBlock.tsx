'use client'

import { useState } from 'react'

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
    title: 'Технолиум запускает курсы по кибербезопасности для всех',
    content: 'Онлайн-университет Технолиум объявил о запуске новой инициативы в области кибербезопасности. С учетом уровня знаний студентов, курсы по основам кибербезопасности станут доступны всем студентам университета системы для защиты личной информации и профессионального развития.',
    tag: 'НОВАЯ ПРОГРАММА',
    tagColor: 'bg-[#2B076E]'
  },
  {
    category: 'JAVA',
    title: 'Технолиум провел опрос среди студентов и работодателей о востребованности языка Java',
    content: 'Исследование направлено на выявление актуальности старых версий Java по сравнению с более современными технологиями. По результатам исследования университет планирует обновить учебные программы с учетом текущих тенденций и потребностей рынка.',
    tag: 'ИССЛЕДОВАНИЕ',
    tagColor: 'bg-[#2B076E]'
  },
  {
    category: 'GO',
    title: 'Онлайн-университет Технолиум объявил о приостановке набора на обучающие курсы по направлению Go',
    content: 'Это решение связано с обновлением учебной программы, что позволит предложить студентам более современные и актуальные знания и навыки. Университет сообщил, что все студенты, которые уже проходят обучение по данной программе или завершают ее, смогут воспользоваться новыми учебными материалами абсолютно бесплатно.',
    tag: 'ОБНОВЛЕНИЕ',
    tagColor: 'bg-[#2B076E]'
  }
]

const NewsBlock = () => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

  return (
    <section className="w-full bg-white">
      <div className="max-w-content mx-auto px-block-padding-xs md:px-block-padding-md">
        <h1 
          className="text-h1 leading-h1 font-h1 text-center mb-16 tracking-banner"
          style={{ fontFamily: 'BOWLER' }}
        >
          НОВОСТИ
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div 
              key={index}
              className="bg-black text-white rounded-[20px] p-8 flex flex-col min-h-[420px]"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm">
                  {item.category}
                </span>
                <span className={`px-4 py-2 ${item.tagColor} rounded-full text-sm`}>
                  {item.tag}
                </span>
              </div>

              <h2 className="text-h4 leading-h4 font-h4 mb-6">
                {item.title}
              </h2>

              <p className="text-base leading-body font-text text-gray-400">
                {item.content}
              </p>

              <button 
                onClick={() => setActiveIndex(index)}
                className="self-start text-white bg-transparent hover:bg-white/10 px-6 py-2 rounded-full transition-colors text-sm"
              >
                Читать полностью...
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {typeof activeIndex === 'number' && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setActiveIndex(undefined)}
        >
          <div 
            className="bg-white rounded-[20px] p-8 max-w-2xl max-h-[80vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                {news[activeIndex].category}
              </span>
              <button
                onClick={() => setActiveIndex(undefined)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <h2 className="text-subheading font-bold mb-6">
              {news[activeIndex].title}
            </h2>

            <p className="text-quote leading-relaxed text-gray-800">
              {news[activeIndex].content}
            </p>
          </div>
        </div>
      )}
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