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

  const calculateMonthlyPayment = (basePrice: number, months: number) => {
    if (months === 0) return basePrice
    return Math.round(basePrice / months)
  }

  return (
    <section className="w-full py-24 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Тарифы обучения</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {tariffPlans.map((plan) => {
            const months = selectedMonths[plan.title]
            const monthlyPayment = calculateMonthlyPayment(plan.basePrice, months)
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
                  <CardHeader className="border-b border-gray-200 dark:border-gray-800 p-6">
                    <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex-1 space-y-2">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-lg mt-[2px]">—</span>
                          <span className="text-lg leading-tight">{feature.name}</span>
                        </div>
                      ))}
                    </div>
                      
                    <div className="pt-6">
                      <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">
                        Рассчитать ежемесячный платеж
                      </p>
                      <div className="text-4xl font-bold mb-4 h-[48px] relative">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={monthlyPayment}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ 
                              duration: 0.15,
                              ease: "easeOut"
                            }}
                            className="absolute"
                          >
                            {monthlyPayment.toLocaleString('ru-RU')} ₽
                            {months > 0 && (
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
                      
                      <div className="space-y-3">
                        <motion.div
                          whileTap={{ scale: 1.01 }}
                          transition={{ duration: 0.1 }}
                        >
                          <Slider
                            value={[selectedMonths[plan.title]]}
                            min={0}
                            max={plan.maxMonths}
                            step={1}
                            onValueChange={(values) => {
                              setSelectedMonths(prev => ({
                                ...prev,
                                [plan.title]: values[0]
                              }))
                            }}
                            className={`${
                              isDark 
                                ? '[&_[role=slider]]:bg-blue-500 [&_[role=slider]]:border-blue-500 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=track]]:bg-gray-700' 
                                : '[&_[role=slider]]:bg-black [&_[role=slider]]:border-black [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=track]]:bg-gray-200'
                            }`}
                          />
                        </motion.div>
                        
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                          <span>0</span>
                          <span>6</span>
                          <span>12</span>
                          <span>18{isDark && " 24"} мес</span>
                        </div>

                        <div className="space-y-4">
                          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                            Стоимость указана с учетом льготы.<br />
                            Чтобы получить льготу, оставьте заявку
                          </p>

                          <Button 
                            className={`w-full py-6 text-lg ${
                              isDark 
                                ? 'bg-blue-500 hover:bg-blue-600' 
                                : 'bg-black hover:bg-gray-800'
                            }`}
                          >
                            Оформить заявку
                          </Button>
                        </div>
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