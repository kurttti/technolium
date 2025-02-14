'use client'

import Image from 'next/image'

const EducationFormatBlock = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-section-margin px-4 sm:px-6 md:px-8">
      <div className="max-w-content mx-auto">
        <h2 
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-h2 leading-tight lg:leading-h2 font-h2 text-center uppercase tracking-banner mb-8 sm:mb-10 md:mb-12 lg:mb-[70px]"
          style={{ fontFamily: 'BOWLER' }}
        >
          Формат обучения
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-[70px]">
          {/* 01 МАТЕРИАЛЫ */}
          <div className="bg-[#F8F8F8] rounded-[20px] p-6 sm:p-8 md:p-12 lg:p-[67px]">
            <h3 
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6 sm:mb-8 md:mb-10 lg:mb-[36px]"
              style={{ fontFamily: 'BOWLER' }}
            >
              01 МАТЕРИАЛЫ
            </h3>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[36px]">
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
                — Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ
              </p>
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
                — Продолжительность каждой, отдельно взятой лекции - до 15 минут
              </p>
            </div>
          </div>

          {/* 02 ЛЕКЦИИ */}
          <div className="bg-[#F8F8F8] rounded-[20px] p-6 sm:p-8 md:p-12 lg:p-[67px]">
            <h3 
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6 sm:mb-8 md:mb-10 lg:mb-[36px]"
              style={{ fontFamily: 'BOWLER' }}
            >
              02 ЛЕКЦИИ
            </h3>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[36px]">
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
                — Живые встречи с преподавателем, в одном потоке до 20 человек
              </p>
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
                — Выделенное время под "вопрос-ответ" и знакомство с другими студентами
              </p>
            </div>
          </div>

          {/* 03 РЕПЕТИТОРЫ */}
          <div className="bg-[#F8F8F8] rounded-[20px] p-6 sm:p-8 md:p-12 lg:p-[67px]">
            <h3 
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6 sm:mb-8 md:mb-10 lg:mb-[36px]"
              style={{ fontFamily: 'BOWLER' }}
            >
              03 РЕПЕТИТОРЫ
            </h3>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[36px]">
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
                — Дополнительные занятия 1 на 1 с ведущими преподавателями "Технолиум"
              </p>
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
                — Формат встречи определяется запросом студента
              </p>
            </div>
          </div>

          {/* 04 ПРАКТИКА */}
          <div className="bg-[#F8F8F8] rounded-[20px] p-6 sm:p-8 md:p-12 lg:p-[67px]">
            <h3 
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6 sm:mb-8 md:mb-10 lg:mb-[36px]"
              style={{ fontFamily: 'BOWLER' }}
            >
              04 ПРАКТИКА
            </h3>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[36px]">
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
                — Обсуждение коммерческой составляющей профессии
              </p>
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
                — Репетитор ведёт трудовую деятельность в IT на момент преподавания
              </p>
            </div>
          </div>
        </div>

        {/* Блок коммерческой деятельности */}
        <div className="w-full h-[200px] sm:h-[250px] md:h-[275px] lg:h-[300px] relative rounded-[20px] overflow-hidden">
          {/* Фоновое изображение */}
          <div className="absolute inset-0">
            <Image
              src="/main/gradient-1.jpg"
              alt="Градиентный фон"
              fill
              className="object-cover"
            />
          </div>

          {/* Контент */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 md:px-8">
            <h2 
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight font-normal mb-4 sm:mb-6 md:mb-8 lg:mb-[36px] text-center uppercase"
              style={{ fontFamily: 'BOWLER' }}
            >
              КОММЕРЧЕСКАЯ ДЕЯТЕЛЬНОТЬ
            </h2>
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal text-center max-w-[900px]">
              Выполнение тестовых и практических заданий от работодателей с третьего месяца
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationFormatBlock 