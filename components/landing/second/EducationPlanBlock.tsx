'use client'

import Image from 'next/image'

const EducationPlanBlock = () => {
  const languages = [
    { name: 'JavaScript', icon: '/landing/secong/language-icon/js.svg' },
    { name: 'Python', icon: '/landing/secong/language-icon/python.svg' },
    { name: 'C#', icon: '/landing/secong/language-icon/csharp.svg' },
    { name: 'Go', icon: '/landing/secong/language-icon/go.svg' },
  ]

  return (
    <div className="w-full py-16">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[64px] mb-12 text-center tracking-wider" style={{ fontFamily: 'BOWLER' }}>
          ПЛАН ПРИЕМА
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {/* Стандартное обучение */}
          <div className="flex bg-white rounded-3xl overflow-hidden h-[480px]">
            <div className="w-[45%] relative">
              <Image
                src="/landing/secong/sad-notebook.jpg"
                alt="Ноутбук"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-8">
              <div className="flex justify-between">
                <div className="flex flex-col gap-5">
                  <h3 className="text-[32px]" style={{ fontFamily: 'BOWLER' }}>
                    СТАНДАРТНОЕ ОБУЧЕНИЕ
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">—</span>
                      <p className="text-xl">Полный список специальностей</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">—</span>
                      <p className="text-xl">Возможность проведения консультации для выбора направления</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">—</span>
                      <p className="text-xl">Упрощённое заключение договора</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">—</span>
                      <p className="text-xl">Диплом на базе высшего/средне-специального образования</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">—</span>
                      <p className="text-xl font-medium">Приобретение доступно по заявке на звонок с менеджером по продажам</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 ml-6">
                  {languages.map((lang) => (
                    <div key={lang.name} className="w-12 h-12 relative">
                      <Image
                        src={lang.icon}
                        alt={lang.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Льготное обучение */}
          <div className="flex bg-[#0A0A2C] rounded-3xl overflow-hidden h-[480px] relative">
            <Image
              src="/landing/secong/gradient-1.png"
              alt="Градиент"
              fill
              className="object-cover"
              priority
            />
            <div className="w-[45%] relative">
              <Image
                src="/landing/secong/two-man-with-notebook.jpg"
                alt="Студенты за ноутбуком"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-8 relative z-10">
              <div className="flex flex-col gap-5">
                <h3 className="text-[32px] text-white" style={{ fontFamily: 'BOWLER' }}>
                  ЛЬГОТНОЕ ОБУЧЕНИЕ
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl text-white">—</span>
                    <p className="text-xl text-white">Тестирование с менеджером приёма для определения в группу</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl text-white">—</span>
                    <p className="text-xl text-white">Ограниченный выбор специальностей (уточнить у менеджера приёма)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl text-white">—</span>
                    <p className="text-xl text-white">Диплом на базе высшего/средне-специального образования</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl text-white">—</span>
                    <p className="text-xl text-white">Упрощённое заключение договора</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-xl font-medium text-white">КОМПЕНСАЦИЯ ДО 55% ОТ СТОИМОСТИ ОБУЧЕНИЯ</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center px-8 relative z-10">
              <div className="text-[64px] [writing-mode:vertical-lr] rotate-180 text-white" style={{ fontFamily: 'BOWLER' }}>
                PYTHON
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationPlanBlock
