"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface TariffFeature {
  name: string
}

interface TariffPlan {
  title: string
  basePrice: number
  features: TariffFeature[]
  maxMonths: number
}

const tariffPlans: TariffPlan[] = [
  {
    title: "СТАНДАРТНЫЙ ТАРИФ",
    basePrice: 91350,
    maxMonths: 18,
    features: [
      { name: "Записанные уроки в доступе навсегда" },
      { name: "До 20 учеников в одной группе" },
      { name: "Общение в чате с преподавателем" },
      { name: "Проверка домашних заданий в течение 36 часов" },
      { name: "Выбор специалитета из 4х направлений" },
      { name: "56 часов живых вебинаров" },
      { name: "60 часов записанного контента" },
      { name: "110 часов практики с наставником" },
      { name: "Центр карьеры" },
    ],
  },
  {
    title: "ИНДИВИДУАЛЬНОЕ ВЕДЕНИЕ",
    basePrice: 175000,
    maxMonths: 24,
    features: [
      { name: "Записанные уроки в доступе навсегда" },
      { name: "9 человек в группе" },
      { name: "Общение в чате с преподавателем" },
      { name: "24 часа на проверку домашних заданий" },
      { name: "Выбор специалитета из 4х направлений" },
      { name: "56 часов живых вебинаров" },
      { name: "60 часов записанного контента" },
      { name: "110 часов практики с наставником" },
      { name: "10 уроков по применению искусственного интеллекта" },
      { name: "10 индивидуальных встреч с действующим разработчиком" },
      { name: "4 индивидуальные встречи с Назаром на этапе карьерного центра" },
      { name: "3 первых Telegram бота разрабатываются с поддержкой наставника" },
    ],
  },
]

export function TariffBlock() {
  const [selectedMonths, setSelectedMonths] = React.useState<{ [key: string]: number }>({
    "СТАНДАРТНЫЙ ТАРИФ": 0,
    "ИНДИВИДУАЛЬНОЕ ВЕДЕНИЕ": 0,
  })

  const calculateMonthlyPayment = (basePrice: number, sliderValue: number) => {
    const months = 24 - sliderValue
    
    if (months === 0) {
      return basePrice
    }
    
    return Math.round(basePrice / months)
  }

  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById('application-form')
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] leading-tight font-h1 text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 tracking-banner"
          style={{ fontFamily: 'BOWLER' }}
        >
          ТАРИФЫ ОБУЧЕНИЯ
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {tariffPlans.map((plan) => {
            const monthlyPayment = calculateMonthlyPayment(plan.basePrice, selectedMonths[plan.title])
            const isDark = plan.title === "ИНДИВИДУАЛЬНОЕ ВЕДЕНИЕ"

            return (
              <Card 
                key={plan.title}
                className={`relative overflow-hidden border-0 h-full ${
                  isDark 
                    ? 'bg-[#14161F] text-white' 
                    : 'bg-white'
                }`}
              >
                <div className="flex flex-col h-full">
                  <CardHeader className="border-b border-gray-200 dark:border-gray-800 p-4 sm:p-6">
                    <CardTitle 
                      className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[50px] leading-tight tracking-banner text-center"
                      style={{ fontFamily: 'BOWLER' }}
                    >
                      {plan.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="flex-1 space-y-2">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] leading-tight">—</span>
                          <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] leading-normal">{feature.name}</span>
                        </div>
                      ))}
                    </div>
                      
                    <div className="pt-6">
                      <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">
                        Рассчитать ежемесячный платеж
                      </p>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 h-[48px] relative">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={monthlyPayment}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute"
                          >
                            {monthlyPayment.toLocaleString('ru-RU')} ₽
                            {(24 - selectedMonths[plan.title]) !== 0 && (
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                                className="text-lg ml-2"
                              >
                                /месяц
                              </motion.span>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      
                      <div className="relative pt-6">
                        <Slider
                          value={[selectedMonths[plan.title]]}
                          min={0}
                          max={24}
                          step={6}
                          onValueChange={(values) => {
                            setSelectedMonths(prev => ({
                              ...prev,
                              [plan.title]: values[0]
                            }))
                          }}
                          className={`$${
                            isDark 
                              ? `
                                [&_[role=slider]]:bg-cta 
                                [&_[role=slider]]:border-cta 
                                [&_[role=slider]]:h-5 
                                [&_[role=slider]]:w-5 
                                [&_[role=track]]:bg-gray-700 
                                [&_[role=track]]:h-3
                                [&_[role=track].bg-cta]:h-3
                                [&_[role=track].bg-cta]:bg-cta
                              ` 
                              : `
                                [&_[role=slider]]:bg-black 
                                [&_[role=slider]]:border-black 
                                [&_[role=slider]]:h-5 
                                [&_[role=slider]]:w-5 
                                [&_[role=track]]:bg-gray-200 
                                [&_[role=track]]:h-3
                                [&_[role=track].bg-black]:h-3
                                [&_[role=track].bg-black]:bg-black
                              `
                          }`}
                        >
                          {/* Точки на слайдере */}
                          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
                            {[0, 6, 12, 18, 24].map((month) => (
                              <button
                                key={month}
                                onClick={() => {
                                  setSelectedMonths(prev => ({
                                    ...prev,
                                    [plan.title]: 24 - month
                                  }))
                                }}
                                className={`
                                  absolute h-5 w-5 
                                  -translate-x-1/2 
                                  rounded-full 
                                  transition-colors 
                                  pointer-events-auto
                                  border-2
                                  ${isDark 
                                    ? (24 - selectedMonths[plan.title]) === month
                                      ? 'bg-cta border-cta' 
                                      : 'bg-gray-800 border-gray-700 hover:border-cta'
                                    : (24 - selectedMonths[plan.title]) === month
                                      ? 'bg-black border-black' 
                                      : 'bg-white border-gray-300 hover:border-black'
                                  }
                                `}
                                style={{ left: `${(month / 24) * 100}%` }}
                              />
                            ))}
                          </div>
                        </Slider>

                        {/* Кликабельные цифры месяцев */}
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-6">
                          {[24, 18, 12, 6, 0].map((month) => (
                            <button
                              key={month}
                              onClick={() => {
                                setSelectedMonths(prev => ({
                                  ...prev,
                                  [plan.title]: 24 - month
                                }))
                              }}
                              className={`
                                hover:text-black dark:hover:text-white transition-colors cursor-pointer
                                ${(24 - selectedMonths[plan.title]) === month 
                                  ? isDark ? 'text-white' : 'text-black' 
                                  : ''
                                }
                              `}
                            >
                              {month} {month === 0 ? 'мес' : ''}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                          Стоимость указана с учетом льготы.<br />
                          Чтобы получить льготу, оставьте заявку
                        </p>

                        <Button 
                          onClick={scrollToApplicationForm}
                          className={`w-full py-4 rounded-full text-lg font-medium transition-colors
                            ${isDark 
                              ? 'bg-cta text-white hover:bg-cta/90' 
                              : 'bg-black text-white hover:bg-black/90'
                            }`}
                        >
                          Оформить заявку
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}