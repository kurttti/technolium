'use client'

import Image from 'next/image'

const languages = [
  { name: 'JavaScript', icon: '/landing/second/language-icon/js.svg' },
  { name: 'Python', icon: '/landing/second/language-icon/python.svg' },
  { name: 'C#', icon: '/landing/second/language-icon/csharp.svg' },
  { name: 'Go', icon: '/landing/second/language-icon/go.svg' },
]

const EducationPlanBlock = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] md:text-[64px] mb-8 md:mb-12 text-center tracking-wider" style={{ fontFamily: 'BOWLER' }}>
          ПЛАН ПРИЕМА
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Стандартное обучение */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[45%] h-[300px] md:h-[480px] relative rounded-[18px] border border-black overflow-hidden">
              <Image
                src="/landing/second/sad-notebook.jpg"
                alt="Ноутбук"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-6 md:p-8 rounded-[18px] border border-black bg-white">
              <div className="flex flex-col gap-5">
                <h3 className="text-[24px] md:text-[32px] text-center md:text-left" style={{ fontFamily: 'BOWLER' }}>
                  СТАНДАРТНОЕ ОБУЧЕНИЕ
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base">Полный список специальностей</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base">Возможность проведения консультации для выбора направления</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base">Упрощённое заключение договора</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base">Диплом на базе высшего/средне-специального образования</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>—</span>
                    <span className="text-sm md:text-base font-medium">Приобретение доступно по заявке на звонок с менеджером по продажам</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                  {languages.map((lang) => (
                    <div key={lang.name} className="w-12 h-12 relative">
                      <Image
                        src={lang.icon}
                        alt={lang.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Льготное обучение */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[45%] h-[300px] md:h-[480px] relative rounded-[18px] border border-black overflow-hidden">
              <Image
                src="/landing/second/two-man-with-notebook.jpg"
                alt="Студенты за ноутбуком"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-6 md:p-8 rounded-[18px] border border-black bg-[#0A0A2C] relative overflow-hidden">
              <Image
                src="/landing/second/gradient-1.png"
                alt="Градиент"
                fill
                className="object-cover"
                priority
              />
              <div className="relative z-10">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-6">
                    <h3 className="text-[24px] md:text-[32px] text-white text-center md:text-left" style={{ fontFamily: 'BOWLER' }}>
                      ЛЬГОТНОЕ ОБУЧЕНИЕ
                    </h3>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white">—</span>
                        <span className="text-white text-sm md:text-base">Тестирование с менеджером приёма для определения в группу</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white">—</span>
                        <span className="text-white text-sm md:text-base">Ограниченный выбор специальностей (уточнить у менеджера приёма)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white">—</span>
                        <span className="text-white text-sm md:text-base">Диплом на базе высшего/средне-специального образования</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white">—</span>
                        <span className="text-white text-sm md:text-base">Упрощённое заключение договора</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <div className="text-white text-[24px] md:text-[32px] font-bold text-center md:text-left" style={{ fontFamily: 'BOWLER' }}>
                      КОМПЕНСАЦИЯ ДО 55% ОТ СТОИМОСТИ ОБУЧЕНИЯ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationPlanBlock
