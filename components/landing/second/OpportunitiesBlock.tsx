'use client'

import Image from 'next/image'

const specializations = [
  'Машинное обучение',
  'Информационная безопасность',
  'Автоматизированное тестирование ПО',
  'Серверная Веб-разработка'
]

export const OpportunitiesBlock = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] md:text-[64px] mb-8 md:mb-16 text-center tracking-wider" style={{ fontFamily: 'BOWLER' }}>
          ВОЗМОЖНОСТИ ЛЬГОТНОГО ОБУЧЕНИЯ
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Left side - Content */}
          <div className="flex-1 bg-white rounded-[20px] p-6 md:p-8 lg:p-12 border border-black">
            <h3 className="text-[22px] md:text-[28px] lg:text-[32px] mb-4 md:mb-6 lg:mb-8 leading-tight break-words hyphens-auto" style={{ fontFamily: 'BOWLER' }}>
              ВЫБОР ИНТЕРЕСНОЙ{' '}<br className="hidden lg:block" />СПЕЦИАЛИЗАЦИИ
            </h3>

            <ul className="list-none space-y-2 mb-4 md:mb-6 lg:mb-8">
              {specializations.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-lg md:text-xl mt-1 shrink-0">•</span>
                  <span className="text-sm md:text-base text-gray-700 break-words hyphens-auto">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4 mb-4 md:mb-6 lg:mb-8">
              <div className="bg-[#1E1B4B] text-white px-3 md:px-4 py-1.5 md:py-2 rounded text-sm md:text-base shrink-0">
                -55 %
              </div>
              <div className="text-lg md:text-xl lg:text-2xl break-words hyphens-auto" style={{ fontFamily: 'BOWLER' }}>
                ОТ ОБЩЕЙ СТОИМОСТИ
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 lg:mb-12 break-words hyphens-auto">
              Льготное обучение позволяет проходить обучение
              <br className="hidden lg:block" />
              по комфортным условиям
            </p>

            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div>
                <h4 className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-4 leading-tight break-words hyphens-auto" style={{ fontFamily: 'BOWLER' }}>
                  ПРОФОРИЕНТАЦИЯ
                </h4>
                <p className="text-sm md:text-base text-gray-700 break-words hyphens-auto">
                  Менеджер приема специально обученный специалист
                  <br className="hidden lg:block" />
                  профориентации и поможет с выбором специализации
                </p>
              </div>

              <div>
                <h4 className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-4 leading-tight break-words hyphens-auto" style={{ fontFamily: 'BOWLER' }}>
                  ДИПЛОМ
                </h4>
                <p className="text-sm md:text-base text-gray-700 break-words hyphens-auto">
                  На базе высшего/средне-специального
                  <br className="hidden lg:block" />
                  - о переподготовке
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:hidden lg:block lg:w-[400px] h-[300px] lg:h-auto">
            <Image
              src="/landing/secong/gradient-2.jpg"
              alt="Gradient"
              width={400}
              height={800}
              className="w-full h-full object-cover rounded-[31px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
