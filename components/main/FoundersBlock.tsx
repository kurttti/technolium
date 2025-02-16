'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FlowingShape } from '../3d/FlowingShape'

interface Founder {
  id: number
  name: string
  surname: string
  role: string
  photo: string
  achievements: string[]
}

const founders: Founder[] = [
  {
    id: 1,
    name: 'БАЛОЯН',
    surname: 'НАЗАР',
    role: 'PYTHON DEVELOPER SENIOR',
    photo: '/main/nazar.png', // Изображение должно быть в папке public
    achievements: [
      'Ведущий преподаватель и основатель Университета Технолиум',
      'Более 6 лет в коммерческой разработке',
      'Более 3х лет в обучении и разработке',
      'Степень магистра в области математики и computer science'
    ]
  },
  {
    id: 2,
    name: 'БАЛОЯН',
    surname: 'АРСЕНИЙ',
    role: 'BUSINESS ANALYST',
    photo: '/main/arseniy.png', // Изображение должно быть в папке public
    achievements: [
      'Основатель Университета Технолиум',
      'Призер олимпиады «Я профессионал» по направлению «Бизнес-информатика»',
      'Получатель гранта президента Российский Федерации',
      'Высшее образование СПбГЭУ, ВШЭ'
    ]
  }
]

const FoundersBlock = () => {
  return (
    <section className="w-full py-[40px] lg:py-section-margin px-4 xl:px-0">
      <div className="max-w-content mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-h1 leading-none lg:leading-h1 font-h1 text-center mb-[40px] lg:mb-[70px] tracking-banner"
          style={{ fontFamily: 'BOWLER' }}
        >
          ОСНОВАТЕЛИ ТЕХНОЛИУМ
        </motion.h1>

        {/* Блок с Назаром */}
        <div className="flex flex-col lg:flex-row mb-[30px] lg:mb-[50px] items-center max-w-content mx-auto">
          {/* Блок с фоновой фигурой */}
          <div className="hidden lg:block w-[10%] xl:w-[150px] h-[550px] flex-shrink-0">
            <Image
              src="/main/naz-founder-figure.jpg"
              alt="Декоративный элемент"
              width={150}
              height={486}
              className="h-full w-full"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Блок с Назаром */}
          <div className="relative w-full sm:w-[80%] lg:w-[45%] h-auto lg:h-[550px] flex-shrink-0 bg-[#F8F8F8] rounded-[20px] lg:rounded-none lg:rounded-tr-[20px] lg:rounded-br-[20px] p-6 sm:p-8 pr-10" >
            <div className="flex flex-col items-center justify-center h-full">
              {/* Фото */}
              <div 
                className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] mb-6 lg:mb-8 rounded-full overflow-hidden"
                style={{ background: 'linear-gradient(85.14deg, #594A73 9.35%, #151B4D 91.08%)' }}
              >
                <Image
                  src="/main/nazar.png"
                  alt="Назар Балоян"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Роль */}
              <div className="bg-black text-white px-4 sm:px-8 lg:px-10 py-2 lg:py-3 rounded-[32px] mb-6 lg:mb-8">
                <span className="text-[20px] sm:text-[28px] lg:text-[36px] leading-normal font-text whitespace-nowrap">Python Developer Senior</span>
              </div>

              {/* Имя */}
              <h2 
                className="text-[24px] sm:text-[28px] lg:text-[32px] leading-none tracking-wider text-center"
                style={{ fontFamily: 'BOWLER' }}
              >
                БАЛОЯН НАЗАР
              </h2>
            </div>
          </div>

          {/* Достижения */}
          <div className="w-full sm:w-[80%] lg:w-[45%] mt-6 lg:mt-0 lg:ml-8 space-y-3 lg:space-y-4 px-4 lg:px-0">
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] leading-normal font-text">
              — Ведущий преподаватель и основатель Университета Технолиум
            </p>
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] leading-normal font-text">
              — Более 6 лет в коммерческой разработке
            </p>
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] leading-normal font-text">
              — Более 3х лет в обучении и разработке
            </p>
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] leading-normal font-text">
              — Степень магистра в области математики и computer science
            </p>
          </div>
        </div>

        {/* Блок с Арсением */}
        <div className="flex flex-col lg:flex-row-reverse items-center max-w-content mx-auto">
          {/* Блок с фоновой фигурой */}
          <div className="hidden lg:block w-[10%] xl:w-[150px] h-[550px] flex-shrink-0">
            <Image
              src="/main/ars-founder-figure.jpg"
              alt="Декоративный элемент"
              width={150}
              height={486}
              className="h-full w-full"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Блок с контентом */}
          <div className="relative w-full sm:w-[80%] lg:w-[45%] h-auto lg:h-[550px] flex-shrink-0 bg-[#F8F8F8] rounded-[20px] lg:rounded-none lg:rounded-tl-[20px] lg:rounded-bl-[20px] p-6 sm:p-8">
            <div className="flex flex-col items-center justify-center h-full">
              <div 
                className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] mb-6 lg:mb-8 rounded-full overflow-hidden"
                style={{ background: 'linear-gradient(85.14deg, #594A73 9.35%, #151B4D 91.08%)' }}
              >
                <Image
                  src="/main/arseniy.png"
                  alt="Арсений Балоян"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-black text-white px-4 sm:px-8 lg:px-10 py-2 lg:py-3 rounded-[32px] mb-6 lg:mb-8">
                <span className="text-[20px] sm:text-[28px] lg:text-[36px] leading-normal font-text whitespace-nowrap">Business Analyst</span>
              </div>

              <h2 
                className="text-[24px] sm:text-[28px] lg:text-[32px] leading-none tracking-wider text-center"
                style={{ fontFamily: 'BOWLER' }}
              >
                БАЛОЯН АРСЕНИЙ
              </h2>
            </div>
          </div>

          {/* Достижения */}
          <div className="w-full sm:w-[80%] lg:w-[45%] mt-6 lg:mt-0 lg:mr-8 space-y-3 lg:space-y-4 px-4 lg:px-0">
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] leading-normal font-text">
              — Основатель Университета Технолиум
            </p>
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] leading-normal font-text">
              — Призер олимпиады «Я профессионал» по направлению «Бизнес-информатика»
            </p>
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] leading-normal font-text">
              — Получатель гранта президента Российский Федерации
            </p>
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] leading-normal font-text">
              — Высшее образование СПбГЭУ, ВШЭ
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundersBlock 