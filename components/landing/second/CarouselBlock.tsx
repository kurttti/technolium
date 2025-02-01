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
        <h2 className="text-[40px] mb-12" style={{ fontFamily: 'BOWLER' }}>
          ФОРМАТ ОБУЧЕНИЯ
        </h2>
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto [&_[role=region]]:border-none"
        >
          <CarouselContent className="-ml-4 [&>*]:border-none [&>*]:pl-4">
            {items.map(item => (
              <CarouselItem key={item.id} className="basis-full">
                <div className="p-1">
                  <div className="flex flex-col gap-8 p-6">
                    <h3 className="text-[32px]" style={{ fontFamily: 'BOWLER' }}>
                      {item.title}
                    </h3>
                    <div className="flex flex-col gap-4">
                      {item.points.map((point, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-xl">—</span>
                          <p className="text-xl">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselBlock
