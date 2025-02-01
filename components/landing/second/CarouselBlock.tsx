'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import styles from './CarouselBlock.module.css'

const CarouselBlock = () => {
  const items = [
    {
      id: 1,
      title: '01 МАТЕРИАЛЫ',
      points: [
        'Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ',
        'Продолжительность каждой, отдельно взятой лекции - до 15 минут',
        'Выполнение тестовых и практических заданий от работодателей с первого месяца'
      ]
    },
    {
      id: 2,
      title: '02 ЛЕКЦИИ',
      points: [
        'Живые встречи с преподавателем, в одном потоке до 22 человек',
        'Выделенное время под "вопрос-ответ" и знакомство с другими студентами',
        'Обсуждение коммерческой составляющей профессии'
      ]
    },
    {
      id: 3,
      title: '03 РЕПЕТИТОРЫ',
      points: [
        'Дополнительные занятия 1 на 1 с ведущими преподавателями "Технолиум"',
        'Формат встречи определяется запросом студента',
        'Репетитор ведёт трудовую деятельность в IT на момент преподавания'
      ]
    }
  ]

  return (
    <div className={styles['carousel-block']}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[64px] mb-16 text-center tracking-wider" style={{ fontFamily: 'BOWLER' }}>
          ФОРМАТ ОБУЧЕНИЯ
        </h2>
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto [&_[role=region]]:border-none relative"
        >
          <CarouselContent className="-ml-4 [&>*]:border-none [&>*]:pl-4">
            {items.map(item => (
              <CarouselItem key={item.id} className="basis-full">
                <div className="p-1">
                  <div className="flex flex-col gap-10 p-8 min-h-[400px]">
                    <h3 className="text-[40px] tracking-wider" style={{ fontFamily: 'BOWLER' }}>
                      {item.title}
                    </h3>
                    <div className="flex flex-col gap-6">
                      {item.points.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-2xl font-light">—</span>
                          <p className="text-2xl leading-normal">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-none w-14 h-14 bg-transparent hover:bg-transparent text-black absolute left-[-100px]" />
          <CarouselNext className="border-none w-14 h-14 bg-transparent hover:bg-transparent text-black absolute right-[-100px]" />
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselBlock
