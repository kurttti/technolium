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

        <div className="relative px-16">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            setApi={setApi}
            className="w-full max-w-5xl mx-auto [&_[role=region]]:border-none relative overflow-visible"
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

            {/* Navigation Arrows */}
            <div className="absolute inset-0 -mx-16 flex items-center justify-between pointer-events-none z-20">
              <div className="pointer-events-auto">
                <button 
                  onClick={handlePrevClick}
                  className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-white/90 hover:bg-white text-black rounded-full shadow-lg border border-black/10 transition-all hover:scale-110"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="pointer-events-auto">
                <button 
                  onClick={handleNextClick}
                  className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-white/90 hover:bg-white text-black rounded-full shadow-lg border border-black/10 transition-all hover:scale-110"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === index ? 'bg-black w-4' : 'bg-gray-400'
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
