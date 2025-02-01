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
        <h2 className="text-[40px] mb-12" style={{ fontFamily: 'BOWLER' }}>
          ВОЗМОЖНОСТИ ЛЬГОТНОГО ОБУЧЕНИЯ
        </h2>

        <div className="flex">
          {/* Left side - Content */}
          <div className="flex-1 bg-white rounded-[20px] p-12 border border-black">
            <h3 className="text-[32px] mb-8" style={{ fontFamily: 'BOWLER' }}>
              ВЫБОР ИНТЕРЕСНОЙ<br />СПЕЦИАЛИЗАЦИИ
            </h3>

            <ul className="list-none space-y-2 mb-8">
              {specializations.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#1E1B4B] text-white px-4 py-2 rounded">
                -55 %
              </div>
              <div className="text-2xl" style={{ fontFamily: 'BOWLER' }}>
                ОТ ОБЩЕЙ СТОИМОСТИ
              </div>
            </div>

            <p className="text-gray-700 mb-12">
              Льготное обучение позволяет проходить обучение<br />
              по комфортным условиям
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl mb-4" style={{ fontFamily: 'BOWLER' }}>
                  ПРОФОРИЕНТАЦИЯ
                </h4>
                <p className="text-gray-700">
                  Менеджер приема специально обученный специалист<br />
                  профориентации и поможет с выбором специализации
                </p>
              </div>

              <div>
                <h4 className="text-2xl mb-4" style={{ fontFamily: 'BOWLER' }}>
                  ДИПЛОМ
                </h4>
                <p className="text-gray-700">
                  На базе высшего/средне-специального<br />
                  - о переподготовке
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-[400px]">
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
