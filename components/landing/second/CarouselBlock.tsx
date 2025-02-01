'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import styles from './CarouselBlock.module.css'

const CarouselBlock = () => {
  const items = [
    {
      id: 1,
      title: '01 МАТЕРИАЛЫ',
      description: 'Все материалы доступны в личном кабинете сразу после оплаты'
    },
    {
      id: 2,
      title: '02 ПОДДЕРЖКА',
      description: 'Кураторы и менторы на связи каждый день. Помогут и подскажут'
    },
    {
      id: 3,
      title: '03 ПРАКТИКА',
      description: 'Практические задания выполняются на реальных проектах'
    }
  ]

  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] md:text-[64px] mb-8 md:mb-16 text-center tracking-wider" style={{ fontFamily: 'BOWLER' }}>
          ФОРМАТ ОБУЧЕНИЯ
        </h2>

        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto [&_[role=region]]:border-none relative overflow-hidden"
        >
          <CarouselContent className="-ml-4 [&>*]:border-none [&>*]:pl-4">
            {items.map(item => (
              <CarouselItem key={item.id} className="basis-full">
                <div className="p-1">
                  <div className="flex flex-col gap-6 md:gap-10 p-6 md:p-8 min-h-[300px] md:min-h-[400px]">
                    <h3 className="text-[32px] md:text-[40px] tracking-wider" style={{ fontFamily: 'BOWLER' }}>
                      {item.title}
                    </h3>
                    <div className="flex flex-col gap-4 md:gap-6">
                      <p className="text-xl md:text-2xl leading-normal">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="border-none w-14 h-14 bg-transparent hover:bg-transparent text-black absolute -translate-x-full left-4" />
            <CarouselNext className="border-none w-14 h-14 bg-transparent hover:bg-transparent text-black absolute translate-x-full right-4" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselBlock
