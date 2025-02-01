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
    <div className="w-full px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] md:text-[40px] mb-8 md:mb-12 text-center md:text-left" style={{ fontFamily: 'BOWLER' }}>
          ВОЗМОЖНОСТИ ЛЬГОТНОГО<br />ОБУЧЕНИЯ
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Content */}
          <div className="flex-1 bg-white rounded-[20px] p-6 md:p-12 border border-black">
            <h3 className="text-[24px] md:text-[32px] mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'BOWLER' }}>
              ВЫБОР ИНТЕРЕСНОЙ<br className="hidden md:block" />СПЕЦИАЛИЗАЦИИ
            </h3>

            <ul className="list-none space-y-2 mb-6 md:mb-8">
              {specializations.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-xl mt-1">•</span>
                  <span className="text-sm md:text-base text-gray-700 flex-1">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mb-6 md:mb-8">
              <div className="bg-[#1E1B4B] text-white px-4 py-2 rounded text-sm md:text-base">
                -55 %
              </div>
              <div className="text-xl md:text-2xl" style={{ fontFamily: 'BOWLER' }}>
                ОТ ОБЩЕЙ СТОИМОСТИ
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 mb-8 md:mb-12">
              Льготное обучение позволяет проходить обучение
              <br className="hidden md:block" />
              по комфортным условиям
            </p>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h4 className="text-xl md:text-2xl mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'BOWLER' }}>
                  ПРОФОРИЕНТАЦИЯ
                </h4>
                <p className="text-sm md:text-base text-gray-700">
                  Менеджер приема специально обученный специалист
                  <br className="hidden md:block" />
                  профориентации и поможет с выбором специализации
                </p>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'BOWLER' }}>
                  ДИПЛОМ
                </h4>
                <p className="text-sm md:text-base text-gray-700">
                  На базе высшего/средне-специального
                  <br className="hidden md:block" />
                  - о переподготовке
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-[400px] h-[300px] md:h-auto">
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
