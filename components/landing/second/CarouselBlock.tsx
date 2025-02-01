'use client'

import React, { useState, useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import styles from './CarouselBlock.module.css'

const CarouselBlock = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const items = [
    {
      id: 1,
      title: '01 МАТЕРИАЛЫ',
      description: 'Все материалы доступны в личном кабинете сразу после оплаты',
      bullets: [
        'Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ',
        'Продолжительность каждой, отдельно взятой лекции - до 15 минут',
        'Выполнение тестовых и практических заданий от работодателей с первого месяца'
      ]
    },
    {
      id: 2,
      title: '02 ЛЕКЦИИ',
      description: 'Кураторы и менторы на связи каждый день. Помогут и подскажут',
      bullets: [
        'Живые встречи с преподавателем, в одном потоке до 22 человек',
        'Выделенное время под "вопрос-ответ" и знакомство с другими студентами',
        'Обсуждение коммерческой составляющей профессии'
      ]
    },
    {
      id: 3,
      title: '03 РЕПЕТИТОРЫ',
      description: 'Практические задания выполняются на реальных проектах',
      bullets: [
        'Дополнительные занятия 1 на 1 с ведущими преподавателями "Технолиум"',
        'Формат встречи определяется запросом студента',
        'Репетитор ведёт трудовую деятельность в IT на момент преподавания'
      ]
    }
  ]

  const handlePrevClick = () => {
    if (api) {
      api.scrollPrev()
    }
  }

  const handleNextClick = () => {
    if (api) {
      api.scrollNext()
    }
  }

  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] md:text-[64px] mb-8 md:mb-16 text-center tracking-wider" style={{ fontFamily: 'BOWLER' }}>
          ФОРМАТ ОБУЧЕНИЯ
        </h2>

        <div className="relative px-8 md:px-16">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            setApi={setApi}
            className="w-full max-w-5xl mx-auto [&_[role=region]]:border-none relative overflow-visible"
          >
            <CarouselContent className="-ml-2 md:-ml-4 [&>*]:border-none [&>*]:pl-2 md:[&>*]:pl-4">
              {items.map(item => (
                <CarouselItem key={item.id} className="basis-full">
                  <div className="p-1">
                    <div className="flex flex-col gap-4 md:gap-10 p-4 md:p-8 min-h-[400px] md:min-h-[400px]">
                      <h3 className="text-[24px] md:text-[40px] tracking-wider" style={{ fontFamily: 'BOWLER' }}>
                        {item.title}
                      </h3>
                      <div className="flex flex-col gap-3 md:gap-6">
                        <p className="text-base md:text-2xl leading-normal">
                          {item.description}
                        </p>
                        <ul className="flex flex-col gap-2 md:gap-3">
                          {item.bullets.map((bullet, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-base md:text-xl">—</span>
                              <span className="text-base md:text-xl leading-tight">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 -mx-8 md:-mx-16 flex items-center justify-between pointer-events-none z-20">
              <div className="pointer-events-auto">
                <button 
                  onClick={handlePrevClick}
                  className="flex items-center justify-center w-8 h-8 md:w-14 md:h-14 bg-white/90 hover:bg-white text-black rounded-full shadow-lg border border-black/10 transition-all hover:scale-110"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="pointer-events-auto">
                <button 
                  onClick={handleNextClick}
                  className="flex items-center justify-center w-8 h-8 md:w-14 md:h-14 bg-white/90 hover:bg-white text-black rounded-full shadow-lg border border-black/10 transition-all hover:scale-110"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute -bottom-4 md:bottom-4 left-0 right-0 flex justify-center gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                    current === index ? 'bg-black w-3 md:w-4' : 'bg-gray-400'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default CarouselBlock
